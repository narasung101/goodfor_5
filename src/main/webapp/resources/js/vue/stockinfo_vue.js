var stockinfo_vue = stockinfo_vue || {}
stockinfo_vue = {
	stockinfo_body:x=>{
		return `
		<div style="float: left ; width:100% ; margin-top: 30px">
			<div id="hflag_move" style="width:40% ; margin: auto">
				<div class="hflag_move1">
					<a href="#hwrapper">
						<img src="${x.img}/태극기.png" style="text-align:center"></br></br><h4>한국증시</h4>
					</a>
				</div>
				<div class="hflag_move2"><a href="#hwrapper"><img src="https://img.themoin.com/public/img/circle-flag-us.svg"></br></br><h4>미국증시</h4></a></div>
				<div class="hflag_move3"><a href="#hwrapper"><img src="https://img.themoin.com/public/img/circle-flag-jp.svg"></br></br><h4>일본증시</h4></a></div>
				<div class="hflag_move4"><a href="#hwrapper"><img src="https://img.themoin.com/public/img/circle-flag-cn.svg"></br></br><h4>중국증시</h4></a></div>
			</div>
		<div>
		
		<div style="width: 80% ; margin: auto ; border: 2px solid  #F5F5F5 ; margin-top: 95px">
			
			<div style="width: 50% ; float: left">
					<div id="canvas_show" style="margin-top: 2%; width: 100%">
						<canvas id="chart1" style="width: 100%; padding: 1%"></canvas>
					</div>
			</div>
			
			<div style="width: 50% ; float: left">
					<div id="canvas_show2" style="margin-top: 2%;width: 100%">
						<canvas id="chart2" style="width: 100%; padding: 1%"></canvas>
					</div>
			</div>
			
			<div style="width: 100% ; float: left ; border: 2px solid  #F5F5F5"></div>
			
			<div style="width: 50% ; float: left">
				<div style="width: 100%; height: 350px">
					<div class="card-header">
						<span id="more_1" style="float: right; font-size: 12px ; cursor: pointer ; margin-top: 5px ; color: gray">
							<i class="fa fa-caret-right"></i>&nbsp;&nbsp;더보기
						</span>
						<h2><i class="fa fa-address-card-o"></i>  &nbsp;&nbsp;&nbsp;상위거래목록</h2>
					</div>
					<div class="card-body">
						<table class="table table-hover" id="crawl_table1">
							<thead>
								<tr>
								<th>종목</th>
								<th>현재가</th>
								<th>고가</th>
								<th>저가</th>
								<th>변동</th>
								<th>변동%</th>
								<th>거래량</th>
								</tr>
							</thead>
							<tbody>
								<tr></tr>
							</tbody>
						</table>	
					</div>
				</div>
			</div>
			
			<div style="width: 50% ; float: left">
				<div style="width: 100%; height: 350px">
					<div class="card-header">
						<span id="more_2" style="float: right; font-size: 12px ; cursor: pointer ; margin-top: 5px ; color: gray">
							<i class="fa fa-caret-right"></i>&nbsp;&nbsp;더보기
						</span>
						<h2><i class="fa fa-address-card-o"></i>&nbsp;&nbsp;&nbsp;국내증시</h2>
					</div>
					<div class="card-body">
						<table class="table table-hover" id="table_nation">
							<thead>
								<tr>
									<th>종목</th>
									<th>현재가</th>
									<th>고가</th>
									<th>저가</th>
									<th>변동</th>
									<th>변동%</th>
									<th>거래량</th>
								</tr>
							</thead>
							<tbody>
								<tr id="hcrawltr_3"></tr>
							</tbody>
						</table>	
					</div>
				</div>
			</div>
			
			<div style="width: 50% ; float: left">
				<div style="width: 100%; height: 400px">
					<div class="card-header">
						<span id="more_3" style="float: right; font-size: 12px ; cursor: pointer ; margin-top: 5px ; color: gray">
							<i class="fa fa-caret-right"></i>&nbsp;&nbsp;더보기
						</span>
						<h2><i class="fa fa-address-card-o"></i>&nbsp;&nbsp;&nbsp;증권뉴스</h2>
					</div>
					<div class="card-body">
						<table class="table table-hover" id="crawl_news">
							<thead>
								<tr>
									<th>#</th>
									<th>증권뉴스</th>
								</tr>
							</thead>
							<tbody>
								<tr></tr>
							</tbody>
						</table>	
					</div>
				</div>
			</div>
			
			<div style="width: 50% ; float: left">
				<div style="width: 100%; height: 400px">
					<div class="card-header">
						<span id="more_4" style="float: right; font-size: 12px ; cursor: pointer ; margin-top: 5px ; color: gray">
							<i class="fa fa-caret-right"></i>&nbsp;&nbsp;더보기
						</span>
						<h2><i class="fa fa-address-card-o"></i>  &nbsp;&nbsp;&nbsp;해외증시</h2>
					</div>
					<div class="card-body" >
						<table class="table table-hover" id="table_internation">
							<colgroup>
								<col width = "16%"/>	
								<col width = "14%"/>	
								<col width = "14%"/>	
								<col width = "14%"/>	
								<col width = "14%"/>	
								<col width = "14%"/>	
								<col width = "14%"/>	
							</colgroup>
							<thead>
								<tr>
									<th>종목</th>
									<th>현재가</th>
									<th>고가</th>
									<th>저가</th>
									<th>변동</th>
									<th>변동%</th>
									<th>거래량</th>
								</tr>
							</thead>
							<tbody>
								<tr id="hcrawltr_2">
								</tr>
							</tbody>
						</table>	
					</div>
				</div>
				
				
			</div>
		</div>
			
		<div style="float: left ; width: 100% ; border: 2px solid #F5F5F5"></div>
		<div style="float: left ; width: 100% ; height: 100px">
			<div style="height:40px; margin-left:100px ; padding:10px ; float : left ; font-weight:500 ; color: gray">
				<h3>고객센터 &nbsp;&nbsp;1588-1588&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주문전용 &nbsp;&nbsp;1588-2588&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ARS &nbsp;&nbsp;1588-7000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;금융투자상담전용 &nbsp;&nbsp;1588-0022 </h3>
			</div>
			<div style="height:40px; margin-right:100px ; padding:15px ; float : right; font-size:x-large ; font-weight:700 ; color: gray">GOODFOR</div>
			</br></br></br>
			<div style="margin-left:110px ; color: gray">
				<h4>Copyright 2020. © Goodfor - www.Goodfor.com All Rights Reserved</h4>
			</div>
		</div>
`
	}
}