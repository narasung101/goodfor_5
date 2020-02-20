package com.goodfor.web.sejong;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.goodfor.web.board.Board;

@Repository
public interface SSummaryMapper {

	public void createSSummary(HashMap<String, String> paramMap);
	public void dropSSummary(HashMap<String, String> paramMap);
	public void insertSSummary(SSummary param);
	public void insertBoard(Board param);
	
	public String selectTcaseSummary();
	public String selectTamountSummary();
	public String selectScaseSummary();
	public String selectSamountSummary();
	public String selectDcaseSummary();
	public String selectDamountSummary();
	public String selectStcase();
	
	public List<String> selectRecentMonth();
	public List<String> selectRecentAmount();
	public List<SSummary> selectStcaseFromSSummary();
	
}
