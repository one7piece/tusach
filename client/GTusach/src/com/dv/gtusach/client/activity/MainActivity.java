package com.dv.gtusach.client.activity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import com.dv.gtusach.client.ClientFactory;
import com.dv.gtusach.client.ICallback;
import com.dv.gtusach.client.event.PropertyChangeEvent;
import com.dv.gtusach.client.event.PropertyChangeEvent.EventTypeEnum;
import com.dv.gtusach.client.event.PropertyChangeEventHandler;
import com.dv.gtusach.client.model.BadDataException;
import com.dv.gtusach.client.model.Book;
import com.dv.gtusach.client.model.Book.BookStatus;
import com.dv.gtusach.client.model.ParserScript;
import com.dv.gtusach.client.model.SystemInfo;
import com.dv.gtusach.client.model.User;
import com.dv.gtusach.client.model.User.PermissionEnum;
import com.dv.gtusach.client.place.MainPlace;
import com.dv.gtusach.client.ui.GTusachView;
import com.google.gwt.activity.shared.AbstractActivity;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class MainActivity extends AbstractActivity implements
		GTusachView.Presenter {

	static Logger log = Logger.getLogger("MainActivity");
	static DateTimeFormat dateTimeFormat = DateTimeFormat.getFormat("dd/MM/yyyy HH:mm:ss");
	//private final long SESSION_EXPIRE_TIME = 1000*60*60*24*14;
	// Used to obtain views, eventBus, placeController
	// Alternatively, could be injected via GIN
	private ClientFactory clientFactory;
	private GTusachView tusachView;
	private List<Book> currentBooks = new ArrayList<Book>();
	private List<ParserScript> currentScripts = new ArrayList<ParserScript>();
	private long libraryUpdateTime = -1;
	private Timer refreshTimer;

	public MainActivity(MainPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
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
		
		clientFactory.getBookService().init();
				
		loadBooks(null);

		if (refreshTimer != null && refreshTimer.isRunning()) {
			refreshTimer.cancel();
		}
		refreshTimer = new Timer() {
			@Override
			public void run() {
				refresh();
			}
		};
		refreshTimer.scheduleRepeating(10000);
		
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
		return clientFactory.getBookService().getUser();
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
		scheduleRefresh(1000);
	}
	
	@Override
	public void download(final String bookId) {		
		validateSession();				
		Window.open("/api/downloadBook/" + bookId, "", "");
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
	}
	
	private void validateSession() {
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
			return (isLoggedIn && isAdmin);
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
	}
	
	private void loadParserScripts() {
/*		
		AsyncCallback<ParserScript[]> callback = new AsyncCallback<ParserScript[]>() {
			public void onFailure(Throwable e) {
				tusachView.setErrorMessage("Error loading parser scripts. " + e.getMessage());
			}
			
			public void onSuccess(ParserScript[] scripts) {
				tusachView.setInfoMessage("Loaded " + scripts.length + " parser scripts");
				currentScripts.clear();
				currentScripts.addAll(Arrays.asList(scripts));
				fireEvent(EventTypeEnum.Script, "load", currentScripts);				
			}
		};		
		clientFactory.getBookService().getParserScripts(clientFactory.getUser().getSessionId(), callback);
*/		
	}

	@Override
	public void saveScript(final ParserScript script) {	
/*		
		final String oldId = script.getId();
		AsyncCallback<ParserScript> callback = new AsyncCallback<ParserScript>() {
			public void onFailure(Throwable caught) {
				fireEvent(EventTypeEnum.Script, "update", script, caught.getMessage());								
			}
			
			public void onSuccess(ParserScript savedScript) {
				tusachView.setInfoMessage("Parser script saved.");
				int index = -1;
				for (int i=0; i<currentScripts.size(); i++) {
					if (oldId != null && currentScripts.get(i).getId().equals(oldId)) {
						index = i;
						break;
					}
				}
				if (index != -1) {
					currentScripts.set(index, savedScript);
				} else {
					currentScripts.add(savedScript);
				}	
				fireEvent(EventTypeEnum.Script, "update", savedScript);
			}
		};		
		clientFactory.getBookService().saveParserScript(clientFactory.getUser().getSessionId(), script, callback);
*/		
	}

	@Override
	public void deleteScript(final String scriptId) {
/*		
		AsyncCallback<Void> callback = new AsyncCallback<Void>() {
			public void onFailure(Throwable caught) {
				fireEvent(EventTypeEnum.Script, "delete", scriptId, caught.getMessage());								
			}
			
			public void onSuccess(Void v) {
				tusachView.setInfoMessage("Parser script deleted.");
				int index = -1;
				for (int i=0; i<currentScripts.size(); i++) {
					if (currentScripts.get(i).getId().equals(scriptId)) {
						index = i;
						break;
					}
				}
				if (index != -1) {
					ParserScript deleteScript = currentScripts.remove(index);
					fireEvent(EventTypeEnum.Script, "delete", deleteScript);
				} 
			}
		};		
		clientFactory.getBookService().deleteParserScript(clientFactory.getUser().getSessionId(), scriptId, callback);
*/		
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
