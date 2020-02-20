package com.goodfor.web.sejong;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.goodfor.web.board.Board;

@Component("ssmaker")
public class SSummaryMaker {

	@Autowired SSummaryMapper ssummaryMapper;
	
	public String makeCaccount() {
		List<String> accountNum = Arrays.asList(
				"100100001","100100002","100100003","100100004","100100005",
				"100100006","100100007","100100008","100100009","100100010",
				"100200001","100200002","100200003","100200004","100200005",
				"100200006","100200007","100200008","100200009","100200010",
				"100300001","100300002","100300003","100300004","100300005",
				"100300006","100300007","100300008","100300009","100300010");
		Collections.shuffle(accountNum);
		return accountNum.get(0);
	}
	
	public String makeStockcode() {
		List<String> stockcodeNum = Arrays.asList(
				"034220","005930","000660","207940","035420",
				"005380","051910","012330","068270","028260",
				"051900","006400","005490","055550","017670",
				"105560","000270","034730","034730","018260",
				"036570","032830","035720","033780","003550",
				"096770","090430","090430","000810","086790");
		Collections.shuffle(stockcodeNum);
		return stockcodeNum.get(0);
	}
	
	public String makeTradetype() {
		return String.format("%d", (int)(Math.random()*2+1));
	}
	
	public String makeOrdertype() {
		return String.format("%d", (int)(Math.random()*2+1));
	}
	
	public int makeTcount() {
		return (int)(Math.random()*100+1);
	}
	
	public int makeTamount() {
		return (int)(Math.random()*100+1)*1000;
	}
	
	public String makeCreatedate() {
		int iRandomMonth = (int)(Math.random()*12+1);
		int[] maxDays = {31,28,31,30,31,30,31,31,30,31,30,31};
		int iRandomDay = (int)(Math.random()*maxDays[iRandomMonth-1]+1);
		return String.format("%d%02d%02d", (int)(Math.random()*2+2018), iRandomMonth, iRandomDay );
	}
	
	public SSummary makeSSummary() {
		int ttcount = makeTcount(); 
		int ttamount = makeTamount();
		int tftamount = ttcount*ttamount;
		 
		return new SSummary(makeCaccount(),
				makeStockcode(), 
				makeTradetype(), 
				makeOrdertype(), 
				makeCreatedate(), 
				ttcount, 
				ttamount, 
				tftamount);
	}
	
	public void insertMakeSSummary() {
		for(int i=0 ; i<100 ; i++) {
			ssummaryMapper.insertSSummary(makeSSummary());
		}
	}
	
	// board value insert
	
	public String makeWriter() {
		List<String> cidst = Arrays.asList(
				"hong","kim","lee","kang","dong","song","park");
		Collections.shuffle(cidst);
		return cidst.get(0);
	}
	
	public String makeCtype() {
		return String.format("%d", (int)(Math.random()*4+1));
	}
	
	public Board makeBoard() {
		int iRandomMonth = (int)(Math.random()*12+1);
		int[] maxDays = {31,28,31,30,31,30,31,31,30,31,30,31};
		int iRandomDay = (int)(Math.random()*maxDays[iRandomMonth-1]+1);
		String credate1 = String.format("%d%02d%02d", (int)(Math.random()*2+2018), iRandomMonth, iRandomDay );
		String credate2 = String.format("%d%02d%02d", (int)(Math.random()*2+2018), iRandomMonth, iRandomDay );
		String credate = (Integer.parseInt(credate1)<Integer.parseInt(credate2))? credate1 : credate2 ;
		String modidate = (credate.equals(credate1))? credate2 : credate1 ;
		String title = String.format("%s 공지사항", credate);
		String content = String.format("%s 공지사항 내용입니다.", credate);
		return new Board(1, 0 ,makeWriter(),makeCtype(),title,content,credate,modidate,"111");
	}
	
	public void insertMakeBoard() {
		for(int i=0 ; i<100 ; i++) {
			ssummaryMapper.insertBoard(makeBoard());
		}
	}
	
}
