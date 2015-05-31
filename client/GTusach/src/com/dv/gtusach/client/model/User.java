package com.dv.gtusach.client.model;

import java.util.Date;

import com.google.gwt.user.client.rpc.GwtTransient;
import com.google.gwt.user.client.rpc.IsSerializable;

public class User implements IsSerializable, IUser {
	public static enum PermissionEnum {
		None,
		Download,
		Create,
		Delete,
		Update,
		Javascript
	}
	
	private String name;
	private String role;
	private Date lastLogonTime;
	private String sessionId = "";
	@GwtTransient private String password;
	
	public User() {		
	}
	
	public User(IUser source) {
		update(source);
	}
	
	public User(String name, String role) {
		this.name = name;
		this.role = role;
	}
	
	public void update(IUser user) {
		this.name = user.getName();
		this.password = user.getPassword();
		this.lastLogonTime = user.getLastLogonTime();
		this.role = user.getRole();
		this.sessionId = user.getSessionId();
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Date getLastLogonTime() {
		return lastLogonTime;
	}
	public void setLastLogonTime(Date lastLoginTime) {
		this.lastLogonTime = lastLoginTime;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}	
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	public String toString() {
		return name + "/" + role;
	}
	
	public boolean isLogon() {
		return sessionId != null && sessionId.length() > 0;
	}
}
