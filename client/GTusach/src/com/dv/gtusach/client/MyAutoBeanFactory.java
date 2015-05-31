package com.dv.gtusach.client;

import com.dv.gtusach.client.model.*;
import com.google.web.bindery.autobean.shared.AutoBean;
import com.google.web.bindery.autobean.shared.AutoBeanFactory;

public interface MyAutoBeanFactory extends AutoBeanFactory{
	AutoBean<IBook> book();
	AutoBean<IBookList> books();
	AutoBean<ISystemInfo> systeminfo();
	AutoBean<IUser> user();
}
