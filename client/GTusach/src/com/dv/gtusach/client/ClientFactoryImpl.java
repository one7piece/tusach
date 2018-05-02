package com.dv.gtusach.client;

import com.dv.gtusach.client.model.User;
import com.dv.gtusach.client.ui.GTusachView;
import com.dv.gtusach.client.ui.GTusachViewImpl;
import com.dv.gtusach.client.ui.LogonView;
import com.dv.gtusach.client.ui.LogonViewImpl;
import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.place.shared.PlaceController;

public class ClientFactoryImpl implements ClientFactory {
	private final EventBus eventBus = new SimpleEventBus();
	private final PlaceController placeController = new PlaceController(eventBus);
	private final LogonView logonView = new LogonViewImpl();
	private final GTusachView mainView = new GTusachViewImpl();	
	private final IBookService bookService; 
	private final User currentUser = new User("", "");

	public ClientFactoryImpl() {
		bookService = new BookServiceImpl(this);	
	}
	
	@Override
	public User getUser() {
		return currentUser;
	}
	
	@Override
	public IBookService getBookService() {
		return bookService;
	}
	
	@Override
	public EventBus getEventBus() {
		return eventBus;
	}

	@Override
	public LogonView getLogonView() {
		return logonView;
	}

	@Override
	public PlaceController getPlaceController() {
		return placeController;
	}

	@Override
	public GTusachView getMainView() {
		return mainView;
	}
}
