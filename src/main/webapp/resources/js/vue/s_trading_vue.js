"use strict";
var s_trading_vue = s_trading_vue || {}
s_trading_vue = {
	trading_mainbody : x=>{
	return `
	<div style="margin-top : 50px">
		<div style="margin : auto ; width: 80% ">
			
			<div style="text-align: center ; float : left ; margin-left : 50px ; width:30%">
					<div style="width : 250px ; height : 40px ; border : 2px solid gray ; border-radius: 50px">
					<input id="input_search" type="text" placeholder="Search.." name="search" style="border-style: none ; width : 80% ; height : 30px ; font-size: 15px ; margin-left : 10px ; margin-top : 2px">
					<a id="btn_search" href><i class="fa fa-search" style="float:right ; font-size: 25px ; color : MediumSeaGreen ; margin-right : 15px ; margin-top : 3px"></i></a>
					</div>
			</div>
			<div style="float: right">
				<button id="s_btn_maesu" class="s_button" style="margin-top:9px ; width : 100px ; height : 30px">매&nbsp;&nbsp;수</button>
				<button id="s_btn_maedo" class="s_button" style="margin-top:9px ;margin-left: 20px ; width : 100px ; height : 30px ">매&nbsp;&nbsp;도</button>
				<button id="s_btn_jungjung" class="s_button" style="margin-top:9px ;margin-left: 20px ; width : 100px ; height : 30px ">정&nbsp;&nbsp;정</button>
				<button id="s_btn_chuiso" class="s_button" style="margin-top:9px ;margin-left: 20px ; width : 100px ; height : 30px ">취&nbsp;&nbsp;소</button>
			</div>
			
			<div style="margin-top : 20px ; float:left ; width : 100% ; height : 6px ; background-color : gray"></div>
			
			<div style="float:left ; width : 100% ; height : 710px ; background-color : #F5F5F5">
				<div style="margin-top:10px ; margin-left : 8px ; float:left ; width : 65% ; height : 680px ; background-color : white">
					<div style="margin : auto ; width : 100% ; height : 50% ">
						<div style="margin-top : 7px ; margin-left : 10px ; float: left ; font-size : 15px ; font-weight : bolder ; color : gray">
							<i class="fa fa-bars" style="font-size: 17px ; color : gray"></i>&nbsp;&nbsp;보유종목
						</div>
						<div style="float: left ; width : 100% ; font-size:small; overflow-y: hidden; height:410px">
						  	<table class="table table-hover" id="sTradeHaveStock">
								<thead>
									<tr>
										<th style="position: sticky ; top : 0 ; background-color : white">종목명</th>
										<th style="position: sticky ; top : 0 ; background-color : white">종목코드</th>
										<th style="position: sticky ; top : 0 ; background-color : white">보유수량</th>
										<th style="position: sticky ; top : 0 ; background-color : white">매입단가</th>
										<th style="position: sticky ; top : 0 ; background-color : white">현재가격</th>
										<th style="position: sticky ; top : 0 ; background-color : white">평가금액</th>
										<th style="position: sticky ; top : 0 ; background-color : white">매매금액</th>
										<th style="position: sticky ; top : 0 ; background-color : white">평가손익</th>
										<th style="position: sticky ; top : 0 ; background-color : white">손익율(%)</th>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
						</div>
					</div>
					<div style="margin : auto ; width : 100% ; height : 50% ">
					
						<div class="s_dropdown" style="margin-top : 7px ; margin-left : 10px ; font-weight : bolder ; color : gray">
							<button class="s_dropbtn">
								<i class="fa fa-bars" style="font-size: 17px ; color : gray"></i>&nbsp;&nbsp;관심종목&nbsp;&nbsp;
								<i class="fa fa-caret-down" style="font-size: 17px ; color : gray"></i>
							</button>
							<div id="addlist" class="s_dropdown-content">
								<a id="listone">관심종목 1</a>
							    <a id="listtow">관심종목 2</a>
							    <a id="listthree">관심종목 3</a>
							</div>
						</div>
							
						<div style="float: right ; margin-right: 20px ; margin-top: 10px">
							<i class="fa fa-plus-square" style="font-size: 20px ; color : blue"></i><span id="add_stock" style="font-size:13px ; font-weight: bold">&nbsp;&nbsp;종목추가&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<i class="fa fa-minus-square" style="font-size: 20px ; color : red"></i><span id="del_stock" style="font-size:13px ; font-weight: bold">&nbsp;&nbsp;종목삭제&nbsp;&nbsp;</span>
						</div>
							
						
						<div style="float: left ; width : 100% ; font-size:small; overflow-y: hidden; height:410px">
						  	<table class="table table-hover" id="AddStock">
								<thead>
									<tr>
										<th style="position: sticky ; top : 0 ; background-color : white">종목명</th>
										<th style="position: sticky ; top : 0 ; background-color : white">종목코드</th>
										<th style="position: sticky ; top : 0 ; background-color : white">현재가격</th>
										<th style="position: sticky ; top : 0 ; background-color : white">거래량</th>
										<th style="position: sticky ; top : 0 ; background-color : white">등락금액</th>
										<th style="position: sticky ; top : 0 ; background-color : white">등락율</th>
										<th style="position: sticky ; top : 0 ; background-color : white">최고가격</th>
										<th style="position: sticky ; top : 0 ; background-color : white">최저가격</th>
										<th style="position: sticky ; top : 0 ; background-color : white">전일종가</th>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
						</div>
					</div>
				</div>
				
				<div id="s_trading_detailchang" style="margin-top:10px ; margin-left : 8px ; float:left ; width : 33% ; height : 680px ; background-color : white">
					
					<div style="width: 100% ; height: 80px ; background-color : white">
                                         <div id="detailname" style="float: left ; width:70% ; margin-left : 20px ; margin-top: 20px ; font-size: 30px ; font-weight : bolder ; color : DodgerBlue">종목명</div>
                                         <div style="float: right ; width: 20%; margin-top: 40px ; font-size: 15px ; font-weight : bolder ; color : gray">종목코드</div>
                                  </div>
                                  
                                  <div style="width:100% ; height : 2px ; background-color : gray"></div>
                                  
                                  <div class="ss_tableContent1" >현재가</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >매도호가</div>
                                  <div class="ss_tableContent2" ></div>
                                  
                                  <div class="ss_tableContent1" >전일대비</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >매수호가</div>
                                  <div class="ss_tableContent2" ></div>
                                  
                                  <div class="ss_tableContent1" >등락률(%)</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >전일가</div>
                                  <div class="ss_tableContent2" ></div>
                                  
                                  <div class="ss_tableContent1" >거래량</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >시가</div>
                                  <div class="ss_tableContent2" ></div>
                                  
                                  <div class="ss_tableContent1" >거래대금</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >고가</div>
                                  <div class="ss_tableContent2" ></div>
                                  
                                  <div class="ss_tableContent1" >액면가</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >저가</div>
                                  <div class="ss_tableContent2" ></div>
                                  
                                  <div class="ss_tableContent1" >상한가</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >전일상한</div>
                                  <div class="ss_tableContent2" ></div>
                                  
                                  <div class="ss_tableContent1" >하한가</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >전일하한</div>
                                  <div class="ss_tableContent2" ></div>
                                  
                                  <div class="ss_tableContent1" >PER</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >EPS</div>
                                  <div class="ss_tableContent2" ></div>
                                  
                                  <div class="ss_tableContent1" >52주 최고</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >52주 최저</div>
                                  <div class="ss_tableContent2" ></div>
                                  
                                  <div class="ss_tableContent1" >시가총액</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >상장주식수</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >외국인현재</div>
                                  <div class="ss_tableContent2" ></div>
                                  <div class="ss_tableContent1" >자본금</div>
                                  <div class="ss_tableContent2" ></div>
					
				</div>
				
			</div>
			
		</div>
	</div>
		<div style="margin-top : 30px ; float:left ; width : 100% ; height : 2px ; background-color : gray"></div>
		<div style="margin-top : 10px ; margin-right : 50px ; float:right ; height : 40px ; color : gray">
			<h5>Copyright 2020. © Goodfor - www.Goodfor.com All Rights Reserved</h5>
		</div>
	</div>`
	},
	trading_msChang : x=>{
       return `
              <div style="width : 90% ; margin-top : 7px ; margin-left : 10px ; float: left ; font-size : 15px ; font-weight : bolder ; color : hsl(250, 100%, 25%)">
                     <i class="fa fa-bars" style="font-size: 17px ; color : hsl(250, 100%, 25%)"></i>&nbsp;&nbsp;매수화면
              </div>
              <div style="float: left ; width: 100% ; height: 70px ; background-color : white">
                     <div id="msstockname" style="float: left ; width:70% ; margin-left : 20px ; margin-top: 20px ; font-size: 30px ; font-weight : bolder ; color : DodgerBlue">${x.stockname}</div>
                     <div id="msstockcode" style="float: right ; width: 20%; margin-top: 40px ; font-size: 15px ; font-weight : bolder ; color : gray">${x.stockcode}</div>
              </div>
              
              <div style="float: left ; width:100% ; height : 2px ; background-color : gray"></div>
              
              <div class="ss_tableContent1" >현재가</div>
              <div id="ms_nprice" class="ss_tableContent2" >${x.nprice}</div>
              <div class="ss_tableContent1" >매수호가</div>
              <div class="ss_tableContent2" >${x.buyprice}</div>
              
              <div class="ss_tableContent1" >전일대비</div>
              <div class="ss_tableContent2" >${x.pcontrast}</div>
              <div class="ss_tableContent1" >등략률</div>
              <div class="ss_tableContent2" >${x.frate}</div>
              
              <div class="ss_tableContent1" >거래량</div>
              <div class="ss_tableContent2" >${x.tvolume}</div>
              <div class="ss_tableContent1" >거래대금</div>
              <div class="ss_tableContent2" >${x.tamount}</div>
              
              <div style="float: left ;  width:100% ; height : 2px ; background-color : gray"></div>
              <div style="float: left ; text-align: center ; height : 60px ; width:100% ; line-height : 60px ; font-size: 15px">
              <input id="msmarket" type="radio" name="join_invest" value="1" required="required" checked="checked" style="display: inline-block ; vertical-align: middle"> 시장가&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input id="mslimits" type="radio" name="join_invest" value="2" required="required" style="display: inline-block ; vertical-align: middle"> 지정가
              </div>
              
              <div style="text-align: center ; width : 300px ; height : 50px ; float : right ; margin-right : 30px ">
                           <a><i id="msdnum" class="fa fa-caret-square-o-down" style="float:right ; font-size: 30px ; color : gray ;  margin-top : 13px ; margin-left : 2px"></i></a>
                           <a><i id="msunum" class="fa fa-caret-square-o-up" style="float:right ; font-size: 30px ; color : gray ; margin-top : 13px" ></i></a>
                           <input id="msnum" type="text" placeholder="수량" name="search" style="float: right ; border-style: none ; width :70% ; height : 45px ; font-size: 15px ; margin-right : 10px ; margin-top : 2px ; text-align : right ; border-bottom : 2px solid gray">
              </div>
              
              <div style="float: left ;  width:100% ; height : 40px ; background-color : white"></div>
              
              <div style="text-align: center ; width : 300px ; height : 50px ; float : right ; margin-right : 30px ">
                           <a id="msdprice"><i class="fa fa-caret-square-o-down" style="float:right ; font-size: 30px ; color : gray ;  margin-top : 13px ; margin-left : 2px"></i></a>
                           <a id="msuprice"><i class="fa fa-caret-square-o-up" style="float:right ; font-size: 30px ; color : gray ; margin-top : 13px" ></i></a>
                           <input id="msprice" type="text" placeholder="단가" name="search" style="float: right ; border-style: none ; width :70% ; height : 45px ; font-size: 15px ; margin-right : 10px ; margin-top : 2px ; text-align : right ; border-bottom : 2px solid gray">
              </div>
              <div style="float: left ;  width:100% ; height : 30px ; background-color : white"></div>
              
              <div id="btn_check" style="float: left ;  width:100% ; height : 40px ; background-color : white ; font-size : 15px"><i class="fa fa-check-square-o" style="float: left ; font-size: 20px ; color : gray ; margin-left :10px"></i>&nbsp;&nbsp;매매금액</div>
              
              <div style="float: left ; width: 100% ; height : 60px ;  text-align : right">
                     <span id="mstprice" style="font-size: 30px ; margin-right : 5px" >0</span>
                     <span style="font-size: 15px ; margin-right : 20px" >원</span>
              </div>
              
              <div style="text-align : center">
                     <button id="s_mscf_btn" class="s2_button" style="margin-top:9px ; width : 200px ; height : 40px">매&nbsp;&nbsp;수&nbsp;&nbsp;확&nbsp;&nbsp;인</button>
              </div>
       `      
       },
	trading_mdChang : x=>{
	return `
		<div style="width : 90% ; margin-top : 7px ; margin-left : 10px ; float: left ; font-size : 15px ; font-weight : bolder ; color : hsl(0, 100%, 25%)">
			<i class="fa fa-bars" style="font-size: 17px ; color : hsl(0, 100%, 25%)"></i>&nbsp;&nbsp;매도화면
		</div>
		<div style="float: left ; width: 100% ; height: 70px ; background-color : white">
                     <div id="mdstockname" style="float: left ; width:70% ; margin-left : 20px ; margin-top: 20px ; font-size: 30px ; font-weight : bolder ; color : DodgerBlue">${x.stockname}</div>
                     <div id="mdstockcode" style="float: right ; width: 20%; margin-top: 40px ; font-size: 15px ; font-weight : bolder ; color : gray">${x.stockcode}</div>
		</div>
		
		<div style="float: left ; width:100% ; height : 2px ; background-color : gray"></div>
		
		<div class="ss_tableContent1" >현재가</div>
		<div id="md_nprice" class="ss_tableContent2" >${x.nprice}</div>
		<div class="ss_tableContent1" >매수호가</div>
		<div class="ss_tableContent2" >${x.buyprice}</div>
		
		<div class="ss_tableContent1" >전일대비</div>
		<div class="ss_tableContent2" >${x.pcontrast}</div>
		<div class="ss_tableContent1" >등략률</div>
		<div class="ss_tableContent2" >${x.frate}</div>
		
		<div class="ss_tableContent1" >거래량</div>
		<div class="ss_tableContent2" >${x.tvolume}</div>
		<div class="ss_tableContent1" >거래대금</div>
		<div class="ss_tableContent2" >${x.tamount}</div>
		
		<div style="float: left ; 	width:100% ; height : 2px ; background-color : gray"></div>
		
		<div style="float: left ; text-align: center ; height : 60px ; width:100% ; line-height : 60px ; font-size: 15px">
    		<input id="mdmarket" type="radio" name="join_invest" value="1" required="required" checked="checked" style="display: inline-block ; vertical-align: middle"> 시장가&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    		<input id="mdlimits" type="radio" name="join_invest" value="2" required="required" style="display: inline-block ; vertical-align: middle"> 지정가
		</div>
		 
		<div style="text-align: center ; width : 300px ; height : 50px ; float : right ; margin-right : 30px ">
				<a href><i class="fa fa-caret-square-o-down" style="float:right ; font-size: 30px ; color : gray ;  margin-top : 13px ; margin-left : 2px"></i></a>
				<a href><i class="fa fa-caret-square-o-up" style="float:right ; font-size: 30px ; color : gray ; margin-top : 13px" ></i></a>
				<input id="mdnum" type="text" placeholder="수량" name="search" style="float: right ; border-style: none ; width :70% ; height : 45px ; font-size: 15px ; margin-right : 10px ; margin-top : 2px ; text-align : right ; border-bottom : 2px solid gray">
		</div>
		
		<div style="float: left ; 	width:100% ; height : 40px ; background-color : white"></div>
		
		<div style="text-align: center ; width : 300px ; height : 50px ; float : right ; margin-right : 30px ">
				<a href><i class="fa fa-caret-square-o-down" style="float:right ; font-size: 30px ; color : gray ;  margin-top : 13px ; margin-left : 2px"></i></a>
				<a href><i class="fa fa-caret-square-o-up" style="float:right ; font-size: 30px ; color : gray ; margin-top : 13px" ></i></a>
				<input id="mdprice" type="text" placeholder="단가" name="search" style="float: right ; border-style: none ; width :70% ; height : 45px ; font-size: 15px ; margin-right : 10px ; margin-top : 2px ; text-align : right ; border-bottom : 2px solid gray">
		</div>
		
		<div style="float: left ; 	width:100% ; height : 30px ; background-color : white"></div>
		
		<div id="btn_mdcheck" style="float: left ; 	width:100% ; height : 40px ; background-color : white ; font-size : 15px"><i class="fa fa-check-square-o" style="float: left ; font-size: 20px ; color : gray ; margin-left :10px"></i>&nbsp;&nbsp;매매금액</div>
		
		<div style="float: left ; width: 100% ; height : 60px ;  text-align : right">
			<span id="mdtprice" style="font-size: 30px ; margin-right : 5px" >0</span>
			<span style="font-size: 15px ; margin-right : 20px" >원</span>
		</div>
		
		<div style="text-align : center">
			<button id="s_mdcf_btn" class="s2_button" style="margin-top:9px ; width : 200px ; height : 40px">매&nbsp;&nbsp;도&nbsp;&nbsp;확&nbsp;&nbsp;인</button>
		</div>
	`		
	},
	trading_jungjungChang : x=>{
		return `
		<div style="width : 90% ; margin-top : 7px ; margin-left : 10px ; float: left ; font-size : 15px ; font-weight : bolder ; color : hsl(0, 100%, 25%)">
			<i class="fa fa-bars" style="font-size: 17px ; color : hsl(0, 100%, 25%)"></i>&nbsp;&nbsp;정정화면
		</div>
		
		<div style="float: left ; width: 100% ; height : 580px"></div>
		
		<div style="text-align : center">
			<button id="s_mdcf_btn" class="s2_button" style="margin-top:9px ; width : 200px ; height : 40px">정&nbsp;&nbsp;정&nbsp;&nbsp;확&nbsp;&nbsp;인</button>
		</div>
		
		`
	},
	trading_chuisoChang : x=>{
		return `
		<div style="width : 90% ; margin-top : 7px ; margin-left : 10px ; float: left ; font-size : 15px ; font-weight : bolder ; color : hsl(0, 100%, 25%)">
			<i class="fa fa-bars" style="font-size: 17px ; color : hsl(0, 100%, 25%)"></i>&nbsp;&nbsp;취소화면
		</div>
		
		<div style="float: left ; width: 100% ; height : 580px"></div>
		
		<div style="text-align : center">
			<button id="s_mdcf_btn" class="s2_button" style="margin-top:9px ; width : 200px ; height : 40px">취&nbsp;&nbsp;소&nbsp;&nbsp;확&nbsp;&nbsp;인</button>
		</div>
		
		`
	},
	trading_detail : x=>{
			return `
					<div style="width: 100% ; height: 80px ; background-color : white">
						<div style="float: left ; width:70% ; margin-left : 20px ; margin-top: 20px ; font-size: 30px ; font-weight : bolder ; color : DodgerBlue">${x.stockname}</div>
						<div style="float: right ; width: 20%; margin-top: 40px ; font-size: 15px ; font-weight : bolder ; color : gray">${x.stockcode}</div>
					</div>
					
					<div style="width:100% ; height : 2px ; background-color : gray"></div>
					
					<div class="ss_tableContent1" >현재가</div>
					<div class="ss_tableContent2" >${x.nprice}</div>
					<div class="ss_tableContent1" >매도호가</div>
					<div class="ss_tableContent2" >${x.sellprice}</div>
					
					<div class="ss_tableContent1" >전일대비</div>
					<div class="ss_tableContent2" >${x.pcontrast}</div>
					<div class="ss_tableContent1" >매수호가</div>
					<div class="ss_tableContent2" >${x.buyprice}</div>
					
					<div class="ss_tableContent1" >등락률(%)</div>
					<div class="ss_tableContent2" >${x.frate}</div>
					<div class="ss_tableContent1" >전일가</div>
					<div class="ss_tableContent2" >${x.cprice}</div>
					
					<div class="ss_tableContent1" >거래량</div>
					<div class="ss_tableContent2" >${x.tvolume}</div>
					<div class="ss_tableContent1" >시가</div>
					<div class="ss_tableContent2" >${x.sprice}</div>
					
					<div class="ss_tableContent1" >거래대금(백만)</div>
					<div class="ss_tableContent2" >${x.tamount}</div>
					<div class="ss_tableContent1" >고가</div>
					<div class="ss_tableContent2" >${x.hprice}</div>
					
					<div class="ss_tableContent1" >액면가</div>
					<div class="ss_tableContent2" >${x.fvalue}</div>
					<div class="ss_tableContent1" >저가</div>
					<div class="ss_tableContent2" >${x.lprice}</div>
					
					<div class="ss_tableContent1" >상한가</div>
					<div class="ss_tableContent2" >${x.ulprice}</div>
					<div class="ss_tableContent1" >전일상한</div>
					<div class="ss_tableContent2" >${x.pulprice}</div>
					
					<div class="ss_tableContent1" >하한가</div>
					<div class="ss_tableContent2" >${x.dlprice}</div>
					<div class="ss_tableContent1" >전일하한</div>
					<div class="ss_tableContent2" >${x.pdlprice}</div>
					
					<div class="ss_tableContent1" >PER</div>
					<div class="ss_tableContent2" >${x.per}</div>
					<div class="ss_tableContent1" >EPS</div>
					<div class="ss_tableContent2" >${x.eps}</div>
					
					<div class="ss_tableContent1" >52주 최고</div>
					<div class="ss_tableContent2" >${x.ftweektop}</div>
					<div class="ss_tableContent1" >52주 최저</div>
					<div class="ss_tableContent2" >${x.ftweeklow}</div>
					
					<div class="ss_tableContent1" >시가총액</div>
					<div class="ss_tableContent2" >${x.mtotal}</div>
					<div class="ss_tableContent1" >상장주식수</div>
					<div class="ss_tableContent2" >${x.tnumstock}</div>
					<div class="ss_tableContent1" >외국인현재</div>
					<div class="ss_tableContent2" >${x.fnow}</div>
					<div class="ss_tableContent1" >자본금</div>
					<div class="ss_tableContent2" >${x.capital}</div>
			`
			
	}
}