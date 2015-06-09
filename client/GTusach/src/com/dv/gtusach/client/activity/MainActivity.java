package com.dv.gtusach.client.activity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import com.dv.gtusach.client.ClientFactory;
import com.dv.gtusach.client.ICallback;
import com.dv.gtusach.client.MyAutoBeanFactory;
import com.dv.gtusach.client.ServiceUtil;
import com.dv.gtusach.client.event.PropertyChangeEvent;
import com.dv.gtusach.client.event.PropertyChangeEvent.EventTypeEnum;
import com.dv.gtusach.client.event.PropertyChangeEventHandler;
import com.dv.gtusach.client.model.BadDataException;
import com.dv.gtusach.client.model.Book;
import com.dv.gtusach.client.model.Book.BookStatus;
import com.dv.gtusach.client.model.IUser;
import com.dv.gtusach.client.model.ParserScript;
import com.dv.gtusach.client.model.SystemInfo;
import com.dv.gtusach.client.model.User;
import com.dv.gtusach.client.model.User.PermissionEnum;
import com.dv.gtusach.client.place.MainPlace;
import com.dv.gtusach.client.ui.GTusachView;
import com.google.gwt.activity.shared.AbstractActivity;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.Response;
import com.google.gwt.http.client.URL;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.AcceptsOneWidget;
import com.google.web.bindery.autobean.shared.AutoBean;
import com.google.web.bindery.autobean.shared.AutoBeanCodex;

public class MainActivity extends AbstractActivity implements
		GTusachView.Presenter {

	static Logger log = Logger.getLogger("MainActivity");
	static DateTimeFormat dateTimeFormat = DateTimeFormat.getFormat("dd/MM/yyyy HH:mm:ss");

	private static final String COOKIE_ID = "thuvien-dv.sid";
	private boolean rechargeRequired = false;
	private MyAutoBeanFactory factory;

	// Used to obtain views, eventBus, placeController
	// Alternatively, could be injected via GIN
	private ClientFactory clientFactory;
	private GTusachView tusachView;
	private List<Book> currentBooks = new ArrayList<Book>();
	private List<ParserScript> currentScripts = new ArrayList<ParserScript>();
	private long libraryUpdateTime = -1;
	private Timer refreshTimer;
	private long lastSessionCheckTime = 0;

	public MainActivity(MainPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
		this.factory = GWT.create(MyAutoBeanFactory.class);
	}
	
	/**
	 * Invoked by the ActivityManager to start a new Activity
	 */
	@Override
	public void start(AcceptsOneWidget containerWidget, com.google.gwt.event.shared.EventBus eventBus) {		
		tusachView = clientFactory.getMainView();		
		tusachView.setPresenter(this);
		tusachView.setInfoMessage("Loading...");
		
		containerWidget.setWidget(tusachView.asWidget());
						
		checkSession();
		
		loadBooks(null);

		if (refreshTimer != null && refreshTimer.isRunning()) {
			refreshTimer.cancel();
		}
		refreshTimer = new Timer() {
			@Override
			public void run() {
				checkSession();
				refresh();
			}
		};
		refreshTimer.scheduleRepeating(15000);
		
		clientFactory.getEventBus().addHandler(PropertyChangeEvent.TYPE, new PropertyChangeEventHandler() {
			@Override
			public void onPropertyChanged(PropertyChangeEvent event) {
				// pass on event, except for login error
				tusachView.onPropertyChanged(event);
			}			
		});		
	}

	/**
	 * Ask user before stopping this activity
	 */
	@Override
	public void onStop() {
		refreshTimer.cancel();
	}

	private void checkSession() {
		log.info("checkSession...");
		if (System.currentTimeMillis() - lastSessionCheckTime < 60000) {
			return;
		}
		lastSessionCheckTime = System.currentTimeMillis();
		
		if (getUser().isLogon()) {
			if (rechargeRequired) {
				rechargeRequired = false;
				rechargeSession();
			} else {
				validateSession();
			}
		}
		
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
								getUser().update(user);
								log.info("User bean: " + user);									
								// store in cookie
						    Cookies.setCookie(COOKIE_ID, user.getSessionId());		
						    
								try {
									clientFactory.getEventBus().fireEvent(new PropertyChangeEvent(EventTypeEnum.Authentication, "login", user, null));			
								} catch (Exception ex) {	
									log.warning(ex.getMessage());			
								}
						    
							} else {
								log.warning("Error: " + response.getStatusText());
						    Cookies.removeCookie(COOKIE_ID);													
							}
						} catch (Exception ex) {
							log.warning("Error: " + ex.getMessage());
					    Cookies.removeCookie(COOKIE_ID);													
						}
					}
					@Override
					public void onError(Request request, Throwable ex) {
				    Cookies.removeCookie(COOKIE_ID);;													
					}				
				};
				
				String url = "/api/user/" + sid;
				ServiceUtil.executeRequest(RequestBuilder.GET, URL.encode(url), null, cb);				
			} catch (Exception ex) {
				// ignore
			}			
		}		
	}
	
	public void getSites() {
		ICallback<List<String>> callback = new ICallback<List<String>>() {
			@Override
			public void onFailure(Throwable caught) {
				String errorMsg = caught.getMessage();
				tusachView.setErrorMessage(errorMsg);
			}

			@Override
			public void onSuccess(List<String> sites) {
				log.info("got sites: " + sites);
				tusachView.setSites(sites);
			}
		};
		clientFactory.getBookService().getSites(callback);
	}
	
	public User getUser() {
		return clientFactory.getUser();
	}
	
	public List<Book> getBooks() {
		return currentBooks;
	}
	
	public List<ParserScript> getParserScripts() {
		return currentScripts;
	}
	
	/**
	 * Navigate to a new Place in the browser
	 */
	public void goTo(Place place) {
		clientFactory.getPlaceController().goTo(place);
	}
		
	@Override
	public void create(Book newBook) throws BadDataException {
		ICallback<Book> callback = new ICallback<Book>() {
			@Override
			public void onFailure(Throwable caught) {
				String errorMsg = caught.getMessage();
				tusachView.setErrorMessage(errorMsg);
				validateSession();				
			}

			@Override
			public void onSuccess(Book book) {
				tusachView.setErrorMessage("");
				int index = -1;
				for (int i=0; i<currentBooks.size(); i++) {
					if (currentBooks.get(i).getId() == book.getId()) {
						index = i;
						break;
					}
				}
				if (index != -1) {
					currentBooks.set(index, book);
				} else {
					currentBooks.add(0, book);					
				}
				fireEvent(EventTypeEnum.Book, (index == -1 ? "load" : "update"), currentBooks);	
			}
		};

		clientFactory.getBookService().createBook(newBook, callback);
		rechargeRequired = true;
	}
	
	@Override
	public void resume(final String bookId) {
		ICallback<Void> callback = new ICallback<Void>() {
			@Override
			public void onFailure(Throwable caught) {
				String errorMsg = caught.getMessage();
				tusachView.setErrorMessage(errorMsg);
				validateSession();				
			}

			@Override
			public void onSuccess(Void v) {
				tusachView.setErrorMessage("");
			}
		};
		Book book = new Book();
		book.setId(Integer.parseInt(bookId));
		clientFactory.getBookService().resumeBook(book, callback);
		rechargeRequired = true;
		scheduleRefresh(1000);
	}
	
	@Override
	public void download(final String bookId) {		
		validateSession();				
		Window.open("/api/downloadBook/" + bookId, "", "");
		rechargeRequired = true;
	}
	
	@Override
	public void abort(String bookId) {
		ICallback<Void> callback = new ICallback<Void>() {
			@Override
			public void onFailure(Throwable caught) {
				String errorMsg = caught.getMessage();
				tusachView.setErrorMessage(errorMsg);
				validateSession();				
			}

			@Override
			public void onSuccess(Void v) {
				tusachView.setErrorMessage("");
			}
		};
		Book book = new Book();
		book.setId(Integer.parseInt(bookId));
		clientFactory.getBookService().abortBook(book, callback);
		scheduleRefresh(1000);
		rechargeRequired = true;
	}

	@Override
	public void delete(String bookId) {
		ICallback<Void> callback = new ICallback<Void>() {
			@Override
			public void onFailure(Throwable caught) {
				String errorMsg = caught.getMessage();
				tusachView.setErrorMessage(errorMsg);
				validateSession();				
			}

			@Override
			public void onSuccess(Void v) {
				tusachView.setErrorMessage("");
			}
		};
		Book book = new Book();
		book.setId(Integer.parseInt(bookId));
		clientFactory.getBookService().deleteBook(book, callback);
		scheduleRefresh(1000);
		rechargeRequired = true;
	}
	
	private void rechargeSession() {
		ICallback<Integer> callback = new ICallback<Integer>() {
			@Override
			public void onFailure(Throwable caught) {
				String errorMsg = caught.getMessage();
				tusachView.setErrorMessage(errorMsg);
			}

			@Override
			public void onSuccess(Integer v) {
				if (v <= 0) {
					userHasLoggedOff();
				}										
			}
		};
		clientFactory.getBookService().rechargeSession(callback);
	}
	
	private void validateSession() {
		ICallback<Integer> callback = new ICallback<Integer>() {
			@Override
			public void onFailure(Throwable caught) {
				String errorMsg = caught.getMessage();
				tusachView.setErrorMessage(errorMsg);
			}

			@Override
			public void onSuccess(Integer v) {
				if (v <= 0) {
					userHasLoggedOff();
				}										
			}
		};
		clientFactory.getBookService().validateSession(callback);
	}
	
	private void userHasLoggedOff() {
		log.info("user has logged off");
		Cookies.removeCookie(COOKIE_ID);
		getUser().update(new User());
		fireEvent(EventTypeEnum.Authentication, "logout", getUser(), null);		
	}
	
	private void scheduleRefresh(int delayMS) {
		if (delayMS == 0) {
			refresh();
		} else {
			Timer timer = new Timer() {
				@Override
				public void run() {
					refresh();
				}
			};
			timer.schedule(delayMS);		
		}
	}
	
	private void loadBooks(final List<Integer> bookIds) {
		
		// setup callback
		ICallback<List<Book>> callback = new ICallback<List<Book>>() {
			public void onFailure(Throwable caught) {
				String details = caught.getMessage();
				tusachView.setErrorMessage("Error loading books: " + details);
				log.info("error loading books: " + details);
			}

			public void onSuccess(List<Book> result) {
				try {
					log.info("finished loading books: " + result.size());
					boolean reload = (bookIds == null || bookIds.size() == 0);
					if (reload) {
						currentBooks.clear();
						currentBooks.addAll(result);
					} else {
						for (Book updatingBook: result) {
							int index = -1;
							for (int i=0; i<currentBooks.size(); i++) {
								if (currentBooks.get(i).getId() == updatingBook.getId()) {
									index = i;
									break;
								}
							}
							if (index != -1) {
								currentBooks.set(index, updatingBook);
							} else {
								// shouldn't happens!!!
							}
						}
					}
					
					List<Book> list = (reload ? currentBooks : result);
					
					String header = list.size() + " books. ";
					if (libraryUpdateTime > 0) {
						Date time = new Date(libraryUpdateTime);
						header += dateTimeFormat.format(time);
					}
					tusachView.setInfoMessage(header);
					fireEvent(EventTypeEnum.Book, (reload ? "load" : "update"), list);	
				} catch (Exception ex) {					
					log.info("Error processing books. " + ex.getMessage());
				}				
			}
		};
		if (bookIds == null || bookIds.size() == 0) {
			tusachView.setInfoMessage("Loading book list...");
		} else {
			tusachView.setInfoMessage("Updating working books...");
		}
		clientFactory.getBookService().getBooks(bookIds, callback);	
	}
	
	private void refresh() {
		final List<Integer> workingBookIds = new ArrayList<>();
		for (Book book : currentBooks) {
			if (book.getStatusEnum() == BookStatus.WORKING) {
				workingBookIds.add(book.getId());
			}
		}

		// setup callback
		ICallback<SystemInfo> callback = new ICallback<SystemInfo>() {
			public void onFailure(Throwable caught) {
			}

			public void onSuccess(SystemInfo info) {				
				if (libraryUpdateTime == -1 || info.getBookLastUpdateTime().getTime() != libraryUpdateTime) {
					libraryUpdateTime = info.getBookLastUpdateTime().getTime();
					loadBooks(null);
				} else if (workingBookIds.size() > 0) {
					loadBooks(workingBookIds);
				}
			}
		};
		clientFactory.getBookService().getSystemInfo(callback);
	}
		
	@Override
	public boolean hasPermission(Book book, PermissionEnum permission) {
		User user = clientFactory.getBookService().getUser();
		boolean isLoggedIn = user.isLogon();
		boolean isAdmin = (user.getRole().toLowerCase().indexOf("admin") != -1); 
		if (permission == PermissionEnum.Download) {
			return true;
		} else if (permission == PermissionEnum.Create) {
			return (isLoggedIn);
		} else if (permission == PermissionEnum.Update) {
			return (isLoggedIn && (isAdmin || (book != null && book.getCreatedBy().equals(user.getName()))));
		} else if (permission == PermissionEnum.Delete) {
			return (isLoggedIn && (isAdmin || (book != null && book.getCreatedBy().equals(user.getName()))));
		} else if (permission == PermissionEnum.Javascript) {
			return (isLoggedIn && isAdmin);
		}
		return false;
	}

	@Override
	public void login(final String userName, final String password) {
		ICallback<User> callback = new ICallback<User>() {
			public void onFailure(Throwable caught) {
				fireEvent(EventTypeEnum.Authentication, "login", getUser(), "Error connecting to server!");
			}

			public void onSuccess(User user) {				
				if (user != null) {
					getUser().update(user);					
					// store in cookie
			    Cookies.setCookie(COOKIE_ID, user.getSessionId());					
					
					boolean isAdmin = (user != null && user.isLogon()
							&& user.getRole().contains("admin"));
					if (isAdmin) {
						loadParserScripts();
					}					
					fireEvent(EventTypeEnum.Authentication, "login", user);
				} else {
					fireEvent(EventTypeEnum.Authentication, "login", user, "Invalid user name or password!");					
				}
			}
		};
		clientFactory.getBookService().login(userName, password, callback);		
	}
	
	@Override
	public void logout() {
		clientFactory.getBookService().logout();
		userHasLoggedOff();		
	}
	
	private void loadParserScripts() {
	}

	@Override
	public void saveScript(final ParserScript script) {	
	}

	@Override
	public void deleteScript(final String scriptId) {
	}
	
	private void fireEvent(EventTypeEnum type, String name, Object value) {
		if (clientFactory.getEventBus() == null) {
			log.warning("event bus in client factory is null");			
			return;
		}
		try {
			clientFactory.getEventBus().fireEvent(new PropertyChangeEvent(type, name, value, null));			
		} catch (Exception ex) {	
			log.warning(ex.getMessage());			
		}
	}
	
	private void fireEvent(EventTypeEnum type, String name, Object value, String error) {
		if (clientFactory.getEventBus() == null) {
			log.warning("event bus in client factory is null");			
			return;
		}
		try {
			clientFactory.getEventBus().fireEvent(new PropertyChangeEvent(type, name, value, error));
		} catch (Exception ex) {	
			log.warning(ex.getMessage());			
		}
	}
}
