var brd_vue = brd_vue || {}
brd_vue = {
	brd_body: () => {
		return `
		<h1>게시판 리스트</h1>
		`
	},

	write_form: function (x) {
		return `<div class="container" style="margin-top: 50px">
		<h1>글 작성</h1>
		<form id="write_form">
		<div>
		<input type="text" name="title" style="margin-top:10px" class="form-control" placeholder="제목" />
		</div>
		<div>
		<input type="text" value="${sessionStorage.getItem('cid')}" name="writer" style="margin-top:10px" class="form-control" placeholder="작성자 ID" />
		
		</div>
		<div>
		<input id="type" type="hidden" name="ctype" value="${x.type}" style="margin-top:10px" class="form-control" placeholder="작성자 ID" />
		</div>
		<div class="row">
		<div style="width:97%; margin:10px auto" >
		<textarea name="content" class="form-control" rows="10"></textarea>
		 </div>
		 </div>
		<div class="text-right">
		<input id="btn_write_submit" type="submit" value="확인" class="btn btn-default" style="border: solid 1px #ddd; width: 77px; font-size: 13px;"/>
		<input id="btn_cancel" value="취소"class="btn btn-default" style="border: solid 1px #ddd; width: 77px; font-size: 13px;"/>
		<input id="add_file" type="button" value="파일첨부" class="btn btn-default" style="border: solid 1px #ddd; width: 77px; font-size: 13px;"/>
		</div>		
		</form>
		</div>`
	},
	
	update_form: (x)=> {
		return `<div class="container" style="margin-top: 50px">
		<h1>글 수정</h1>
		<form id="update_form">
		<div>
		<input type="text" name="title" style="margin-top:10px" class="form-control" placeholder="제목" />
		</div>
		<div>
		<input type="text" name="writer" style="margin-top:10px" class="form-control" placeholder="작성자 ID" readonly="readonly" />
		</div>
		<div class="row">
		<div style="width:97%; margin:10px auto" >
		<textarea name="content" class="form-control" rows="10"></textarea>
		 </div>
		 </div>
		 
				 
         <div class="text-right">
         	<input id="update_add_file" type="button" value="파일첨부" class="btn btn-default" style="border: solid 1px #ddd; width: 77px; font-size: 13px;"/>
	         <button id="btn_update_submit" class="btn btn-default" style="border: solid 1px #ddd; width: 77px; font-size: 13px;">수정 완료</button> 
         </div>
				
		
		</form>
		</div>`
	},
	
	content_form: function () {
		return `<div class="container" style="margin-top: 50px">
		<h1>글 내용</h1>
		<form id="content_form">
		<div>
		 <input type="text" name="title" style="margin-top:10px" class="form-control" placeholder="제목" readonly="readonly" />
		</div>
		<div>
		 <input type="text" name="writer" style="margin-top:10px" class="form-control" placeholder="작성자 ID" readonly="readonly" />
		</div>
		<div class="row">
		<div style="width:97%; margin:10px auto" >
		 <textarea name="content" class="form-control" rows="10" readonly="readonly"></textarea>
		 </div>
		 </div>
		 
		
		<div class="text-right">	
	 	 <button id="btn_writeForm" class="btn btn-default" style="border: solid 1px #ddd; width: 77px; font-size: 13px;">글쓰기</button> 
	 	 <button id="btn_replyForm" class="btn btn-default" style="border: solid 1px #ddd; width: 77px; font-size: 13px;">답글</button> 
	 	 <button id="btn_updateForm" class="btn btn-default" style="border: solid 1px #ddd; width: 77px; font-size: 13px;">수정</button> 
        <button id="btn_delete" class="btn btn-default" style="border: solid 1px #ddd; width: 77px; font-size: 13px;">삭제</button> 
		<button id="btn_listback" class="btn btn-default" style="border: solid 1px #ddd; width: 77px; font-size: 13px;">목록</button> 
		</div>
		</form>
		</div>`
	},
	
	oneToOne_form: function (x) {
		return `
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
		<h1 id="btn_customerGo" style="margin-bottom: 20px;"><img src="${x.img}/email.png" style="width: 30px;">&nbsp;&nbsp;1:1문의</h2>
		<div id="ContentPlaceHolder1_div_wts" class="alert alert-light" role="alert" style="margin-bottom: 20px;">
		<p style="font-size: large;">고객님의 <span>궁금한 사항</span>을 <span>빠르고 친절하게</span> 처리해 드립니다. </p>
		<p class="lineTxt" style="font-size: small">굿포를 이용하시는데 불편하신 사항이나 의견이 있으시면 말씀해주세요. 고객님의 의견을 적극 반영하여 개선하도록 하겠습니다. </p>
		</div>
		<p>문의하실 사안을 선택하여 주세요.</p>
		<hr>
		  <span><input type="radio" id="male" name="gender" value="male">
		  <label for="male">문의</label></span>
		  <span><input type="radio" id="female" name="gender" value="female">
		  <label for="female">제안</label></span>
		  <span><input type="radio" id="other" name="gender" value="other">
		  <label for="other">신고</label></span>
		<span><input type="radio" id="other" name="gender" value="other">
		    <label for="other">오류</label></span>
		  <span><input type="radio" id="other" name="gender" value="other">
		  <label for="other">장애</label></span>
		  <hr>
		<form id="oneToOne_form">
		<div>
		<input type="text" name="title" style="margin-top:10px" class="form-control" placeholder="제목을 입력해주세요." />
		</div>
		<div>
		<input type="text" name="writer" class="form-control" placeholder="답변받으실 이메일을 입력해주세요." style="margin-top:10px" />
		</div>
		<div>
		</div>
		<div class="row">
		<div style="width:97%; margin:10px auto" >
		<textarea name="content" class="form-control" placeholder="내용을 입력해주세요." rows="10"></textarea>
		</div>
		</div>
		<div class="text-center">
		<button id="btn_oneToOneSubmit" type="submit" class="btn btn-default" style="border: solid 1px #ddd; width: 137px; font-size: 13px;">접수하기</button>
		</div>

		</div>
		</form>
		</div>`
		},		
		
	
	
} 