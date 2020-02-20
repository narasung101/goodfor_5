package com.goodfor.web.seho;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

@Component
public interface TradingService {
	public Trading search(String stockname);
	public void updateTrading(Trading param);
	public void updateBizInfo(BizInfo param);
	public void updateTempStock(TempStock param);
	public void updateMyStock(MyStock param);
	public void insertInterest(Interest param);
	public int searchInterest(String cid);
	public String searchSeqInterest(int seq);
	public Trading searchStockname(String stockname);
	public String searchAccountnum(String cid);
	public MyStock searchMyStock(String stockcode);
	public void insertBuyStock(BuyStock param);
	public void insertMyStock(MyStock param);
	public void insertTempStock(TempStock param);
	public void insertSellStock(SellStock param);
	public void deleteMyStock(String seq);
	public TempStock searchTempStock(TempStock param);
	public void deleteTempStock(int seq);
	public String searchInterestdupl(Interest param);

}
