"use strict";
var s_admin = s_admin || {}
s_admin = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
		
	let _, js, css, img, s_admin01_vue_js, s_admin03_vue_js, s_admin04_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		s_admin01_vue_js = js+'/vue/s_admin01_vue.js'
		s_admin03_vue_js = js+'/vue/s_admin03_vue.js'
		s_admin04_vue_js = js+'/vue/s_admin04_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(s_admin01_vue_js),
			$.getScript(s_admin03_vue_js),
			$.getScript(s_admin04_vue_js)
		)
		.done(()=>{
			setContentView()
			adminLeftButton()
			adminmenu1()
		})
		.fail()
	}
	
	let setContentView =()=>{
		
		$('#body_main').empty()
		.html(s_admin01_vue.admin01_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
		.appendTo('#body_main')
		
		$.getJSON(_+'/admin/menu1/selectData',
				d=>{
					$(`<i class="dripicons-graph-bar float-right"></i>
                    <h5 class="text-muted text-uppercase mb-3">거래현황 (건수/금액)</h5>
					<h4 class="mb-3" data-plugin="counterup"><span data-plugin="counterup">${d.tcase}건 / ${d.tamount.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}원</span></h4>
					<span class="badge badge-primary"> +11% </span> <span class="text-muted ml-2 vertical-middle">From previous period</span>`)
					.appendTo("#s_tcaseamount")
					$(`<i class="dripicons-graph-bar float-right"></i>
                    <h5 class="text-muted text-uppercase mb-3">매수현황 (건수/금액)</h5>
					<h4 class="mb-3" data-plugin="counterup"><span data-plugin="counterup">${d.sellcase}건 / ${d.sellamount.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}원</span></h4>
					<span class="badge badge-primary"> +11% </span> <span class="text-muted ml-2 vertical-middle">From previous period</span>`)
					.appendTo("#s_scaseamount")
					$(`<i class="dripicons-graph-bar float-right"></i>
                    <h5 class="text-muted text-uppercase mb-3">매도현황 (건수/금액)</h5>
					<h4 class="mb-3" data-plugin="counterup"><span data-plugin="counterup">${d.buycase}건 / ${d.buyamount.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}원</span></h4>
					<span class="badge badge-primary"> +11% </span> <span class="text-muted ml-2 vertical-middle">From previous period</span>`)
					.appendTo("#s_dcaseamount")
					$(`<i class="mdi mdi-alarm-light float-right"></i>
                    <h5 class="text-muted text-uppercase mb-3">이상거래 건수</h5>
                    <h4 class="mb-3" data-plugin="counterup">${d.alramcase}건</h4>
                    <span class="badge badge-primary"> +89% </span> <span class="text-muted ml-2 vertical-middle">Last year</span>`)
					.appendTo("#s_stcase")
					s_chart(d)
				})
	}
	
	let adminLeftButton =()=>{
		$('#s_admin_m1').click(e=>{
			e.preventDefault()
			$('#body_main')
			.empty()
			.html(s_admin01_vue.admin01_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
			.appendTo('#body_main')
			onCreate()
		})
		$('#s_admin_m3').click(e=>{
			e.preventDefault()
			$('#s_body_div01')
			.empty()
			.html(s_admin03_vue.admin03_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
			.appendTo('#s_body_div01')
		})
		$('#s_admin_m4').click(e=>{
			e.preventDefault()
			$('#s_body_div01')
			.empty()
			.html(s_admin04_vue.admin04_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
			.appendTo('#s_body_div01')
			adminmenu4()
		})
	}
	
	let s_chart =x=>{
		var s_ctx = document.getElementById("s1_Chart").getContext('2d')
		var s1_Chart = new Chart(s_ctx, {
		    type: 'line',
		    data: {
		        labels: x.chart1_Month.reverse(),
		        datasets: [{
		            label: '최근 6개월 월별 거래금액',
		            data: x.chart1_Amount.reverse(),
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 2
		        }]
		    },
		    options: {
		        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		})
		
		var s2_ctx = document.getElementById("s2_Chart").getContext('2d')
		var s2_Chart = new Chart(s2_ctx, {
		    type: 'pie',
		    data: {
		        labels: ["매도금액", "매수금액"],
		        datasets: [{
		            
		            data: [x.sellamount, x.buyamount],
		            backgroundColor: [
		            	'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		            	'rgba(54, 162, 235, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 2
		        }]
		    }
		})
		
	}
	
	let adminmenu1 =()=>{
		let modal = document.getElementById("sejong_Modal");
		
		$('#s_stcase')
		.hover(function(){
			$(this).css("border" , "3px solid blue");
		}, function(){
			$(this).css("border" , "3px solid white");
		})
		.click(e=>{
			e.preventDefault()
			$.getJSON(_+'/admin/selectStcaseDetail',
				d=>{
					$.each(d.stcaseList,(i,j)=>{
						$(`<tr>
							<td>${j.createdate}</td>
							<td>${j.caccount}</td>
							<td>${j.stockcode}</td>
							<td>${j.tradetype}</td>
							<td>${j.ordertype}</td>
							<td>${j.tcount}</td>
							<td>${j.tamount}</td>
							<td>${j.ftamount}</td>
						   </tr>`)
						.appendTo("#sModalTable tbody")
					})
				})
			
			modal.style.display = "block"
			
			$('#sejong_Modal_closer')
			.click(e=>{
				e.preventDefault()
				modal.style.display = "none";
			})
			
			window.onclick = function(event) {
			  if (event.target == modal) {
			    modal.style.display = "none";
			  }
			}
		})
		
		
		
	}
	
	let sejongModal =()=>{
		
			
		
	}
	
	let adminmenu4 =()=>{
		
		$('#s_createsummarytable')
		.click(e=>{
			e.preventDefault()
			$.getJSON(_+'/admin/create/summarytable',
				d=>{
				alert('summary table create : '+d.msg)
			})
		})
		
		$('#s_dropsummarytable')
		.click(e=>{
			e.preventDefault()
			$.getJSON(_+'/admin/drop/summarytable',
				d=>{
				alert('summary table drop : '+d.msg)
			})
		})
		
		$('#s_insertsummarytable')
		.click(e=>{
			e.preventDefault()
			$.getJSON(_+'/admin/insert/summarytable',
				d=>{
				alert('summary table drop : '+d.msg)
			})
		})
		
		$('#s_insertboardtable')
		.click(e=>{
			e.preventDefault()
			$.getJSON(_+'/admin/insert/boardtable',
				d=>{
				alert('summary table drop : '+d.msg)
			})
		})
		
		$('#s_insertTradingtable')
		.click(e=>{
			e.preventDefault()
			$.getJSON(_+'/tradings/insert/tradingtable',
				d=>{
				alert('summary table drop : '+d.msg)
			})
		})
		
	}
	
	return{ onCreate }
	
})()