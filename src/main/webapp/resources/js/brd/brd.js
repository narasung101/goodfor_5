"use strict"
var brd = brd || {}
brd = (() => {
	const WHEN_ERR = '호출하는 JS파일을 찾을 수 없습니다.'
	let _, js, brd_vue_js, css, img, type
	let init = x => {
		_ = $.ctx()
		js = $.js()
		img = $.img()
		css = $.css()
	    brd_vue_js = js + '/vue/brd_vue.js'
	    type = x
		
	}
	let onCreate = x => {
		init(x)
		$.when(
			$.getScript(brd_vue_js)			
		).done(() => {
			setContentView()
		}).fail(() => {
			alert('실패')
		})
	}
	let setContentView = () => {
		$('#body_main').empty()
		if(type==3){

			list({ctype: type, pageSize: 5, nowPage: 0, img: $.img()})
		}
		else{

			listNotice({ctype: type, pageSize: 5, nowPage: 0, img: $.img()})
		}
	}
	let list = x => {

		$.getJSON(_ + '/boards/list/'+x.ctype+'/'+x.pageSize+'/'+x.nowPage+'/'+x.option+'/'+x.search, d => {
			$('#body_main').empty()
			$(`
			<style>
			#ContentPlaceHolder1_div_wts p span {
				color: #179ede;
				font-size: 16px;
				font-family: "맑은고딕","Malgun Gothic","돋움", "dotum", "verdana", sans-serif;
			    line-height: 20px;
			    letter-spacing: -1px;		
			} 
			</style>
			
			<div class="container" style="margin-top: 50px">
			<div id="wrapper">
			
			<h1 style="margin-bottom: 20px;"><img src="${x.img}/customer.png" style="width: 30px;">&nbsp;&nbsp;고객게시판</h2>
			
			<div id="ContentPlaceHolder1_div_wts" class="alert alert-light" role="alert" style="margin-bottom: 20px;">
					<p style="font-size: large;">고객님의 <span>궁금한 사항</span>을 <span>빠르고 친절하게</span> 처리해 드립니다. </p>
					<p class="lineTxt" style="font-size: small">굿포를 이용하시는데 불편하신 사항이나 의견이 있으시면 말씀해주세요. 고객님의 의견을 적극 반영하여 개선하도록 하겠습니다. </p>
			</div>
			
			<div id="page_sizeForm" class="btn btn-default pull-left" style="font-size: small;padding-right: 0px;">
			</div>
			<div id="search_form" class="btn btn-default pull-right" style="font-size: small;padding-right: 0px;">
			
			</div>
	
			<table class="table table-striped">
					
				<thead>
					<tr style="text-align:center; font-size: 13px;">
						<th width="10%">번호</th>
						<th width="30%">제목</th>
						<th width="10%">작성자</th>
						<th width="10%">작성일</th>
						<th width="10%">조회</th>
					</tr>
				</thead>
				
				<tbody>
				
				</tbody>
			</table>
	
			
				<div>
					<ul class="pagination" id="page_form" style="justify-content: center; margin-bottom: 0px; font-size: 13px;">
					</ul>
				</div>
	
					
			<button id="btn_brd" class="btn btn-default pull-right" style="border: solid 1px #ddd; width: 77px; font-size: 13px;">글쓰기</button>
			
			</div>
			</div>`).appendTo('#body_main')
		
		write(type)
			
		$('#btn_list').click(e => {
		e.preventDefault()
		$('#crawlTab').empty()
		$('#tmain').empty()
		list({ctype: type, pageSize: 5, nowPage: 0, img: $.img()})
		})				
			$.each(d.list, (i, j) => {
				console.log(d.list)
				var tr = $(`<tr></tr>`).appendTo("tbody");
				$(`<td style="text-align:center; font-size: 13px;"></td>`).text(j.seq).appendTo(tr);
				$(`<td style="text-align:center; font-size: 13px;"><a href="#">${j.title}</a></td>`).appendTo(tr)
				.click(e=>{
					e.preventDefault()
					alert('seq 확인'+ j.seq)
										
					$.getJSON(_ + '/boards/content/'+j.seq, d =>{
						
						content(d)						
					})
				});
				$(`<td style="text-align:center; font-size: 13px;"></td>`).text(j.writer).appendTo(tr);
				$(`<td style="text-align:center; font-size: 13px;"></td>`).text(j.credate).appendTo(tr);
				$(`<td style="text-align:center; font-size: 13px;"></td>`).text(j.viewcnt).appendTo(tr);

			})
		
			if (d.pager.existPrev) {
				$(`<li class="page-item">
					      <a href="#">이전</a>
				</li>`)
					.appendTo('#page_form')
					.click((e) => {
						e.preventDefault()
						alert('이전 페이지 클릭' + d.pager.prevBlock)
						list({ctype: type, pageSize: 5, nowPage: d.pager.prevBlock, img: $.img()})
					})
			}
			let blocks = []
			for (let i = d.pager.startPage + 1; i <= d.pager.endPage + 1; i++) {
				blocks.push(i)

			}

			$.each(blocks, (i, j) => {
				$(`<li class="page-item">
					      <a href="#">${j}</a>
				</li>`)
					.appendTo('#page_form')
					.click(function (e) {
						e.preventDefault()
						alert('a링크 클릭' + $(this).text())
						list({ ctype: type, pageSize: 5, nowPage: (Number($(this).text()) - 1), img: $.img() })
					})
			})
			if (d.pager.existNext) {
				$(`<li class="page-item">
					      <a href="#">다음</a>
				</li>`)
//				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page">다음</span>`)
					.appendTo('#page_form')
					.click(function (e) {
						e.preventDefault()
						alert('다음 페이지 클릭' + d.pager.nextBlock)
						 list({ ctype: type, pageSize: 5, nowPage: d.pager.nextBlock, img: $.img() })
						// list({pageSize: 5, nowPage: d.pager.nextBlock, option:$('#selectOption').val(), search: $('#search').val()})

					})
			}
			
//			<form>
//			페이지 사이즈 입력 <input type="text" id="pageSize" />
//			<input id="btn_page_size" type="submit" value="입력" />
//			</form>	
		
		$(`
				
		<form>
		 <select id="pageSize" class="btn btn-default" style="border: solid 1px #ddd; font-size: 13px;">
		  <option value="5">5개씩 </option>
		  <option value="10">10개씩</option>
		  <option value="15">15개씩</option>
		</select>
		<input id="btn_page_size" type="submit" value="보기" class="btn btn-default" style="border: solid 1px #ddd; font-size: 13px;"/>
		</form>
			
		`).appendTo('#page_sizeForm')
	
		
			$('#btn_page_size').click(e => {
				e.preventDefault()
				list({ ctype: type, pageSize: $('#pageSize').val(), nowPage: 0, img: $.img() })
				 //list({ pageSize: $('#pageSize').val(), nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			})
			
		 $(`
		 <select id="selectOption" class="btn btn-default" style="border: solid 1px #ddd; font-size: 13px;">
		  <option value="title">제목</option>
		  <option value="content">내용</option>
		  <option value="writer">작성자</option>
		</select>
	
		 <input type="text" id="search" class="btn btn-default" style="border: solid 1px #ddd; font-size: small;"/>	 	
		 <input id="btn_search" type="submit" value="입력" class="btn btn-default" style="border: solid 1px #ddd; font-size: 13px;"/> 
		 `)
		 .appendTo('#search_form')
		  $('#btn_search').click(e=>{
			 e.preventDefault()
			 alert('서치' + $('#search').val()+", 옵션:"+$('#selectOption').val())
			 list({ ctype:type, pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val(), img: $.img() })
			 //list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			
		 })
			
		})
				

	}
	
	let listNotice = x => {

		$.getJSON(_ + '/boards/list/'+x.ctype+'/'+x.pageSize+'/'+x.nowPage+'/'+x.option+'/'+x.search, d => {
			
			$('#body_main').empty()
			
					
			$(`
		<style>
		#ContentPlaceHolder1_div_wts p span {
			color: #179ede;
			font-size: 16px;
			font-family: "맑은고딕","Malgun Gothic","돋움", "dotum", "verdana", sans-serif;
		    line-height: 20px;
		    letter-spacing: -1px;		
		} 
		</style>
		
		<div class="container" style="margin-top: 50px">
		<div id="wrapper">
		
		<h1 id="btn_customerGo" style="margin-bottom: 20px;"><img src="${x.img}/notice.png" style="width: 30px;">&nbsp;&nbsp;공지사항</h2>
		
		<div id="ContentPlaceHolder1_div_wts" class="alert alert-light" role="alert" style="margin-bottom: 20px;">
				<p style="font-size: large;">고객님의 <span>궁금한 사항</span>을 <span>빠르고 친절하게</span> 처리해 드립니다. </p>
				<p class="lineTxt" style="font-size: small">굿포를 이용하시는데 불편하신 사항이나 의견이 있으시면 말씀해주세요. 고객님의 의견을 적극 반영하여 개선하도록 하겠습니다. </p>
		</div>
		
		<div id="page_sizeForm" class="btn btn-default pull-left" style="font-size: small;padding-right: 0px;">
		</div>
		<div id="search_form" class="btn btn-default pull-right" style="font-size: small;padding-right: 0px;">
		
		</div>

		<table class="table table-striped">
				
			<thead>
				<tr style="text-align:center; font-size: 13px;">
					<th width="10%">번호</th>
					<th width="30%">제목</th>
					<th width="10%">작성자</th>
					<th width="10%">작성일</th>
					<th width="10%">조회</th>
				</tr>
			</thead>
			
			<tbody>
			
			</tbody>
		</table>

		
			<div>
				<ul class="pagination" id="page_form" style="justify-content: center; margin-bottom: 0px; font-size: 13px;">
				</ul>
			</div>

				
		<button id="btn_brd" class="btn btn-default pull-right" style="border: solid 1px #ddd; width: 77px; font-size: 13px;">글쓰기</button>
		
		</div>
		</div>
		`).appendTo('#body_main')
		
		write(type)
			
		$('#btn_list').click(e => {
		e.preventDefault()
		$('#crawlTab').empty()
		$('#tmain').empty()
		list({ctype: type, pageSize: 5, nowPage: 0, img: $.img()})
		// list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(),
		// search: $('#search').val()})
		
		})				
									
			$.each(d.list, (i, j) => {
				console.log(d.list)
				var tr = $(`<tr></tr>`).appendTo("tbody");
				$(`<td style="text-align:center; font-size: 13px;"></td>`).text(j.seq).appendTo(tr);
				$(`<td style="text-align:center; font-size: 13px;"><a href="#">${j.title}</a></td>`).appendTo(tr)
				.click(e=>{
					e.preventDefault()
					alert('seq 확인'+ j.seq)
										
					$.getJSON(_ + '/boards/content/'+j.seq, d =>{
						
						content(d)						
					})
				});
				$(`<td style="text-align:center; font-size: 13px;"></td>`).text(j.writer).appendTo(tr);
				$(`<td style="text-align:center; font-size: 13px;"></td>`).text(j.credate).appendTo(tr);
				$(`<td style="text-align:center; font-size: 13px;"></td>`).text(j.viewcnt).appendTo(tr);

			})
		
			if (d.pager.existPrev) {
				$(`<li class="page-item">
					      <a href="#">이전</a>
				</li>`)
//				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page">이전</span>`)
					.appendTo('#page_form')
					.click((e) => {
						e.preventDefault()
						alert('이전 페이지 클릭' + d.pager.prevBlock)
						list({ctype: type, pageSize: 5, nowPage: d.pager.prevBlock, img: $.img()})
						//list({pageSize:5, nowPage:d.pager.prevBlock})
					
					})
			}

			let blocks = []
			for (let i = d.pager.startPage + 1; i <= d.pager.endPage + 1; i++) {
				blocks.push(i)

			}

			$.each(blocks, (i, j) => {
				$(`<li class="page-item">
					      <a href="#">${j}</a>
				</li>`)
					.appendTo('#page_form')
					.click(function (e) {
						e.preventDefault()
						alert('a링크 클릭' + $(this).text())
						
						 list({ ctype: type, pageSize: 5, nowPage: (Number($(this).text()) - 1), img: $.img() })
					   // list({pageSize: 5, nowPage: (Number($(this).text()) - 1), option:$('#selectOption').val(), search: $('#search').val()})

					})
			})
			if (d.pager.existNext) {
				$(`<li class="page-item">
					      <a href="#">다음</a>
				</li>`)
//				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page">다음</span>`)
					.appendTo('#page_form')
					.click(function (e) {
						e.preventDefault()
						alert('다음 페이지 클릭' + d.pager.nextBlock)
						 list({ ctype: type, pageSize: 5, nowPage: d.pager.nextBlock, img: $.img() })
						// list({pageSize: 5, nowPage: d.pager.nextBlock, option:$('#selectOption').val(), search: $('#search').val()})

					})
			}
			
//			<form>
//			페이지 사이즈 입력 <input type="text" id="pageSize" />
//			<input id="btn_page_size" type="submit" value="입력" />
//			</form>	
		
		$(`
				
		<form>
		 <select id="pageSize" class="btn btn-default" style="border: solid 1px #ddd; font-size: 13px;">
		  <option value="5">5개씩 </option>
		  <option value="10">10개씩</option>
		  <option value="15">15개씩</option>
		</select>
		<input id="btn_page_size" type="submit" value="보기" class="btn btn-default" style="border: solid 1px #ddd; font-size: 13px;"/>
		</form>
			
		`).appendTo('#page_sizeForm')
	
		
			$('#btn_page_size').click(e => {
				e.preventDefault()
				list({ ctype: type, pageSize: $('#pageSize').val(), nowPage: 0, img: $.img() })
				 //list({ pageSize: $('#pageSize').val(), nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			})
			
		 $(`
		 <select id="selectOption" class="btn btn-default" style="border: solid 1px #ddd; font-size: 13px;">
		  <option value="title">제목</option>
		  <option value="content">내용</option>
		  <option value="writer">작성자</option>
		</select>
	
		 <input type="text" id="search" class="btn btn-default" style="border: solid 1px #ddd; font-size: small;"/>	 	
		 <input id="btn_search" type="submit" value="입력" class="btn btn-default" style="border: solid 1px #ddd; font-size: 13px;"/> 
		 `)
		 .appendTo('#search_form')
		  $('#btn_search').click(e=>{
			 e.preventDefault()
			 alert('서치' + $('#search').val()+", 옵션:"+$('#selectOption').val())
			 list({ ctype:type, pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val(), img: $.img() })
			 //list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			
		 })
			
		})
				

	}
	
	let toggleList =(x)=>{
		$('#body_main').empty()
		$('#body_main').append(customer_vue.customer_head({css: $.css()}))

		$(`
		
		<style>
			#ContentPlaceHolder1_div_wts p span {
				color: #179ede;
				font-size: 16px;
				font-family: "맑은고딕","Malgun Gothic","돋움", "dotum", "verdana", sans-serif;
			    line-height: 20px;
			    letter-spacing: -1px;		
			} 
			</style>
			
			<div class="container" style="margin-top: 50px">
			<div id="wrapper">
			
			<h1 style="margin-bottom: 20px;"><img src="${x.img}/faq.png" style="width: 30px;">&nbsp;&nbsp;자주하는질문</h2>
			
			<div id="ContentPlaceHolder1_div_wts" class="alert alert-light" role="alert" style="margin-bottom: 20px;">
					<p style="font-size: large;">고객님의 <span>궁금한 사항</span>을 <span>빠르고 친절하게</span> 처리해 드립니다. </p>
					<p class="lineTxt" style="font-size: small">굿포를 이용하시는데 불편하신 사항이나 의견이 있으시면 말씀해주세요. 고객님의 의견을 적극 반영하여 개선하도록 하겠습니다. </p>
			</div>		
		
		<div class="container" style="margin-top: 50px">
							
				<button class="accordion">은행에서 계좌개설을 했는데  이용절차는 어떻게 되나요?</button>
                           <div class="panel" style="font-size: 14px;">
                             <p>온라인 거래를 위해 회원가입 -> 인증서 발급 -> 로그인  후 이용하시면 됩니다.</p>
                           </div>
                           
                           <button class="accordion">로그인 비밀번호를  분실했습니다. 확인할 수 있는 방법이 있나요?</button>
                           <div class="panel" style="font-size: 14px;">
                             <p>ID비밀번호를 잊어 로그인이 불가한 경우  ID비밀번호를 재설정 하실 수 있습니다.                                                  
                                * 홈페이지 회원가입 화면> 아이디/비밀번호 찾기  
                           
                           </div>
                           
                           <button class="accordion">주식매매시 세금은 어떻게  되나요?</button>
                           <div class="panel" style="font-size: 14px;">
                           <p>거래소시장 종목일 경우 매도금액 기준으로 증권거래세  0.10%, 농어촌특별세0.15% 총 0.25% 부과되며
                           코스닥시장 종목일 경우 매도금액 기준으로 증권거래세만  0.25% 부과됩니다. (원미만절사)
                           </p>
                           </div>
                                                
                           <button class="accordion">주식매매 수수료는 어떻게  되나요?</button>
                           <div class="panel" style="font-size: 14px;">
                           <p>주식매매 수수료는 체결된 주문에 대하여 부과되며, 주문한  매체 또는 주문 특성에 따라서 수수료율이 달리 부과될 수 있습니다.
                                  
                                  HTS 및 홈페이지를 통하여 현금주식매매시에는 0.015%  수수료가 부과되며, 신용융자 매매시에도 동일한 수수료가 부과됩니다.
                                  
                                  주식 매도시에 부과되는 비용은 수수료(0.015%)와  세금(0.25%)입니다.
                                  유가증권시장(거래소)의 경우에는 거래세(0.10%)와  농특세(0.15%)로 구성되며, 코스닥 시장은 거래세 0.25% 입니다.
                                  
                                  예)1천만원 거래시 매수, 매도 비용은?
                                  매수: 수수료 0.015%, 1천만원*0.015%=1,500원
                                  매도: 수수료 0.015%, 1천만원*0.015%=1,500원
                                  세금 0.25%, 1천만원*0.25%=25,000원
                                  총비용=> 28,000원 입니다.</p>
                           </div>
                           
                           <button class="accordion">배당이나 권리 관련 우편물을  이메일로 받을 수 있나요?</button>
                           <div class="panel" style="font-size: 14px;">
                           <p>배당/유무상/주주총희 등의 권리 관련 우편물의 경우  당사가 발송하는 것이 아니라 각 종목의 명의개서대행기관에서 우편물이 발송되고  있습니다.
                            이 부분은 증권회사에서 통제할 수 있는 사항이 아니며,  이메일로는 신청이 불가능합니다.
                             고객님의 재산을 보호하기 위한 사항이오니, 꼭 확인하여  주시기 바랍니다.
                           우편물 발송은 권리 발생 시점(기준일)의 등록된 주소지로  통보하게 되므로 이부분 참고해 주시기 바랍니다.
                           </div>
                           
                           <button class="accordion">계좌개설시 입금의 제한은  없나요? </button>
                           <div class="panel" style="font-size: 14px;">
                           <p>입금의 제한은 없습니다.
                            그러나 주식을 매수하기 위한 최소 증거금은 은행 이체를  통하여 증권계좌에 입금되어 있어야 주문이 가능하므로
                            신규매수주문 시에는 반드시 은행 이체를 통하여 최소증거금  이상을 입금하시기 바랍니다.</p>
                           </div>
                           
                           <button class="accordion">계좌를 개설할 때 본인이 아닌  대리인도 가능한가요?</button>
                           <div class="panel" style="font-size: 14px;">
                           <p>대리인을 통한 계좌개설 가능 여부는 제휴은행의 본인확인  기준에 따라 다르므로 계좌개설 이전에 은행에        가능여부를 확인하시는 것을  권해드립니다.</p>
                           </div>
			</div>
		`).appendTo('#body_main')
		
		var acc = document.getElementsByClassName("accordion");
	
		let i;

		for (i = 0; i < acc.length; i++) {
			$('button[class="accordion"]')[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  });
		}
	}
	
	let write =x=>  {
		
			
		$('#btn_brd').click((e) => {
			e.preventDefault()			
			$('#body_main').empty()
			$('#body_main').append(brd_vue.write_form({type:x}))		
				
			$('#btn_write_submit').click(e => {
				e.preventDefault()
				alert('글 작성 페이지 글쓰기 버튼 클릭')
				$.ajax({
					url: _ + '/boards/',
					type: 'POST',
					data: JSON.stringify({
						title: $('#write_form input[name="title"]').val(),
						ctype: $('#write_form input[name="ctype"]').val(),
						writer: $('#write_form input[name="writer"]').val(),
						content: $('#write_form textarea[name="content"]').val()
						}),
					dataType: 'json',
					contentType: 'application/json',
					success: d => {
						alert('글쓰기 성공'+type+" 으로 이동")
						 list({ctype: type, pageSize: 5, nowPage: 0, img: $.img()})
					},
					error: e => {
						alert('AJAX 실패')
					}
				})
			})			
			$(`<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">파일 업로드</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				           <form>
						     <input id="fileUpload" type="file"/>
						    </form>
				      </div>
				      <div class="modal-footer">
				        <button id="btn_fileCheck" type="button" class="btn btn-primary">확인</button>
				        <button id="btn_fileCancel" type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
				        </div>
				    </div>
				  </div>
			</div>`).appendTo('#body_main')
			$('#add_file').click(e=>{
				e.preventDefault()
				$('#myModal').modal()		
			})
			$('#btn_fileCheck').click(e=>{
				e.preventDefault()
				alert('확인')
				let formData = new FormData()
				let files = $('#fileUpload')[0].files

				let i = 0
				for(; i< files.length; i++){
					formData.append("uploadFile", files[i])
				}
				$.ajax({
					url : _+'/boards/fileupload',
					processData : false,
					contentType : false,
					data : formData,
					type : 'POST',
					success : d => {
						alert("파일업로드 성공")
						
					},
					error : e => {
						alert('파일 업로드 실패')
					}
				})
			})
			$('#btn_cancel').click(e=>{
				e.preventDefault()
				alert('취소버튼 클릭')
			})
		})
	}
	let content =(x)=>{
		$('#body_main').empty()
		$('#body_main').html(brd_vue.content_form())
						console.log(x.read)
						$('#content_form input[name="title"]').val(x.read.title)
						$('#content_form input[name="writer"]').val(x.read.writer)
						$('#content_form textarea[name="content"]').val(x.read.content)
		$('#btn_updateForm').click(e=>{
			e.preventDefault()
			alert('수정 클릭')
			update(x)
		})
		$('#btn_listback').click(()=>{
			alert('리스트 클릭')
		})
	}
	let update =(x)=>{
		$('#body_main').empty()
		$('#body_main').html(brd_vue.update_form())
		alert('seq 넘어옴' + x.read.seq)
		$('#update_form input[name="title"]').val(x.read.title)
		$('#update_form input[name="writer"]').val(x.read.writer)
		$('#update_form textarea[name="content"]').val(x.read.content)
		
		$('#btn_update_submit').click(e=> {
			alert('수정 버튼 클릭' + x.read.title +',' + x.read.content)
			e.preventDefault()
				$.ajax({
					url: _ + '/boards/update',
					type: 'PUT',
					data: JSON.stringify({
						seq : x.read.seq,
						title: $('#update_form input[name="title"]').val(),
						content: $('#update_form textarea[name="content"]').val()

					}),
					dataType: 'json',
					contentType: 'application/json',
					success: d => {
						alert('AJAX 성공')
						 list({ ctype: type, pageSize: 5, nowPage: 0, img: $.img()})
					},
					error: e => {
						alert('AJAX 실패')
					}
				})
		})
		deleteBoard(x)
	}
	let deleteBoard = function(x){
		$('#btn_deleteWrite').click((e)=>{
			e.preventDefault()
			alert('삭제버튼 클릭 seq 값 넘어옴 :' + x.read.seq)
			$.getJSON(_ + '/boards/delete/'+ x.read.seq, d =>{
			alert('getJSON 성공' +d)})
			list({ ctype: type, pageSize: 5, nowPage: 0, img: $.img()})
		})
	}

	return { onCreate, write, toggleList }
})();