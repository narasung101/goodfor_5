package com.goodfor.web.seho;

import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class TempStock {
	private int seq;
	private String tradetype, stockcode, ordertype, conwhether, condate, accountnum, stockname, cid, ordernum, orderprice, conprice;

}