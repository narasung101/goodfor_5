"use strict";
var customer_vue = customer_vue || {}
customer_vue = {
		customer_head:x=>{
			return `
			<link rel="stylesheet" href="${x.css}/customer.css">
			`
		},
		customer_body : x=>{
			return `
				  <style type="text/css">
				      .jumbotron{
				        background-image:url('https://blogifs-endpoint.azureedge.net/wp-content/uploads/2018/10/RANVP620974266Easyturn-min-1116x600.jpg');
				        background-size: cover;
				        text-shadow: black 0.4em 0.4em 0.4em;
				        color:white;
				        height: 328px;
				      } 		  				
				    				    
				  </style>
				      
				  <!-- Navigation -->
				  
				
				  <!-- Page Content -->
				  <div class="container" style="margin-top: 24px;">
				
				    <!-- Jumbotron Header -->
				    <div class="jumbotron">
				      <h1 class="display-3">굿포</h1>
				      <p class="lead">고객 감동과 만족을 위해 노력하는 굿포 고객센터입니다.</p>
				     <!-- 점보트론 바로가기 버튼 삭제 <a href="#" class="btn btn-primary btn-lg">바로가기!</a> -->
				    </div>
				
				    <!-- Page Features -->			  			
				
    
	<div class="row text-center">
					
				      <div class="col-lg-3 col-md-6 mb-4">
				        <div class="card h-100">
				          <img class="card-img-top" src="${x.img}/faq.png" alt="" class="img-fluid">
				          <div class="card-body">
				            <h4 class="card-title">자주하는질문</h4>
				            <p class="card-text"></p>
				          </div>
				          <div class="card-footer">
				            <a href="#" id="btn_faqView" class="btn btn-primary">바로가기</a>
				          </div>
				        </div>
				      </div>
				
				      <div class="col-lg-3 col-md-6 mb-4">
				        <div class="card h-100">
				        <img class="card-img-top" src="${x.img}/email.png" alt="">
				           <div class="card-body">
				            <h4 class="card-title">문의/제안</h4>
				            
				            <p class="card-text"></p>
				          </div>
				          <div class="card-footer">
				            <a href="#" id="btn_inquiryView" class="btn btn-primary">바로가기</a>
				          </div>
				        </div>
				      </div>
				
				      <div class="col-lg-3 col-md-6 mb-4">
				        <div class="card h-100">
				          <img class="card-img-top" src="${x.img}/customer.png" alt="">
				          <div class="card-body">
				            <h4 class="card-title">고객게시판</h4>
				            
				            <p class="card-text"></p>
				          </div>
				          <div class="card-footer">
				            <a href="#" id="btn_customerView" class="btn btn-primary">바로가기</a>
				          </div>
				        </div>
				      </div>
				      
				       <div class="col-lg-3 col-md-6 mb-4">
				        <div class="card h-100">
				          <img class="card-img-top" src="${x.img}/notice.png" alt="">
				          <div class="card-body">
				            <h4 class="card-title">공지사항</h4>
				            
				            <p class="card-text"></p>
				          </div>
				          <div class="card-footer">
				            <a href="#" id="btn_noticeView" class="btn btn-primary">바로가기</a>
				          </div>
				        </div>
				      </div>   		      
				      
				
				    </div>
				    

			
				    <!-- /.row -->
				
				  </div>
			`
		} ,
		
		
}