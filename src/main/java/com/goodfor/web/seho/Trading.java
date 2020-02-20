package com.goodfor.web.seho;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Trading {
	private String stockcode, stockname, nprice, sellprice, pcontrast, buyprice, frate, cprice, 
			tvolume, sprice, tamount, hprice, fvalue, lprice, ulprice, pulprice, dlprice, 
			pdlprice, per, eps, ftweektop, ftweeklow, mtotal, tnumstock, fnow, capital;

}