package com.dv.gtusach.client;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

import com.dv.gtusach.client.event.PropertyChangeEvent;
import com.dv.gtusach.client.event.PropertyChangeEvent.EventTypeEnum;
import com.dv.gtusach.client.model.Book;
import com.dv.gtusach.client.model.IBook;
import com.dv.gtusach.client.model.IBookList;
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
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONException;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.client.Timer;
import com.google.web.bindery.autobean.shared.AutoBean;
import com.google.web.bindery.autobean.shared.AutoBeanCodex;
import com.google.web.bindery.event.shared.EventBus;

public class BookServiceImpl implements IBookService {
	static Logger log = Logger.getLogger("BookServiceImpl");
	//private static final String COOKIE_ID = "thuvien-dv.sid";
	//private static final User currentUser = new User("", "");
	//private static int sessionTimeLeftSec = -1;
	//private static DateTimeFormat dateTimeFormat = DateTimeFormat.getFormat(DateTimeFormat.PredefinedFormat.ISO_8601);
	private ClientFactory clientFactory;
	private MyAutoBeanFactory factory;
	
	public BookServiceImpl(ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
		this.factory = GWT.create(MyAutoBeanFactory.class);
	}
	
	@Override
	public void getSites(final ICallback<List<String>> callback) {
		RequestCallback cb = new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				try {
					if (response.getStatusCode() == 200) {
						log.info("sites response: " + response.getText());						
						List<String> sites = new ArrayList<String>();
						JSONArray jsonArray = parseJSONArray(response.getText());
						for (int i=0; i<jsonArray.size(); i++) {
							JSONString value = jsonArray.get(i).isString();
							if (value != null) {
								sites.add(value.stringValue());
							}
						}						
						callback.onSuccess(sites);												
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
		
		String url = "/api/sites";
		executeRequest(RequestBuilder.GET, URL.encode(url), null, cb);	
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
						log.info("User bean: " + user);													
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
						JSONWrapper root = new JSONWrapper(response.getText());
						String value = root.get("status").valueString();
						if (value != null && value.equals("1")) {
							log.info("user logged off successfully");
						} else {
							log.info("user not logged off!");
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
				log.warning("Error: " + ex.getMessage());
			}				
		};
		
		String url = "/api/logout/" + getUser().getSessionId();
		executeRequest(RequestBuilder.GET, URL.encode(url), null, cb);
	}
		
	public User getUser() {
		return clientFactory.getUser();
	}
	
	@Override
	public void validateSession(final ICallback<Integer> callback) {
		RequestCallback cb = new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				try {
					if (response.getStatusCode() == 200) {
						log.info("validateSession response: " + response.getText());
						JSONWrapper root = new JSONWrapper(response.getText());
						JSONWrapper value = root.get("sessionTimeRemainingSec");
						int sessionTimeLeftSec = 0;
						if (value != null) {
							sessionTimeLeftSec = value.valueInt();
						} 
						callback.onSuccess(sessionTimeLeftSec);
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
			}				
		};
		
		String url = "/api/validate/" + getUser().getSessionId();
		executeRequest(RequestBuilder.GET, URL.encode(url), null, cb);		
	}
	
	@Override
	public void rechargeSession(final ICallback<Integer> callback) {
		RequestCallback cb = new RequestCallback() {
			@Override
			public void onResponseReceived(Request request, Response response) {
				try {
					if (response.getStatusCode() == 200) {
						log.info("rechargeSession response: " + response.getText());
						JSONWrapper root = new JSONWrapper(response.getText());
						JSONWrapper value = root.get("sessionTimeRemainingSec");
						int sessionTimeLeftSec = 0;
						if (value != null) {
							sessionTimeLeftSec = value.valueInt();
						} 
						callback.onSuccess(sessionTimeLeftSec);
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
			}				
		};
		if (getUser().getSessionId().length() != 0) {
			String url = "/api/recharge/" + getUser().getSessionId();
			executeRequest(RequestBuilder.POST, URL.encode(url), null, cb);		
		}
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
						//log.info("getBooks response: +++" + jsonResponse + "+++");						
						AutoBean<IBookList> bean = AutoBeanCodex.decode(factory, IBookList.class, jsonResponse);
						for (IBook b: bean.as().getBooks()) {
							list.add(new Book(b));
							//log.info("Found book: " + new Book(b));
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
		
		String url = "/api/book/" + getUser().getSessionId() + "/create";
		AutoBean<IBook> bean = factory.create(IBook.class, newBook);	
		String payload = AutoBeanCodex.encode(bean).getPayload();
		executeRequest(RequestBuilder.POST, URL.encode(url), payload, cb);
	}

	@Override
	public void abortBook(Book book, final ICallback<Void> callback) {
		postBook("/api/book/" + getUser().getSessionId() + "/abort", book, callback);
	}

	@Override
	public void resumeBook(Book book, final ICallback<Void> callback) {
		postBook("/api/book/" + getUser().getSessionId() + "/resume", book, callback);
	}

	@Override
	public void updateBook(Book book, final ICallback<Void> callback) {
		postBook("/api/book/" + getUser().getSessionId() + "/update", book, callback);
	}

	@Override
	public void deleteBook(Book book, final ICallback<Void> callback) {
		postBook("/api/book/" + getUser().getSessionId() + "/delete", book, callback);
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

}
