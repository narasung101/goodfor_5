package com.goodfor.web.sejong;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class SSummaryCtrl {
	
	@SuppressWarnings("unused")
	private static final Logger logger = LoggerFactory.getLogger(SSummaryCtrl.class);
	
	@Autowired Map<String, Object> map;
	@Autowired SSummary ssummary;
	@Autowired SSummaryMapper ssummaryMapper;
	@Autowired SSummaryMaker ssMaker;
	
	@GetMapping("/create/summarytable")
	public Map<?,?> createSSummary(){
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("CREATE_SUMMARY", SSQL.CREATE_SUMMARY.toString());
		Consumer<HashMap<String, String>> c = t -> ssummaryMapper.createSSummary(t);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/drop/summarytable")
	public Map<?,?> dropSSummary(){
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("DROP_SUMMARY", SSQL.DROP_SUMMARY.toString());
		Consumer<HashMap<String, String>> c = t -> ssummaryMapper.dropSSummary(t);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/insert/summarytable")
	public Map<?,?> insertSSummary(){
		HashMap<String, String> paramMap = new HashMap<>();
		ssMaker.insertMakeSSummary();
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/insert/boardtable")
	public Map<?,?> insertBoard(){
		HashMap<String, String> paramMap = new HashMap<>();
		ssMaker.insertMakeBoard();
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/menu1/selectData")
	public Map<?,?> selectSSummaryData(){
		
		HashMap<String, Object> paramMap = new HashMap<>();
		paramMap.clear();
		
		Supplier<String> s = () -> ssummaryMapper.selectTcaseSummary();
		paramMap.put("tcase", s.get());
		Supplier<String> s2 = () -> ssummaryMapper.selectTamountSummary();
		paramMap.put("tamount", s2.get());
		Supplier<String> s3 = () -> ssummaryMapper.selectScaseSummary();
		paramMap.put("sellcase", s3.get());
		Supplier<String> s4 = () -> ssummaryMapper.selectSamountSummary();
		paramMap.put("sellamount", s4.get());
		Supplier<String> s5 = () -> ssummaryMapper.selectDamountSummary();
		paramMap.put("buyamount", s5.get());
		Supplier<String> s6 = () -> ssummaryMapper.selectDcaseSummary();
		paramMap.put("buycase", s6.get());
		Supplier<String> s7 = () -> ssummaryMapper.selectStcase();
		paramMap.put("alramcase", s7.get());
		Supplier<List<String>> s8 = () -> ssummaryMapper.selectRecentMonth();
		System.out.println(">>>>>>>>>>>> : "+s8.get());
		paramMap.put("chart1_Month",s8.get());
		Supplier<List<String>> s9 = () -> ssummaryMapper.selectRecentAmount();
		System.out.println(">>>>>>>>>>>> : "+s9.get());
		paramMap.put("chart1_Amount",s9.get());
		
		return paramMap;
	}
	
	@GetMapping("/selectStcaseDetail")
	public Map<?,?> selectStcaseDetail(){
		
		HashMap<String, Object> paramMap = new HashMap<>();
		paramMap.clear();
		
		Supplier<List<SSummary>> s = () -> ssummaryMapper.selectStcaseFromSSummary();
		paramMap.put("stcaseList",s.get());
		
		return paramMap;
	}

}
