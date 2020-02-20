var stockinfomore2 = stockinfomore2 || {}
stockinfomore2=(()=>{
	const WHEN_ERR = '호출하는 stockinfomore2JS파일을 찾지 못했습니다.'
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
		more2()
		
	}
	let more2=()=>{
				$.getJSON(_+'/infos/crawl1/more2/', d=>{
					$(`<div id="more_body2" class="card-body" style="width:80%; margin-left: 10%">
							<div><h2><i class="fa fa-address-card-o"></i>  &nbsp;&nbsp;&nbsp;국내증시</h2></div>
								<table class="table table-hover" id="crawl_tablemore2">
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
						 let tr = $("<tr></tr>").appendTo("#crawl_tablemore2 tbody");
						 $("<td></td>").text(j.first2).appendTo(tr);
				            $("<td></td>").text(j.second2).appendTo(tr);
				            $("<td></td>").text(j.third2).appendTo(tr);
				            $("<td></td>").text(j.fourth2).appendTo(tr);
				            $("<td></td>").text(j.fifth2).appendTo(tr);
				            $("<td></td>").text(j.sixth2).appendTo(tr);
				            $("<td></td>").text(j.seventh2).appendTo(tr);
					})
				})
	}
	return {onCreate}
		
})()