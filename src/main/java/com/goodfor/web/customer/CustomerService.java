package com.goodfor.web.customer;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface CustomerService {
	public int customerCount();
	public void insertCustomerJoin(Customer param);
	public Customer selectCustomerLogin(Customer param);
	public List<Customer> selectAllCustomer();
}
