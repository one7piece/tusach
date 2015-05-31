package com.dv.gtusach.client.model;

import java.util.Date;

import com.google.gwt.user.client.rpc.IsSerializable;

public class SystemInfo implements IsSerializable, ISystemInfo {
	private Date bookLastUpdateTime;
	private Date systemUpTime;
	private Boolean parserEditing;
	
	public SystemInfo(ISystemInfo source) {
		setBookLastUpdateTime(source.getBookLastUpdateTime());
		setParserEditing(source.getParserEditing());
		setSystemUpTime(source.getSystemUpTime());
	}
	
	public Date getBookLastUpdateTime() {
		return bookLastUpdateTime;
	}
	public void setBookLastUpdateTime(Date bookLastUpdateTime) {
		this.bookLastUpdateTime = bookLastUpdateTime;
	}
	public Date getSystemUpTime() {
		return systemUpTime;
	}
	public void setSystemUpTime(Date systemUpTime) {
		this.systemUpTime = systemUpTime;
	}
	public Boolean getParserEditing() {
		return parserEditing;
	}
	
	public void setParserEditing(Boolean parserEditing) {
		this.parserEditing = parserEditing;
	}
		
	public String toString() {
		return "bookLastUpdateTime= " + bookLastUpdateTime
				+ ", systemUpTime= " + systemUpTime
				+ ", parserEditing= " + parserEditing;
	}
}
