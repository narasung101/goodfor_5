package com.goodfor.web.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.goodfor.web.pxy.PageProxy;
import com.goodfor.web.pxy.Proxy;
import com.goodfor.web.pxy.Trunk;
import com.goodfor.web.pxy.CrawlingProxy;
import com.goodfor.web.pxy.FileProxy;

@RestController
@RequestMapping("/boards")
public class BoardCtrl extends Proxy {
	@Autowired BoardMapper boardMapper;
	@Autowired Map<String, Object> map;
	@Autowired CrawlingProxy crawler;
	@Autowired PageProxy pager;
	@Autowired FileProxy filemgr;
	@Autowired Board board;
	@Autowired Trunk<Object> trunk;

	@PostMapping("/")
	public Map<?, ?> write(@RequestBody Board param) {
		Consumer<Board> consumer = t -> boardMapper.insertBoardWrite(t);
		consumer.accept(param);
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.clear();
		paramMap.put("msg", "WHITE SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/list/{ctype}/{pageSize}/{nowPage}/{option}/{search}")
	public Map<?, ?> listPage(@PathVariable("pageSize") String pageSize, @PathVariable("nowPage") String nowPage,
			 @PathVariable("option") String option, @PathVariable("search") String search, @PathVariable("ctype") String ctype) {
		
		pager.setCtype(ctype);
		
		Function<String, Integer> function = t -> boardMapper.selectBoardAllCount(t);
		pager.setRowCount(function.apply(ctype));
		pager.setPageSize(Integer.parseInt(pageSize));
		pager.setBlockSize(5);
		pager.setNowPage(integer(nowPage));
		pager.setOption(option);
		pager.setSearch(search);
		pager.paging();

		List<Board> list = null;

		switch(pager.getCtype()) {
		case "1" : 
			Function<PageProxy, List<Board>> function1 = t -> boardMapper.selectAllBoardFAQ(t);
			list = function1.apply(pager);
			break;
			
		case "3" : 
			Function<PageProxy, List<Board>> function2 = t -> boardMapper.selectAllBoardCustomer(t);
			list = function2.apply(pager);
			break;
			
		case "4" : 
			Function<PageProxy, List<Board>> function3 = t -> boardMapper.selectAllBoardNotice(t);
			list = function3.apply(pager);
			break;			
		}		
		
		HashMap<String, Object> paramMap = new HashMap<>();
		
		paramMap.clear();
		paramMap.put("list", list);
		paramMap.put("listSize", list.size());
		paramMap.put("pager", pager);

		return paramMap;
	}

	@GetMapping("/content/{seq}")
	public Map<?, ?> contentView(@PathVariable String seq) {
		
		Consumer<String> consumer = t -> boardMapper.viewCntIncrease(Integer.parseInt(t));
		consumer.accept(seq);
		
		Function<String, Board> function = t -> boardMapper.selectBoardRead(Integer.parseInt(t));
		
		HashMap<String, Object> paramMap = new HashMap<>();
		paramMap.clear();
		paramMap.put("read", function.apply(seq));
		
				
		return paramMap;
	}

	@PutMapping("/update")
	public Map<?, ?> update(@RequestBody Board param) {
		Consumer<Board> consumer = t -> boardMapper.updateBoard(t);
		consumer.accept(param);
		
		trunk.clear();
		trunk.put("msg", "UPDATE SUCCESS");

		return trunk.get();
		
//		HashMap<String, String> paramMap = new HashMap<>();
//		paramMap.clear();
//		paramMap.put("msg", "UPDATE SUCCESS");
//
//		return paramMap;
	}

	@GetMapping("/delete/{seq}")
	public Map<?, ?> delete(@PathVariable String seq) {
		Consumer<String> consumer = t -> boardMapper.deleteBoard(Integer.parseInt(t));
		consumer.accept(seq);
		
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.clear();
		paramMap.put("msg", "DELETE SUCCESS");


		return paramMap;
	}
		
	@PostMapping("/fileupload")
	public void fileupload(MultipartFile[] uploadFile) {
		filemgr.fileupload(uploadFile);
	}

}
