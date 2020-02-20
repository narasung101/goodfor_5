package com.goodfor.web.seho;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradingServiceImpl implements TradingService {
	@Autowired TradingMapper mapper;

	@Override
	public void updateTrading(Trading param) {
		mapper.updateTrading(param);
	}

	@Override
	public void updateBizInfo(BizInfo param) {
		mapper.updateBizInfo(param);
	}

	@Override
	public void insertInterest(Interest param) {
		 mapper.insertInterest(param);
	}

	@Override
	public int searchInterest(String cid) {
		return mapper.searchInterest(cid);
	}

	@Override
	public Trading searchStockname(String stockname) {
		return mapper.searchStockname(stockname);
	}
	@Override
	public String searchAccountnum(String cid) {
		return mapper.searchAccountnum(cid);
	}

	@Override
	public void insertBuyStock(BuyStock param) {
		mapper.insertBuyStock(param);
	}

	@Override
	public void insertMyStock(MyStock param) {
		mapper.insertMyStock(param);
	}

	@Override
	public void insertTempStock(TempStock param) {
		mapper.insertTempStock(param);
	}

	@Override
	public void insertSellStock(SellStock param) {
		mapper.insertSellStock(param);
	}

	@Override
	public MyStock searchMyStock(String stockcode) {
		return mapper.searchMyStock(stockcode);
	}

	@Override
	public void deleteMyStock(String seq) {
		mapper.deleteMyStock(seq);
	}

	@Override
	public void updateTempStock(TempStock param) {
		mapper.updateTempStock(param);
	}

	@Override
	public TempStock searchTempStock(TempStock param) {
		return mapper.searchTempStock(param);
	}

	@Override
	public Trading search(String stockname) {
		return mapper.search(stockname);
	}

	@Override
	public void deleteTempStock(int seq) {
		mapper.deleteTempStock(seq);
	}

	@Override
	public void updateMyStock(MyStock param) {
		mapper.updateMyStock(param);
	}

	@Override
	public String searchSeqInterest(int seq) {
		return mapper.searchSeqInterest(seq);
	}

	@Override
	public String searchInterestdupl(Interest param) {
		return mapper.searchInterestdupl(param);
	}

}
