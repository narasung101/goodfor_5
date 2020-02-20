package com.goodfor.web.seho;

import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class BuyStock {

	private String stockcode, ordertype, condate, accountnum ,cid, ordernum, orderprice, conprice, stockname;

}
