package com.goodfor.web.sejong;

public enum SSQL {
	
	CREATE_SUMMARY, DROP_SUMMARY, SELECT_TCASE_SUMMARY, SELECT_TAMOUNT_SUMMARY, CREATE_BOARD , DROP_BOARD;
	
	public String toString() {
		String result = "";
		switch(this) {
		case CREATE_SUMMARY : 
			result = "CREATE TABLE SUMMARY \r\n" + 
					"(SUMMARYSEQ INT(5) PRIMARY KEY AUTO_INCREMENT,\r\n" + 
					"CACCOUNT VARCHAR(10),\r\n" + 
					"STOCKCODE VARCHAR(10),\r\n" + 
					"TRADETYPE VARCHAR(10),\r\n" + 
					"ORDERTYPE VARCHAR(10),\r\n" + 
					"TCOUNT INT(10),\r\n" + 
					"TAMOUNT INT(10),\r\n" + 
					"FTAMOUNT INT(10),\r\n" + 
					"CREATEDATE VARCHAR(10))";
			break;
		case DROP_SUMMARY : 
			result = "DROP TABLE SUMMARY";
			break;	
		case CREATE_BOARD : 
			result = "CREATE TABLE BOARD(\r\n" + 
					"    SEQ INT PRIMARY KEY AUTO_INCREMENT,\r\n" + 
					"    WRITER VARCHAR(50) NOT NULL,\r\n" + 
					"    CTYPE VARCHAR(50),\r\n" + 
					"	 TITLE VARCHAR(100),\r\n" + 
					"	 CONTENT VARCHAR(1000),\r\n" + 
					"	 CREDATE VARCHAR(50),\r\n" + 
					"	 MODIDATE VARCHAR(50),\r\n" + 
					"	 ATTFILE VARCHAR(50),\r\n" + 
					"	 FOREIGN KEY (WRITER) REFERENCES CUSTOMER(CID)\r\n" + 
					")default character set utf8 collate UTF8_GENERAL_CI";
			break;
		case DROP_BOARD : 
			result = "DROP TABLE BOARD";
			break;	
		case SELECT_TCASE_SUMMARY : 
			result = "SELECT SUM(TCOUNT) FROM SUMMARY";
			break;
		case SELECT_TAMOUNT_SUMMARY : 
			result = "SELECT SUM(TAMOUNT) FROM SUMMARY";
			break;
		}
		return result;
	}

}
