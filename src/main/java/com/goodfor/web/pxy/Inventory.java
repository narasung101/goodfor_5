package com.goodfor.web.pxy;


import java.util.ArrayList;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
@Component @Lazy
public class Inventory<T> {
	private ArrayList<T> inventory;
	public Inventory() {inventory = new ArrayList<T>();}
	public void add(T t) {inventory.add(t);}
	public void clear() {inventory.clear();}
	public T get(int i) {return inventory.get(i);}
	public ArrayList<T> get(){return inventory;}
	public int size() {return inventory.size();}
	public String toString() {return inventory.toString();}
}