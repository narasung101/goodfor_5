package com.goodfor.web.seho;

import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class MyStock {
	
	private String stockcode, quantitynum, accountnum, cid, stockname;
	private int seq;
	
}