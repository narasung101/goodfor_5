package com.goodfor.web.bonghyeon;
import java.util.ArrayList;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodfor.web.pxy.Box;
import com.goodfor.web.pxy.CrawlingProxy;
import com.goodfor.web.pxy.PageProxy;


@RestController
@RequestMapping("/infos")
public class InfoCtrl{
	@Autowired
	PageProxy pager;
	@Autowired
	CrawlingProxy crawler;
	@Autowired
	Map<String, Object> map;
	@Autowired Box<Object> box;

	@GetMapping("/crawl1/page/{pageSize}/{nowPage}")
	public Map<?,?> list1(@PathVariable("pageSize") String pageSize, @PathVariable("nowPage") String nowPage){
		ArrayList<HashMap<String, String>> list =  crawler.crawling1();
 	    ArrayList<HashMap<String, String>> temp = new ArrayList<>();
		  for(int i=0; i< 6; i++) {
			  temp.add(list.get(i));
			  }
		map.clear();
		map.put("list", temp);
		return map;
	}
	@GetMapping("/crawl1/more1/")
	public Map<?,?> more1(){
		ArrayList<HashMap<String, String>> list =  crawler.crawling1();
		map.clear();
		map.put("list", list);		
		return map;
	}
	@GetMapping("/crawl1/more2/")
	public Map<?,?> more2(){
		ArrayList<HashMap<String, String>> list =  crawler.crawling2();
		map.clear();
		map.put("list", list);		
		return map;
	}
	@GetMapping("/crawl1/more3/")
	public Map<?,?> more3(){
		ArrayList<HashMap<String, String>> list =  crawler.crawling3();
		map.clear();
		map.put("list", list);		
		return map;
	}
	@GetMapping("/crawl1/more4/")
	public Map<?,?> more4(){
		ArrayList<HashMap<String, String>> list =  crawler.crawling4();
		map.clear();
		map.put("list", list);		
		return map;
	}
	@GetMapping("/crawl2/page/{pageSize}/{nowPage}")
	public Map<?,?> list2(@PathVariable("pageSize") String pageSize, @PathVariable("nowPage") String nowPage){
		ArrayList<HashMap<String, String>> list =  crawler.crawling2();
		ArrayList<HashMap<String, String>> temp = new ArrayList<>();
		for(int i=0;i< 6; i++) {
			temp.add(list.get(i));
			}
		map.clear();
		map.put("list", temp);
		return map;
	}
	@GetMapping("/crawl3/page/{pageSize}/{nowPage}")
	public  Map<?,?> list3(@PathVariable("pageSize") String pageSize, @PathVariable("nowPage") String nowPage){
		ArrayList<HashMap<String, String>> list =  crawler.crawling3();
		ArrayList<HashMap<String, String>> temp = new ArrayList<>();
		for(int i=0;i< 5; i++) {
			temp.add(list.get(i));
		}
		map.clear();
		map.put("list", temp);
		return map;
	}
	@GetMapping("/crawl4/page/{pageSize}/{nowPage}")
	public Map<?,?> list4(@PathVariable("pageSize") String pageSize, @PathVariable("nowPage") String nowPage){
		ArrayList<HashMap<String, String>> list = crawler.crawling4();
		ArrayList<HashMap<String, String>> temp = new ArrayList<>();
		for(int i=0;i< 6; i++) {
			temp.add(list.get(i));
		}
		map.clear();
		map.put("list", temp);
		return map;
	}
	@GetMapping("/chart1/")
	public Map<?,?> chart1(){
		ArrayList<HashMap<String, String>> list = crawler.chart1();
		map.clear();
		map.put("list", list);	
		return map;
	}
	@GetMapping("/chart2/")
	public Map<?,?> chart2(){
		ArrayList<HashMap<String, String>> list = crawler.chart2();
		map.clear();
		map.put("list", list);
		return map;
	}
	@GetMapping("/chart3/")
	public Map<?,?> chart3(){
		ArrayList<HashMap<String, String>> list = crawler.chart3();
		map.clear();
		map.put("list", list);
		return map;
	}
	@GetMapping("/chart4/")
	public Map<?,?> chart4(){
		ArrayList<HashMap<String, String>> list = crawler.chart4();
		map.clear();
		map.put("list", list);
		return map;
	}
	@GetMapping("/chart11/")
	public Map<?,?> chart11(){
		ArrayList<HashMap<String, String>> list = crawler.chart11();
		map.clear();
		map.put("list", list);	
		return map;
	}
	@GetMapping("/chart22/")
	public Map<?,?> chart22(){
		ArrayList<HashMap<String, String>> list = crawler.chart22();
		map.clear();
		map.put("list", list);
		return map;
	}
	@GetMapping("/chart33/")
	public Map<?,?> chart33(){
		ArrayList<HashMap<String, String>> list = crawler.chart33();
		map.clear();
		map.put("list", list);
		return map;
	}
	@GetMapping("/chart44/")
	public Map<?,?> chart44(){
		ArrayList<HashMap<String, String>> list = crawler.chart44();
		map.clear();
		map.put("list", list);
		return map;
	}
}
