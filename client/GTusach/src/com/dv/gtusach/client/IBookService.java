package com.dv.gtusach.client;

import java.util.List;

import com.dv.gtusach.client.model.Book;
import com.dv.gtusach.client.model.ParserScript;
import com.dv.gtusach.client.model.SystemInfo;
import com.dv.gtusach.client.model.User;
import com.google.web.bindery.event.shared.EventBus;

public interface IBookService {
	void init();
	User getUser();
	void login(String username, String password, ICallback<User> callback);
	void logout();
	
	void getSystemInfo(ICallback<SystemInfo> callback);
	
	void getBooks(List<Integer> bookIds, ICallback<List<Book>> callback);
	//void getBook(String bookId, ICallback<Book> callback);
	void createBook(Book newBook, ICallback<Book> callback);
	void abortBook(Book book, ICallback<Void> callback);
	void resumeBook(Book book, ICallback<Void> callback);
	void updateBook(Book book, ICallback<Void> callback);
	void deleteBook(Book book, ICallback<Void> callback);
	void downloadBook(String bookId, ICallback<byte[]> callback);
	
	void getParserScript(ICallback<List<ParserScript>> callback);
	void saveParserScript(ICallback<ParserScript> parserScript);
}
