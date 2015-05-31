package com.dv.gtusach.client;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.dv.gtusach.client.event.PropertyChangeEvent;
import com.dv.gtusach.client.event.PropertyChangeEvent.EventTypeEnum;
import com.dv.gtusach.client.model.Book;
import com.dv.gtusach.client.model.IBook;
import com.dv.gtusach.client.model.IBookList;
import com.dv.gtusach.client.model.IMapData;
import com.dv.gtusach.client.model.ISystemInfo;
import com.dv.gtusach.client.model.IUser;
import com.dv.gtusach.client.model.ParserScript;
import com.dv.gtusach.client.model.SystemInfo;
import com.dv.gtusach.client.model.User;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestBuilder.Method;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.Response;
import com.google.gwt.http.client.URL;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.client.Timer;
import com.google.web.bindery.autobean.shared.AutoBean;
import com.google.web.bindery.autobean.shared.AutoBeanCodex;
import com.google.web.bindery.event.shared.EventBus;

public class BookServiceImpl implements IBookService {
	static Logger log = Logger.getLogger("BookServiceImpl");
	private static final String COOKIE_ID = "thuvien-dv.sid";
	private static final User currentUser = new User("", "");
	private static int sessionTimeLeftSec = -1;
	private static DateTimeFormat dateTimeFormat = DateTimeFormat.getFormat(DateTimeFormat.PredefinedFormat.ISO_8601);
	private Timer timer;
	private MyAutoBeanFactory factory;
	private EventBus eventBus;
	
	public BookServiceImpl(EventBus eventBus) {
		this.eventBus = eventBus;
	}
	
	public void init() {
		log.info("Initalizing book service...");
		if (timer != null && timer.isRunning()) {
			timer.cancel();
		}
		timer = new Timer() {
			@Override
			public void run() {
				if (getUser().isLogon()) {
					validateSession();
				}
			}
		};
		timer.scheduleRepeating(60000);
		
		factory = GWT.create(MyAutoBeanFactory.class);
		
		String sid = Cookies.getCookie(COOKIE_ID);
		if (sid != null && sid.length() > 0) {
			try {								
				// retrieve the user info from session id
				RequestCallback cb = new RequestCallback() {
					@Override
					public void onResponseReceived(Request request, Response response) {
						try {
							if (response.getStatusCode() == 200) {
								log.info("getUser response: " + response.getText());						
								AutoBean<IUser> bean = AutoBeanCodex.decode(factory, IUser.class, response.getText());
								User user = new User(bean.as());
								currentUser.update(user);
								log.info("User bean: " + user);									
								// store in cookie
						    Cookies.setCookie("sid", user.getSessionId());													
							} else {
								log.warning("Error: " + response.getStatusText());
						    Cookies.removeCookie("sid");;													
							}
						} catch (Exception ex) {
							log.warning("Error: " + ex.getMessage());
					    Cookies.removeCookie("sid");;													
						}
					}
					@Override
					public void onError(Request request, Throwable ex) {
				    Cookies.removeCookie("sid");;													
					}				
				};
				
				String url = "/api/user/" + sid;
				executeRequest(RequestBuilder.GET, URL.encode(url), null, cb);				
			} catch (Exception ex) {
				// ignore
			}			
		}		
	}

	@Override
	public void login(String username, String password, final ICallback<User> callback) {
		RequestCallback cb = new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				try {
					if (response.getStatusCode() == 200) {
						log.info("login response: " + response.getText());						
						AutoBean<IUser> bean = AutoBeanCodex.decode(factory, IUser.class, response.getText());
						User user = new User(bean.as());
						currentUser.update(user);
						log.info("User bean: " + user);	
						
						// store in cookie
				    Cookies.setCookie("sid", user.getSessionId());					
						
						callback.onSuccess(user);												
					} else {
						log.warning("Error: " + response.getStatusText());
						callback.onFailure(new Exception(response.getStatusText() 
								+ "(" + response.getStatusCode() + ")"));
					}
				} catch (Exception ex) {
					log.warning("Error: " + ex.getMessage());
					callback.onFailure(ex);
				}
			}
			@Override
			public void onError(Request request, Throwable ex) {
				callback.onFailure(ex);
			}				
		};
		
		String url = "/api/login";
		User user = new User();
		user.setName(username);
		user.setPassword(password);
		AutoBean<IUser> bean = factory.create(IUser.class, user);	
		log.info("user bean " + bean);
		String payload = AutoBeanCodex.encode(bean).getPayload();
		executeRequest(RequestBuilder.POST, URL.encode(url), payload, cb);
	}

	@Override
	public void logout() {
		RequestCallback cb = new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				try {
					if (response.getStatusCode() == 200) {
						log.info("logout response: " + response.getText());
						AutoBean<IMapData> bean = AutoBeanCodex.decode(factory, IMapData.class, response.getText());
						String value = bean.as().getData().get("status");
						if (value != null && value.equals("1")) {
							userHasLoggedOff();
						}
					} else {
						log.warning("Error: " + response.getStatusText());
					}
				} catch (Exception ex) {
					userHasLoggedOff();
					log.warning("Error: " + ex.getMessage());
				}
			}
			@Override
			public void onError(Request request, Throwable ex) {
				userHasLoggedOff();
			}				
		};
		
		String url = "/api/logout/" + currentUser.getSessionId();
		executeRequest(RequestBuilder.GET, URL.encode(url), null, cb);		
	}
	
	private void userHasLoggedOff() {
		Cookies.removeCookie("sid");
		currentUser.update(new User());
		eventBus.fireEvent(new PropertyChangeEvent(EventTypeEnum.Authentication, "logout", getUser(), null));		
	}
	
	public User getUser() {
		return currentUser;
	}
	
	private void validateSession() {
		RequestCallback cb = new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				try {
					if (response.getStatusCode() == 200) {
						log.info("validateSession response: " + response.getText());
						AutoBean<IMapData> bean = AutoBeanCodex.decode(factory, IMapData.class, response.getText());
						String value = bean.as().getData().get("sessionTimeRemainingSec");
						if (value != null) {
							sessionTimeLeftSec = Integer.parseInt(value);
						} else {
							sessionTimeLeftSec = 0;
						}
						if (sessionTimeLeftSec <= 0) {
							userHasLoggedOff();
						}						
					} else {
						log.warning("Error: " + response.getStatusText());
					}
				} catch (Exception ex) {
					log.warning("Error: " + ex.getMessage());
				}
			}
			@Override
			public void onError(Request request, Throwable ex) {
			}				
		};
		
		String url = "/api/validate/" + currentUser.getSessionId();
		executeRequest(RequestBuilder.GET, URL.encode(url), null, cb);		
	}

	@Override
	public void getSystemInfo(final ICallback<SystemInfo> callback) {
		RequestCallback cb = new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				try {
					if (response.getStatusCode() == 200) {
						log.info("SystemInfo response: " + response.getText());						
						AutoBean<ISystemInfo> bean = AutoBeanCodex.decode(factory, ISystemInfo.class, response.getText());
						SystemInfo info = new SystemInfo(bean.as());
						log.info("SystemInfo bean: " + info);						
						callback.onSuccess(info);												
					} else {
						log.warning("Error: " + response.getStatusText());
						callback.onFailure(new Exception(response.getStatusText() 
								+ "(" + response.getStatusCode() + ")"));
					}
				} catch (Exception ex) {
					log.warning("Error: " + ex.getMessage());
					callback.onFailure(ex);
				}
			}
			@Override
			public void onError(Request request, Throwable ex) {
				callback.onFailure(ex);
			}				
		};
		String url = "/api/systeminfo";
		executeRequest(RequestBuilder.GET, URL.encode(url), null, cb);
	}

	@Override
	public void getBooks(final List<Integer> bookIds, final ICallback<List<Book>> callback) {
		RequestCallback cb = new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				List<Book> list = new ArrayList<Book>();
				Throwable error = null;
				try {
					if (response.getStatusCode() == 200) {
						String jsonResponse = "{\"books\": " + response.getText() + "}";
						log.info("getBooks response: +++" + jsonResponse + "+++");						
						AutoBean<IBookList> bean = AutoBeanCodex.decode(factory, IBookList.class, jsonResponse);
						for (IBook b: bean.as().getBooks()) {
							list.add(new Book(b));
							log.info("Found book: " + new Book(b));
						}
					} else {
						throw new Exception(response.getStatusText() 
								+ "(" + response.getStatusCode() + ")");
					}
				} catch (Exception ex) {
					error = ex;
				}
				
				if (error != null) {
					callback.onFailure(error);
				} else {
					callback.onSuccess(list);
				}
			}
			@Override
			public void onError(Request request, Throwable ex) {
				callback.onFailure(ex);
			}				
		};		
		String url = "/api/books/";
		if (bookIds == null || bookIds.size() == 0) {
			url += "0";
		} else {
			for (int i=0; i<bookIds.size(); i++) {
				if (i == 0) {
					url += bookIds.get(i);
				} else {
					url += "," + bookIds.get(i);
				}
			}
		}
		executeRequest(RequestBuilder.GET, URL.encode(url), null, cb);
	}

	//public void getBook(String bookId, final ICallback<Book> callback) {
		// TODO Auto-generated method stub		
	//}

	@Override
	public void createBook(Book newBook, final ICallback<Book> callback) {
		RequestCallback cb = new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				try {
					if (response.getStatusCode() == 200) {
						log.info("create response: " + response.getText());
						AutoBean<IBook> bean = AutoBeanCodex.decode(factory, IBook.class, response.getText());
						Book book = new Book(bean.as());
						log.info("Book bean: " + book);												
						callback.onSuccess(book);												
					} else {
						log.warning("Error: " + response.getStatusText());
						callback.onFailure(new Exception(response.getStatusText() 
								+ "(" + response.getStatusCode() + ")"));
					}
				} catch (Exception ex) {
					log.warning("Error: " + ex.getMessage());
					callback.onFailure(ex);
				}
			}
			@Override
			public void onError(Request request, Throwable ex) {
				callback.onFailure(ex);
			}				
		};
		
		String url = "/api/book/create";
		AutoBean<IBook> bean = factory.create(IBook.class, newBook);	
		String payload = AutoBeanCodex.encode(bean).getPayload();
		executeRequest(RequestBuilder.POST, URL.encode(url), payload, cb);
	}

	@Override
	public void abortBook(Book book, final ICallback<Void> callback) {
		postBook("/api/book/abort", book, callback);
	}

	@Override
	public void resumeBook(Book book, final ICallback<Void> callback) {
		postBook("/api/book/resume", book, callback);
	}

	@Override
	public void updateBook(Book book, final ICallback<Void> callback) {
		postBook("/api/book/update", book, callback);
	}

	@Override
	public void deleteBook(Book book, final ICallback<Void> callback) {
		postBook("/api/book/delete", book, callback);
	}

	private void postBook(final String url, Book book, final ICallback<Void> callback) {
		RequestCallback cb = new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				try {
					if (response.getStatusCode() == 200) {
						log.info(url + " - response: " + response.getText());												
						callback.onSuccess(null);												
					} else {
						log.warning("Error: " + response.getStatusText());
						callback.onFailure(new Exception(response.getStatusText() 
								+ "(" + response.getStatusCode() + ")"));
					}
				} catch (Exception ex) {
					log.warning("Error: " + ex.getMessage());
					callback.onFailure(ex);
				}
			}
			@Override
			public void onError(Request request, Throwable ex) {
				callback.onFailure(ex);
			}				
		};
		
		AutoBean<IBook> bean = factory.create(IBook.class, book);	
		String payload = AutoBeanCodex.encode(bean).getPayload();
		executeRequest(RequestBuilder.POST, URL.encode(url), payload, cb);
	}
	
	@Override
	public void downloadBook(String bookId, final ICallback<byte[]> callback) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void getParserScript(final ICallback<List<ParserScript>> callback) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void saveParserScript(final ICallback<ParserScript> parserScript) {
		// TODO Auto-generated method stub		
	}

	private void executeRequest(Method method, String url, String payload, RequestCallback callback) {		
		try {
			log.info("Execute request: " + url + ", payload=" + payload);
			RequestBuilder rb = new RequestBuilder(method, url);
			rb.setHeader("Content-Type","application/json");
			rb.setRequestData(payload);
			rb.setCallback(callback);
			rb.send();
		} catch (Exception ex) {
			callback.onError(null, ex);
		}		
	}
/*
	private <T> void json2java(String json, List<T> javaList, T t) throws JSONException {
		// expect an array
		JSONArray arr = parseJSONArray(json);
		for (int i=0; i<arr.size(); i++) {
			JSONValue val = arr.get(i);
			if (val.isObject() != null) {
				T obj = null;
				try {
					obj = (T)t.getClass().newInstance();
				} catch (Exception ex) {
					throw new RuntimeException(ex);
				}
				json2java(val.isObject(), obj);
				javaList.add(obj);
			} else {
				throw new JSONException("Invalid JSON array, expecting array of objects!");
			}
		}
	}
	
	private void json2java(String json, Object javaObj) throws JSONException {
		JSONObject jsonObj = parseJSONObject(json);
		json2java(jsonObj, javaObj);
	}
	
	private void json2java(JSONObject jsonObj, Object javaObj) throws JSONException {
		Field[] fields = javaObj.getClass().getDeclaredFields();
		for (Field field: fields) {
			JSONValue value = jsonObj.get(field.getName());
			if (value == null) {
				continue;
			}
			
			try {
				Class type = field.getType();
				if (type == Date.class) {
					String dateStr = value.isString().stringValue();
					field.set(javaObj, dateTimeFormat.parse(dateStr));
				} else if (type == Boolean.TYPE) {
					field.set(javaObj, value.isBoolean().booleanValue());				
				} else if (type == Long.TYPE || type == Integer.TYPE || type == Short.TYPE) {
					field.set(javaObj, (long)value.isNumber().doubleValue());				
				} else if (type == Float.TYPE || type == Double.TYPE) {
					field.set(javaObj, value.isNumber().doubleValue());				
				}	else if (type == String.class) {
					field.set(javaObj, value.isString().stringValue());
				}
			} catch (Exception ex) {
				throw new JSONException("Error extracting value for field: " + field.getName() 
						+ ". " + ex.getMessage());
			}
		}
	}
	
	private JSONArray parseJSONArray(String json) throws JSONException {
		JSONArray jsonArray;
		JSONValue jsonValue = JSONParser.parseStrict(json);
		if (jsonValue == null) {
			throw new JSONException("Error parsing json");
		}
		if ((jsonArray = jsonValue.isArray()) == null) {
			throw new JSONException("Error parsing json, not an array");
		}
		return jsonArray;
	}
	
	private JSONObject parseJSONObject(String json) throws JSONException {
		JSONObject jsonObject;
		
		JSONValue jsonValue = JSONParser.parseStrict(json);
		if (jsonValue == null) {
			throw new JSONException("Error parsing json");
		}		
		if ((jsonObject = jsonValue.isObject()) == null) {
			throw new JSONException("Error parsing json, not an object");
		}		
		return jsonObject;
	}
*/	
}
