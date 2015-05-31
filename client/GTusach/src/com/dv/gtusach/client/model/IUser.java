package com.dv.gtusach.client.model;

import java.util.Date;

public interface IUser {
	Date getLastLogonTime();
	void setLastLogonTime(Date t);
	String getName();
	void setName(String name);
	String getPassword();
	void setPassword(String password);
	String getRole();
	void setRole(String role);
	String getSessionId();
	void setSessionId(String sessionId);
}
