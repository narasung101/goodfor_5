var stockinfomore1 = stockinfomore1 || {}
stockinfomore1=(()=>{
	const WHEN_ERR = '호출하는 stockinfomoreJS파일을 찾지 못했습니다.'
		let _, js, css, img		
		let init=()=>{
			_=$.ctx()
			js=$.js()
			css=$.css()
			img=$.img()
		}
		let onCreate=()=>{
			init()
			setContentView()
	}
	let setContentView=()=>{
		$('#body_main').empty()
		more1()
		
	}
	let more1=()=>{
				$.getJSON(_+'/infos/crawl1/more1/', d=>{
					$(`<div id="more_body1" class="card-body" style="width:80%; margin-left: 10%">
							<div style="margin-top: 20px"><h2><i class="fa fa-address-card-o"></i>  &nbsp;&nbsp;&nbsp;상위 거래 목록</h2></div>
								<table class="table table-hover" id="crawl_tablemore1">
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
							</div>`).appendTo('body')
					$.each(d.list,(i,j)=>{
						 let tr = $("<tr></tr>").appendTo("#crawl_tablemore1 tbody");
				            $("<td></td>").text(j.first1).appendTo(tr);
				            $("<td></td>").text(j.second1).appendTo(tr);
				            $("<td></td>").text(j.third1).appendTo(tr);
				            $("<td></td>").text(j.fourth1).appendTo(tr);
				            $("<td></td>").text(j.fifth1).appendTo(tr);
				            $("<td></td>").text(j.sixth1).appendTo(tr);
				            $("<td></td>").text(j.seventh1).appendTo(tr);
					})
				})
	}
	return {onCreate}
		
})()