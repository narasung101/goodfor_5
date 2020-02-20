package com.goodfor.web.pxy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component @Lazy @Data
public class Box<T>{
	private ArrayList<T> list;
	private HashMap<String, T> map;
	
	public Box(){
		list = new ArrayList<>();	
	}
	
	public void add(T t) {
		list.add(t);
	}
	public T get(int i) {
		return list.get(i);
	}
	public ArrayList<T> get(){
		return list;
	}
	public int size() {
		return list.size();
	}
	public String toString() {
		return list.toString();
	}
	public void clear() {
		list.clear();
	}
	public void put(List<String> x, List<T> y) {
		for (int i = 0; i < x.size(); i++) {
			map.put(x.get(i), y.get(i));
		}
		map.forEach((k, v) -> System.out.print(String.format("%s : %s", k, v)));

	}
	public void put(String x, T y) {
		map.put(x, y);
	}
	
}