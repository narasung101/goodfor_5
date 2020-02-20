package com.goodfor.web.seho;

import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class BizInfo {
	private String stockcode, stockname, mtamount, mtarank, tnumstock, fvalueunit, flnumstock, fhnumstock, ferate, iotsprice, ftweektoplow, perfg, krx, eper, pbrfg, drate, stper, strate;

}