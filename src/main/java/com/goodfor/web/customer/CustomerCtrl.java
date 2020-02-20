package com.goodfor.web.customer;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodfor.web.pxy.Inventory;
import com.goodfor.web.pxy.Trunk;

@RestController
@RequestMapping("/customers")
public class CustomerCtrl {
	
	@Autowired Map<String, Object> map;
	@Autowired CustomerMapper customerMapper;
	@Autowired Inventory<Object> inventory;
	@Autowired Trunk<Object> trunk;
	@Autowired Customer customer;
	@PostMapping("/")
	public Map<?, ?> join(@RequestBody Customer param) {
		Consumer<Customer> consumer = t -> customerMapper.insertCustomerJoin(t);
		consumer.accept(param);
		
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/existid/{cid}")
	public Map<?,?> existId(@PathVariable String cid){
		
		Function<String, Integer> function = t -> customerMapper.selectExistId(t);
	
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.clear();
		paramMap.put("msg", (function.apply(cid) != 0) ? "y" : "n");

		return paramMap;
	}
	
	@PostMapping("/login")
	public Map<?, ?> login(@RequestBody Customer param) {
		Function<Customer, Customer> function = t -> customerMapper.selectCustomerLogin(t);
		customer = function.apply(param);
		String result = (customer != null) ? "success" : "fail";
		
		HashMap<String, Object> paramMap = new HashMap<>();
		paramMap.clear();
		paramMap.put("msg", result);
		paramMap.put("customer", customer);

		return paramMap;
				
	}
	
	
	
	

}
