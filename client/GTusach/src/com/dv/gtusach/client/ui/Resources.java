package com.dv.gtusach.client.ui;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.ImageResource;
import com.google.gwt.resources.client.ImageResource.ImageOptions;

public interface Resources extends ClientBundle {
	public Resources INSTANCE = GWT.create(Resources.class);
	
	@Source("abort.png")
	ImageResource abort();
	
	@Source("abort-disabled.png")
	ImageResource abortDisabled();
	
	@Source("resume.png")
	ImageResource resume();
	
	@Source("resume-disabled.png")
	ImageResource resumeDisabled();
	
	@Source("delete.png")
	ImageResource delete();
	
	@Source("delete-disabled.png")
	ImageResource deleteDisabled();
	
	@Source("download.png")
	ImageResource download();		
}

