package com.dv.gtusach.client.model;

import java.util.Date;

public interface ISystemInfo {
	Date getBookLastUpdateTime();
	void setBookLastUpdateTime(Date bookLastUpdateTime);
	Date getSystemUpTime();
	void setSystemUpTime(Date systemUpTime);
	Boolean getParserEditing() ;
	void setParserEditing(Boolean parserEditing);
}
