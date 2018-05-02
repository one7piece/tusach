package com.dv.gtusach.client;

import java.util.logging.Logger;

import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestBuilder.Method;

public class ServiceUtil {
	static Logger log = Logger.getLogger("ServiceUtil");
	
	public static void executeRequest(Method method, String url, String payload, RequestCallback callback) {		
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

}
