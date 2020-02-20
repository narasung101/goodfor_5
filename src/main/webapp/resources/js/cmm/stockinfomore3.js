var stockinfomore3 = stockinfomore3 || {}
stockinfomore3=(()=>{
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
		more3()
		
	}
	let more3=()=>{
				$.getJSON(_+'/infos/crawl1/more3/', d=>{
					$(`<div id="more_body3" class="card-body" style="width:80%; margin-left: 10%">
							<div><h2><i class="fa fa-address-card-o"></i>  &nbsp;&nbsp;&nbsp;증권뉴스</h2></div>
								<table class="table table-hover" id="crawl_tablemore3">
										<thead>
											<tr>
												<th>#</th>
												<th>증권뉴스</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>	
							</div>`).appendTo('body')
					$.each(d.list,(i,j)=>{	 
						$(`<tr><td></td></td><td><a onclick="window.open('${j.address}')">${j.tempforTitle}</a>
</td></tr>`).appendTo("#crawl_tablemore3 tbody")
    
					})
				})
	}
	return {onCreate}
		
})()