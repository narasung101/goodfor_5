package com.goodfor.web.customer;

import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component 
@AllArgsConstructor
@NoArgsConstructor
public class Customer {

	private String cid, cpw, cname, email, pnumber, invest, rating;

}