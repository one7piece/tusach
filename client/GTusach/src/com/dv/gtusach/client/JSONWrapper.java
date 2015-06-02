package com.dv.gtusach.client;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONNumber;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.json.client.JSONValue;

public class JSONWrapper {
	private JSONValue value;
	
	public JSONWrapper(String json) {
		this.value = JSONParser.parseStrict(json);
	}
	
	public JSONWrapper(JSONValue v) {
		this.value = v;
	}
	
	public JSONWrapper get(String name) {
		if (name == null) {
			return this;
		}
		JSONObject o = this.value.isObject();
		if (o != null) {
			JSONValue v = o.get(name);
			return new JSONWrapper(v);
		}
		return null;
	}
	
	public String valueString() {
		JSONString s = (value != null ? value.isString() : null);
		if (s != null) {
			return s.stringValue();
		}
		return null;
	}
	
	public double valueDouble() {
		JSONNumber i = (value != null ? value.isNumber() : null);
		if (i != null) {
			return i.doubleValue();
		}
		return Double.MIN_VALUE;
	}

	public int valueInt() {
		double d = valueDouble();
		if (d != Double.MIN_VALUE) {
			return (int)d;
		}
		return Integer.MIN_VALUE;
	}

	public Object value() {		
		if (value == null) {
			return null;
		}
		
		String s = valueString();
		if (s != null) {
			return s;
		}
		double d = valueDouble();
		if (d != Double.MIN_VALUE) {
			return Double.valueOf(d);
		}
		JSONArray arr = value.isArray();
		if (arr != null) {
			List<JSONWrapper> list = new ArrayList<JSONWrapper>();
			for (int i=0; i<arr.size(); i++) {				
				list.add(new JSONWrapper(arr.get(i)));
			}
			return list;
		}
		return null;
	}
	
	public static void main(String[] args) {
		String json1 = "{'name' : 'dung'}";
		String json2 = "{'array' : ['item1', 'item2']}";
		JSONWrapper root = new JSONWrapper(json1);
		System.out.println("value1: " + root.get("name").valueString());
		System.out.println("value2: " + (List)(root.get("array").value()));
	}
}
