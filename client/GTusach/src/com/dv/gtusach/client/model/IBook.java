package com.dv.gtusach.client.model;

import java.util.Date;

import com.dv.gtusach.client.model.Book.BookStatus;

public interface IBook {
	boolean isEpubCreated();
	void setEpubCreated(boolean epubCreated);
	
	int getId();
	void setId(int id);
	
	String getTitle();
	void setTitle(String title);

	String getAuthor();
	void setAuthor(String author);

	Date getCreatedTime();
	void setCreatedTime(Date createdTime);
	
	String getCreatedBy();
	void setCreatedBy(String createdBy);

	String getStatus();
	void setStatus(String status);

	int getBuildTimeSec();
	void setBuildTimeSec(int buildTimeSec);

	String getStartPageUrl();
	void setStartPageUrl(String startPageUrl);
	
	int getCurrentPageNo() ;
	void setCurrentPageNo(int currentPageNo);

	String getCurrentPageUrl();
	void setCurrentPageUrl(String nextPageUrl);

	int getMaxNumPages();
	void setMaxNumPages(int maxNumPages);
	
	Date getLastUpdatedTime();
	void setLastUpdatedTime(Date lastUpdatedTime);

	String getErrorMsg();
	void setErrorMsg(String errorMsg);
}
