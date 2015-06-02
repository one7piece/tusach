package com.dv.gtusach.client.ui;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.ImageResource;
import com.google.gwt.resources.client.ImageResource.ImageOptions;

public interface Resources extends ClientBundle {
	public Resources INSTANCE = GWT.create(Resources.class);
	
	@Source("disclosurePanelOpen.png")
	ImageResource disclosurePanelOpen();
	
	@Source("disclosurePanelClosed.png")
	ImageResource disclosurePanelClosed();
}

