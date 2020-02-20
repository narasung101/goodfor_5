package com.goodfor.web.sejong;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Lazy
@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class SSummary {
	private String caccount, stockcode, tradetype, ordertype, createdate; 
	private int tcount, tamount, ftamount ;
}
