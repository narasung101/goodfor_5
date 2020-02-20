var stockinfo = stockinfo || {}
stockinfo=(()=>{
	const WHEN_ERR = '호출하는 stockinfoJS파일을 찾지 못했습니다.'
	let _, js, css, img, stockinfo_vue_js			
	let init=()=>{
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		stockinfo_vue_js =js+'/vue/stockinfo_vue.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(stockinfo_vue_js)
		)
		.done(()=>{
			$('#main_body').empty()
			$('#more_body1').empty()
			$('#more_body2').empty()
			$('#more_body3').empty()
			$('#more_body4').empty()
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		crawling1({pageSize:5, nowPage:0})
		crawling2({pageSize:5, nowPage:0})
		crawling3({pageSize:5, nowPage:0})
		crawling4({pageSize:5, nowPage:0})
		chart1()
		chart11()
		$('.hflag_move1').click(e=>{
			e.preventDefault()
			$('#canvas_show').empty()
			$('#canvas_show2').empty()
			$('#chart1').remove()
			$('#chart2').remove()
			$(`<canvas id="chart1" style="width: 100%; padding: 1%"></canvas>`).appendTo('#canvas_show')
			$(`<canvas id="chart2" style="width: 100%; padding: 1%"></canvas>`).appendTo('#canvas_show2')
			chart1()
			chart11()
		})
		$('.hflag_move2').click(e=>{
			e.preventDefault()
			$('#canvas_show').empty()
			$('#canvas_show2').empty()
			$('#chart1').remove()
			$('#chart2').remove()
			$(`<canvas id="chart1" style="width: 100%; padding: 1%"></canvas>`).appendTo('#canvas_show')
			$(`<canvas id="chart2" style="width: 100%; padding: 1%"></canvas>`).appendTo('#canvas_show2')
			chart2()
			chart22()
		})
		$('.hflag_move3').click(e=>{
			e.preventDefault()
			$('#canvas_show').empty()
			$('#canvas_show2').empty()
			$('#chart1').remove()
			$('#chart2').remove()
			$(`<canvas id="chart1" style="width: 100%; padding: 1%"></canvas>`).appendTo('#canvas_show')
			$(`<canvas id="chart2" style="width: 100%; padding: 1%"></canvas>`).appendTo('#canvas_show2')
			chart3()
			chart33()
		})
		$('.hflag_move4').click(e=>{
			e.preventDefault()
			$('#canvas_show').empty()
			$('#canvas_show2').empty()
			$('#chart1').remove()
			$('#chart2').remove()
			$(`<canvas id="chart1" style="width: 100%; padding: 1%"></canvas>`).appendTo('#canvas_show')
			$(`<canvas id="chart2" style="width: 100%; padding: 1%"></canvas>`).appendTo('#canvas_show2')
			chart4()
			chart44()
		})
		$('#more_1').click(e=>{
			e.preventDefault()
			stockinfomore1.onCreate()
		})
		$('#more_2').click(e=>{
			e.preventDefault()
			stockinfomore2.onCreate()
		})
		$('#more_3').click(e=>{
			e.preventDefault()
			stockinfomore3.onCreate()
		})
		$('#more_4').click(e=>{
			e.preventDefault()
			stockinfomore4.onCreate()
		})
		
	}
	let crawling1 =x=>{
		$.getJSON(_+'/infos/crawl1/page/'+x.pageSize+'/'+x.nowPage, d=>{
			let list = d.list;
			$('#crawl_table1 tbody').empty()
				
			$.each(list,(i,j)=>{
					  let tr = $("<tr></tr>").appendTo("#crawl_table1 tbody");
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
	let crawling2=x=>{
		$.getJSON(_+'/infos/crawl2/page/'+x.pageSize+'/'+x.nowPage, d=>{	
			$('#table_nation tbody').empty()
			$.each(d.list,(i,j)=>{
			  let tr = $("<tr></tr>").appendTo("#table_nation tbody");
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
	let crawling3=x=>{
		$.getJSON(_+'/infos/crawl3/page/'+x.pageSize+'/'+x.nowPage, d=>{
			$('#crawl_news tbody').empty()
			
			$.each(d.list, (i, j)=>{
				$(`<tr><td></td></td><td><a onclick="window.open('${j.address}')">${j.tempforTitle}</a></td></tr>`)
				.css({width: '25%',height: '100%'
		             })
				.appendTo('#crawl_news tbody')
			})
		})
	}
	let crawling4=x=>{
		$.getJSON(_+'/infos/crawl4/page/'+x.pageSize+'/'+x.nowPage, d=>{
			$('#table_internation tbody').empty()
			$.each(d.list,(i,j)=>{
					  let tr = $("<tr></tr>").appendTo("#table_internation tbody");
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
	let chart1 =()=>{
		$.getJSON(_+'/infos/chart1/', d=>{
			console.log(d.list)
			let x = []
			let y = []
			$.each(d.list.reverse(), (i,j)=>{
				x.push(j.first1.substr(7,5).replace('월', '/'))
				y.push(parseFloat(j.first4.replace(',', '')))
			})
			var ctx = document.getElementById('chart1').getContext('2d');
			let myChart = new Chart(ctx, {		
			    type: 'line',
			    data: {
			        labels: x,
			        datasets: [{
			            label: ' 코스피',       
			            data: y ,
			            backgroundColor:'rgba(255, 99, 132, 0.2)',
			            borderColor: 'rgba(255, 99, 132, 1)',
			            borderWidth: 1,
			            borderColor: '',
			            hoverBorderWidth: 3,
			            hoverBorderColor: '#000'
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero: true,
			                    min : 2050
			                }
			            }]
			        },
			        tooltips:{
			        	enabled: true
			        }
			    }
			});		
		})	
	}
	let chart2=()=>{
		$.getJSON(_+'/infos/chart2/', d=>{
			console.log(d.list)
			let x = []
			let y = []
			$.each(d.list.reverse(), (i,j)=>{
				x.push(j.first1.substr(7,5).replace('월', '/'))
				y.push(parseFloat(j.first4.replace(',', '')))
			})

			console.log(x)
			console.log(y)
			var ctx = document.getElementById('chart1').getContext('2d');
			let myChart = new Chart(ctx, {		
			    type: 'line',
			    data: {
			        labels: x,
			        datasets: [{
			            label: ' S&P 500',       
			            data: y,
			            backgroundColor: 'rgba(255, 99, 132, 0.2)',
			            borderColor: 'rgba(255, 99, 132, 1)',
			            borderWidth: 1,
			            borderColor: '',
			            hoverBorderWidth: 3,
			            hoverBorderColor: '#000'
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero: true,
			                    min : 3200
			                }
			            }]
			        },
			        tooltips:{
			        	enabled: true
			        }
			    }
			});		
		})		
	}
	let chart3=()=>{
		$.getJSON(_+'/infos/chart3/', d=>{
			console.log(d.list)
			let x = []
			let y = []
			$.each(d.list.reverse(), (i,j)=>{
				x.push(j.first1.substr(7,5).replace('월', '/'))
				y.push(parseFloat(j.first4.replace(',', '')))
			})

			console.log(x)
			console.log(y)
			var ctx = document.getElementById('chart1').getContext('2d');
			let myChart = new Chart(ctx, {		
			    type: 'line',
			    data: {
			        labels: x,
			        datasets: [{
			            label: '닛케이',       
			            data: y ,
			            backgroundColor: 'rgba(255, 99, 132, 0.2)',
			            borderColor: 'rgba(255, 99, 132, 1)',
			            borderWidth: 1,
			            borderColor: '',
			            hoverBorderWidth: 3,
			            hoverBorderColor: '#000'
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero: true,
			                    min : 22500
			                }
			            }]
			        },
			        tooltips:{
			        	enabled: true
			        }
			    }
			});		
		})		
	}
	let chart4=()=>{
		$.getJSON(_+'/infos/chart4/', d=>{
			console.log(d.list)
			let x = []
			let y = []
			$.each(d.list.reverse(), (i,j)=>{
				x.push(j.first1.substr(7,5).replace('월', '/'))
				y.push(parseFloat(j.first4.replace(',', '')))
			})

			console.log(x)
			console.log(y)
			var ctx = document.getElementById('chart1').getContext('2d');
			let myChart = new Chart(ctx, {		
			    type: 'line',
			    data: {
			        labels: x,
			        datasets: [{
			            label: '상하이종합',       
			            data: y ,
			            backgroundColor: 'rgba(255, 99, 132, 0.2)',
			            borderColor: 'rgba(255, 99, 132, 1)',
			            borderWidth: '1px',
			            borderColor: 'white',
			            hoverBorderWidth: '3px',
			            hoverBorderColor: '#000'
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero: true,
			                    min : 2500
			                }
			            }]
			        },
			        tooltips:{
			        	enabled: true
			        }
			    }
			});		
		})		
	}
	let chart11 =()=>{
		$.getJSON(_+'/infos/chart11/', d=>{
			console.log(d.list)
			let x = []
			let y = []
			$.each(d.list.reverse(), (i,j)=>{
				x.push(j.first1.substr(7,5).replace('월', '/'))
				y.push(parseFloat(j.first4.replace(',', '')))
			})
			var ctx = document.getElementById('chart2').getContext('2d');
			let myChart = new Chart(ctx, {		
			    type: 'line',
			    data: {
			        labels: x,
			        datasets: [{
			            label: ' 코스닥',       
			            data: y ,
			            backgroundColor: 'rgba(99, 255, 222, 0.3)',
			            borderColor: 'rgba(99, 255, 222, 1)',
			            borderWidth: 1,
			            borderColor: '',
			            hoverBorderWidth: 3,
			            hoverBorderColor: '#000'
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero: true,
			                    min : 600
			                }
			            }]
			        },
			        tooltips:{
			        	enabled: true
			        }
			    }
			});		
		})	
	}
	let chart22 =()=>{
		$.getJSON(_+'/infos/chart22/', d=>{
			console.log(d.list)
			let x = []
			let y = []
			$.each(d.list.reverse(), (i,j)=>{
				x.push(j.first1.substr(7,5).replace('월', '/'))
				y.push(parseFloat(j.first4.replace(',', '')))
			})
			var ctx = document.getElementById('chart2').getContext('2d');
			let myChart = new Chart(ctx, {		
			    type: 'line',
			    data: {
			        labels: x,
			        datasets: [{
			            label: ' Nasdaq',       
			            data: y ,
			            backgroundColor: 'rgba(99, 255, 222, 0.3)',
			            borderColor: 'rgba(99, 255, 222, 1)',
			            borderWidth: 1,
			            borderColor: '',
			            hoverBorderWidth: 3,
			            hoverBorderColor: '#000'
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero: true,
			                    min : 9000
			                }
			            }]
			        },
			        tooltips:{
			        	enabled: true
			        }
			    }
			});		
		})	
	}
	let chart33 =()=>{
		$.getJSON(_+'/infos/chart33/', d=>{
			console.log(d.list)
			let x = []
			let y = []
			$.each(d.list.reverse(), (i,j)=>{
				x.push(j.first1.substr(7,5).replace('월', '/'))
				y.push(parseFloat(j.first4.replace(',', '')))
			})
			var ctx = document.getElementById('chart2').getContext('2d');
			let myChart = new Chart(ctx, {		
			    type: 'line',
			    data: {
			        labels: x,
			        datasets: [{
			            label: ' TOPIX',       
			            data: y  ,
			            backgroundColor: 'rgba(99, 255, 222, 0.3)',
			            borderColor: 'rgba(99, 255, 222, 1)',
			            borderWidth: 1,
			            borderColor: '',
			            hoverBorderWidth: 3,
			            hoverBorderColor: '#000'
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero: true,
			                    min : 1600
			                }
			            }]
			        },
			        tooltips:{
			        	enabled: true
			        }
			    }
			});		
		})	
	}
	let chart44 =()=>{
		$.getJSON(_+'/infos/chart44/', d=>{
			console.log(d.list)
			let x = []
			let y = []
			$.each(d.list.reverse(), (i,j)=>{
				x.push(j.first1.substr(7,5).replace('월', '/'))
				y.push(parseFloat(j.first4.replace(',', '')))
			})
			var ctx = document.getElementById('chart2').getContext('2d');
			let myChart = new Chart(ctx, {		
			    type: 'line',
			    data: {
			        labels: x,
			        datasets: [{
			            label: 'China A50(FTXIN9)',       
			            data: y ,
			            backgroundColor: 'rgba(99, 255, 222, 0.3)',
			            borderColor: 'rgba(99, 255, 222, 1)',
			            borderWidth: 1,
			            borderColor: '',
			            hoverBorderWidth: 3,
			            hoverBorderColor: '#000'
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero: true,
			                    min : 12500
			                }
			            }]
			        },
			        tooltips:{
			        	enabled: true
			        }
			    }
			});		
		})	
	}
	return {onCreate}
})()