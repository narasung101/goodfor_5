var stockinfomore4 = stockinfomore4 || {}
stockinfomore4=(()=>{
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
		more4()
		
	}
	let more4=()=>{
				$.getJSON(_+'/infos/crawl1/more4/', d=>{
					$(`<div id="more_body4" class="card-body" style="width:80%; margin-left: 10%">
							<div><h2><i class="fa fa-address-card-o"></i>  &nbsp;&nbsp;&nbsp;해외증시</h2></div>
								<table class="table table-hover" id="crawl_tablemore4">
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
						 let tr = $("<tr></tr>").appendTo("#crawl_tablemore4 tbody");
						 $("<td></td>").text(j.first4).appendTo(tr);
				            $("<td></td>").text(j.second4).appendTo(tr);
				            $("<td></td>").text(j.third4).appendTo(tr);
				            $("<td></td>").text(j.fourth4).appendTo(tr);
				            $("<td></td>").text(j.fifth4).appendTo(tr);
				            $("<td></td>").text(j.sixth4).appendTo(tr);
				            $("<td></td>").text(j.seventh4).appendTo(tr);
					})
				})
	}
	return {onCreate}
		
})()