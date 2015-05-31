package com.dv.gtusach.client;

public interface ICallback<T> {
	public void onFailure(Throwable ex);
	public void onSuccess(T t);
}
