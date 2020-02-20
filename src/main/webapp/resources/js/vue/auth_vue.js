"use strict";
var auth_vue = auth_vue || {}
auth_vue = {
	auth_body: x => {
		return `
		<div id="s-header">
			<div style="position: fixed; top: 0; left: 0; z-index:1 ;width: 100% ; height: 70px ; background-color: #2471A3">
		
				<div style="float: left ; width: 20% ; height: 70px ; line-height: 70px">
					<a id="btn_main" href="#" style="margin-left: 70px; font-size: 30px ; font-weight: bold ; color: white" >
		                <span>
		                    GoodFor
		                </span>
		            </a>
				</div>
				
				<div style="float: left ; width: 70% ; height: 70px">
					<div style="line-height: 70px ; padding: 0; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -moz-flex; display: -webkit-flex; display: flex; justify-content: space-between; list-style: none;">
						<div style="display:inline-block;width:15%;color:white;font-size:15px"></div>
						<div id="btn_admin" style="display:inline-block;width:15%;color:white;font-size:15px"></div>
						<div id="btn_trading" style="display:inline-block;width:15%;color:white;font-size:15px"></div>
						<div id="btn_stockinfo" style="display:inline-block;width:15%;color:white;font-size:15px; cursor: pointer"><i class="fa fa-bar-chart" style="font-size:20px"></i>&nbsp;&nbsp;주식정보</div>
						<div id="btn_notice" style="display:inline-block;width:15%;color:white;font-size:15px; cursor: pointer"><i class="fa fa-comments" style="font-size:20px"></i>&nbsp;&nbsp;고객센터</div>
						<div id="btn_loginForm" style="display:inline-block;width:15%;color:white;font-size:15px; cursor: pointer"><i class="fa fa-user" style="font-size:20px"></i>&nbsp;&nbsp;로그인</div>
			        </div>
				</div>
				
				<div style="float: left ; width: 10% ; height: 70px ; line-height: 70px">
					<div style="text-align: center ; margin-top: 10px">
					    <i id="s_etc_btn" class="fa fa-th" style="font-size:25px ; color: white ; cursor: pointer"></i>
					</div>
				</div>
				
				<div id="sejong_Modal2" class="sejong_modal2">
					<!-- Modal content -->
					<div class="sejong_modal2-content">
					    <p style="color: #154360 ; font-weight: bolder">Welcome GoodFor !!</p>
					    <div id="btn_mypage">
		                    <i class="fi-head"></i> <span> 계좌정보</span>
		                </div></br>
		                <div id="btn_joinForm">
		                    <i class="fi-cog"></i> <span> 회원가입</span>
		                </div></br>
		                <div id="btn_inquiryView2">
		                    <i class="fi-help"></i> <span> 1:1 문의</span>
		                </div></br>
		                <div id="btn_noticeView2">
		                    <i class="fi-lock"></i> <span> 공지사항</span>
		                </div></br>
		                <div id="btn_logout2">
		                    <i class="fi-power"></i> <span> 로그아웃</span>
		                </div>
					</div>
				</div>
			</div>
		</div>		<!-- s-header end --> 
		
        <div id="body_main">
        	<div style="width:80% ;height:450px; margin:auto">		<!-- 1st div start -->
				<div id="myCarousel" class="carousel slide" data-ride="carousel" style="text-align:center">  <!-- myCarousel start -->
					<ul class="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
					</ul>
					<a class="carousel-control-prev" style="color:gray;font-size:30px" href="#myCarousel" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left" ></span>
				    </a>
				    <a class="carousel-control-next" style="color:gray;font-size:30px" href="#myCarousel" data-slide="next">
				      <span class="glyphicon glyphicon-chevron-right"></span>
				    </a>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="${x.img}/mainintro1.png" alt="img1" style="width:1100; height: 430px;">
						</div>
						<div class="carousel-item">
							<img src="${x.img}/mainintro2.png" alt="img2" style="width:1100; height: 430px;">
						</div>
						<div class="carousel-item">
						<img src="${x.img}/mainintro3.png" alt="img3" style="width:1100; height: 430px;">
						</div>
					</div>
				</div>		<!-- myCarousel end -->
			</div>		<!-- 1st div end -->
            
            <div style="width:100% ; height:140px ; background-color: #F5F5F5 ; text-align:center ">		<!-- 2nd div start -->
                <div style="margin-left:100px; margin-right:100px; padding: 0; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -moz-flex; display: -webkit-flex; display: flex; justify-content: space-between; list-style: none;">
	                <img id="s_mainImg01" class="s_hoverZoom" src="${x.img}/icon1.png">
	                <img id="s_mainImg02" class="s_hoverZoom" src="${x.img}/icon2.png">
	                <img id="s_mainImg03" class="s_hoverZoom" src="${x.img}/icon3.png">
	                <img id="s_mainImg04" class="s_hoverZoom" src="${x.img}/icon4.png">
	                <img id="s_mainImg05" class="s_hoverZoom" src="${x.img}/icon5.png">
	                <img id="s_mainImg06" class="s_hoverZoom" src="${x.img}/icon6.png">
	                <img id="s_mainImg07" class="s_hoverZoom" src="${x.img}/icon7.png">
                </div>
			</div>		<!-- 2nd div end -->
			
			<div class="sejong_main">
				<div class="sejong_row">
					<div class="sejong_column">
						<div class="sejong_content">
							<img src="${x.img}/event1.jpg" style="width:100%; height:180px">
							</br></br>
							<h3>Good Information</h3>
							<p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
						</div>
					</div>
					<div class="sejong_column">
						<div class="sejong_content">
							<img src="${x.img}/event2.jpg" style="width:100%; height:180px">
							</br></br>
							<h3>With GoodFor</h3>
							<p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
						</div>
					</div>
					<div class="sejong_column">
						<div class="sejong_content">
							<img src="${x.img}/event3.png" style="width:100%; height:180px">
							</br></br>
							<h3>AI Solution</h3>
							<p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
						</div>
					</div>
					<div class="sejong_column">
						<div class="sejong_content">
							<img src="${x.img}/event4.png" style="width:100%; height:180px">
							</br></br>
							<h3>Analysis with GoodFor</h3>
							<p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
						</div>
					</div>
				</div>		<!-- sejong_row end -->
			</div>		<!-- sejong_main end -->
		
		</br></br></br></br></br></br></br></br></br></br></br></br></br>
		</br></br></br></br></br></br></br></br></br></br></br></br></br>
		<div style="width:100% ; height:2px ; background-color:gray"></div>
		<div style="height:40px; margin-left:100px ; padding:10px ; float : left ; font-weight:500 ; color: gray">
		<h3>고객센터 &nbsp;&nbsp;1588-1588&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주문전용 &nbsp;&nbsp;1588-2588&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ARS &nbsp;&nbsp;1588-7000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;금융투자상담전용 &nbsp;&nbsp;1588-0022 </h3>
		</div>
		<div style="height:40px; margin-right:100px ; padding:15px ; float : right; font-size:x-large ; font-weight:700 ; color: gray">GOODFOR</div>
		</br></br></br>
		<div style="margin-left:110px ; color: gray">
		<h4>Copyright 2020. © Goodfor - www.Goodfor.com All Rights Reserved</h4>
		</div>
			
		</div>		<!-- body_main end -->
		`
	},
	
	auth_login_header: x=>{
		return `
		<div style="position: fixed; top: 0; left: 0; z-index:1 ;width: 100% ; height: 70px ; background-color: #2471A3">
		
			<div style="float: left ; width: 20% ; height: 70px ; line-height: 70px">
				<a id="btn_main" href="#" style="margin-left: 70px; font-size: 30px ; font-weight: bold ; color: white" >
	                <span>
	                    GoodFor
	                </span>
	            </a>
			</div>
			
			<div style="float: left ; width: 70% ; height: 70px">
				<div style="line-height: 70px ; padding: 0; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -moz-flex; display: -webkit-flex; display: flex; justify-content: space-between; list-style: none;">
					<div style="display:inline-block;width:15%;color:white;font-size:15px"></div>
					<div id="btn_trading" style="display:inline-block;width:15%;color:white;font-size:15px; cursor: pointer"><i class="fa fa-money" style="font-size:20px"></i>&nbsp;&nbsp;주식매매</div>
					<div id="btn_stockinfo" style="display:inline-block;width:15%;color:white;font-size:15px; cursor: pointer"><i class="fa fa-bar-chart" style="font-size:20px"></i>&nbsp;&nbsp;주식정보</div>
					<div id="btn_notice" style="display:inline-block;width:15%;color:white;font-size:15px; cursor: pointer"><i class="fa fa-comments" style="font-size:20px"></i>&nbsp;&nbsp;고객센터</div>
					<div id="btn_admin" style="display:inline-block;width:15%;color:white;font-size:15px; cursor: pointer"><i class="fa fa-address-book-o" style="font-size:20px"></i>&nbsp;&nbsp;관리자</div>
					<div id="btn_logout" style="display:inline-block;width:15%;color:white;font-size:15px; cursor: pointer"><i class="fa fa-power-off" style="font-size:20px"></i>&nbsp;&nbsp;로그아웃</div>
		        </div>
			</div>
			
			<div style="float: left ; width: 10% ; height: 70px ; line-height: 70px">
				<div style="text-align: center ; margin-top: 10px">
				    <i id="s_etc_btn" class="fa fa-th" style="font-size:25px ; color: white ; cursor: pointer"></i>
				</div>
			</div>
			
			<div id="sejong_Modal2" class="sejong_modal2">
				<!-- Modal content -->
				<div class="sejong_modal2-content">
				    <p style="color: #154360 ; font-weight: bolder">Welcome GoodFor !!</p>
				    <div id="btn_mypage">
	                    <i class="fi-head"></i> <span> 계좌정보</span>
	                </div></br>
	                <div id="btn_joinForm">
	                    <i class="fi-cog"></i> <span> 회원가입</span>
	                </div></br>
	                <div id="s_oneTooneQ">
	                    <i class="fi-help"></i> <span> 1:1 문의</span>
	                </div></br>
	                <div id="s_noti">
	                    <i class="fi-lock"></i> <span> 공지사항</span>
	                </div></br>
	                <div id="btn_logout2">
	                    <i class="fi-power"></i> <span> 로그아웃</span>
	                </div></br>
				</div>
			</div>
		</div>
		`
	},
	
	auth_login_body : x=>{
		return `<div style="width:80% ;height:450px; margin:auto">		<!-- 1st div start -->
				<div id="myCarousel" class="carousel slide" data-ride="carousel" style="text-align:center">  <!-- myCarousel start -->
					<ul class="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
					</ul>
					<a class="carousel-control-prev" style="color:gray;font-size:30px" href="#myCarousel" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left" ></span>
				    </a>
				    <a class="carousel-control-next" style="color:gray;font-size:30px" href="#myCarousel" data-slide="next">
				      <span class="glyphicon glyphicon-chevron-right"></span>
				    </a>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="${x.img}/mainintro1.png" alt="img1" style="width:1100; height: 430px;">
						</div>
						<div class="carousel-item">
							<img src="${x.img}/mainintro2.png" alt="img2" style="width:1100; height: 430px;">
						</div>
						<div class="carousel-item">
							<img src="${x.img}/mainintro3.png" alt="img3" style="width:1100; height: 430px;">
						</div>
					</div>
				</div>		<!-- myCarousel end -->
			</div>		<!-- 1st div end -->
            
            <div style="width:100% ; height:140px ; background-color: #F5F5F5 ; text-align:center ">		<!-- 2nd div start -->
                <div style="margin-left:100px; margin-right:100px; padding: 0; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -moz-flex; display: -webkit-flex; display: flex; justify-content: space-between; list-style: none;">
	                <img id="s_mainImg01" class="s_hoverZoom" src="${x.img}/icon1.png">
	                <img id="s_mainImg02" class="s_hoverZoom" src="${x.img}/icon2.png">
	                <img id="s_mainImg03" class="s_hoverZoom" src="${x.img}/icon3.png">
	                <img id="s_mainImg04" class="s_hoverZoom" src="${x.img}/icon4.png">
	                <img id="s_mainImg05" class="s_hoverZoom" src="${x.img}/icon5.png">
	                <img id="s_mainImg06" class="s_hoverZoom" src="${x.img}/icon6.png">
	                <img id="s_mainImg07" class="s_hoverZoom" src="${x.img}/icon7.png">
                </div>
			</div>		<!-- 2nd div end -->
			
			<div class="sejong_main">
				<div class="sejong_row">
					<div class="sejong_column">
						<div class="sejong_content">
							<img src="${x.img}/event1.jpg" style="width:100%; height:180px">
							</br></br>
							<h3>Good Information</h3>
							<p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
						</div>
					</div>
					<div class="sejong_column">
						<div class="sejong_content">
							<img src="${x.img}/event2.jpg" style="width:100%; height:180px">
							</br></br>
							<h3>With GoodFor</h3>
							<p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
						</div>
					</div>
					<div class="sejong_column">
						<div class="sejong_content">
							<img src="${x.img}/event3.png" style="width:100%; height:180px">
							</br></br>
							<h3>AI Solution</h3>
							<p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
						</div>
					</div>
					<div class="sejong_column">
						<div class="sejong_content">
							<img src="${x.img}/event4.png" style="width:100%; height:180px">
							</br></br>
							<h3>Analysis with GoodFor</h3>
							<p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
						</div>
					</div>
				</div>		<!-- sejong_row end -->
			</div>		<!-- sejong_main end -->
		
		</br></br></br></br></br></br></br></br></br></br></br></br></br>
		</br></br></br></br></br></br></br></br></br></br></br></br></br>
		<div style="width:100% ; height:2px ; background-color:gray"></div>
		<div style="height:40px; margin-left:100px ; padding:10px ; float : left ; font-weight:500 ; color: gray">
		<h3>고객센터 &nbsp;&nbsp;1588-1588&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주문전용 &nbsp;&nbsp;1588-2588&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ARS &nbsp;&nbsp;1588-7000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;금융투자상담전용 &nbsp;&nbsp;1588-0022 </h3>
		</div>
		<div style="height:40px; margin-right:100px ; padding:15px ; float : right; font-size:x-large ; font-weight:700 ; color: gray">GOODFOR</div>
		</br></br></br>
		<div style="margin-left:110px ; color: gray">
		<h4>Copyright 2020. © Goodfor - www.Goodfor.com All Rights Reserved</h4>
		</div>`
	},
	
	join: () => {
	    return `
	    
	    <head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
	<title>GoodFor Register</title>

	<style type="text/css">
		body {
			color: #999;
			background: #fafafa;
			font-family: 'Roboto', sans-serif;
		}
		.form-control {
	        min-height: 41px;
			box-shadow: none;
			border-color: #e6e6e6;
		}
		.form-control:focus {
			border-color: #007bff;
		}
	    .form-control, .btn {        
	        border-radius: 3px;
	    }
		.signup-form {
			width: 425px;
			margin: 0 auto;
			padding: 30px 0;
		}
		.signup-form h2 {
			color: #333;
			font-weight: bold;
	        margin: 0 0 25px;
	    }
	    .signup-form form {
	    	margin-bottom: 15px;
	        background: #fff;
			border: 1px solid #f4f4f4;
	        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	        padding: 40px 50px;
	    }
		.signup-form .form-group {
			margin-bottom: 20px;
		}
		.signup-form label {
			font-weight: normal;
			font-size: 13px;
		}
		.signup-form input[type="checkbox"] {
			margin-top: 2px;
		}    
	    .signup-form .btn {        
	        font-size: 16px;
	        font-weight: bold;
			background: #007bff;
			border: none;
			min-width: 140px;
	        outline: none !important;
	    }
		.signup-form .btn:hover, .signup-form .btn:focus {
			background: #00b3b3;
		}
		.signup-form a {
			color: #007bff;
			text-decoration: none;
		}	
		.signup-form a:hover {
			text-decoration: underline;
		}
	</style>
	</head>

	<body>
	<div class="signup-form">
	    <form action="#" method="post">
			<h2>회원가입</h2>
	        <div class="form-group">
	        	아이디 <input type="text" id="join_cid" class="form-control" name="username"  required="required">
	        </div>
	        <div class="form-group">
	    		비밀번호 <input type="password" id="join_cpw" class="form-control" name="password"  required="required">
	        </div>
			<div class="form-group">
	            	비밀번호확인 <input type="password" class="form-control" name="confirm_password"  required="required">
	        </div>        
	          <div class="form-group">
	        	이름<input type="text" id="join_userName" class="form-control" name="username" required="required">
	        </div>
	        <div class="form-group">
	        	이메일<input type="email" id="join_email" class="form-control"  required="required">
	        </div>
			
	        <div class="form-group">
	        	핸드폰번호<input type="text" id="join_pnumber" class="form-control"  required="required">
	        </div>
	        
	        <div id="join_investRadio" class="form-group">
	        	투자성향<br>
	        	<input type="radio" name="join_invest" value="1" required="required" checked="checked"> 안정형
	        	<input type="radio" name="join_invest" value="2" required="required" > 중립형
	        	<input type="radio" name="join_invest" value="3" required="required"> 공격형
	        </div>
	        <div class="form-group">
				<label class="checkbox-inline"><input type="checkbox" required="required"> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
			</div>
			<div class="form-group">
	            <button id="btn_join" type="submit" class="btn btn-primary btn-lg" style=" width: 326px;">가입하기</button>
	        </div>
	    </form>
		<div class="text-center">Already have an account? </div>
	</div>

	</body>`
	  },

	  login: ()=> {
	    return `
	     <head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
	<title>GoodFor Login</title>
	<style type="text/css">
		body {
			color: #999;
			background: #fafafa;
			font-family: 'Roboto', sans-serif;
		}
		.form-control {
	        min-height: 41px;
			box-shadow: none;
			border-color: #e6e6e6;
		}
		.form-control:focus {
			border-color: #007bff;
		}
	    .form-control, .btn {        
	        border-radius: 3px;
	    }
		.signup-form {
			width: 425px;
			margin: 0 auto;
			padding: 30px 0;
		}
		.signup-form h2 {
			color: #333;
			font-weight: bold;
	        margin: 0 0 25px;
	    }
	    .signup-form form {
	    	margin-bottom: 15px;
	        background: #fff;
			border: 1px solid #f4f4f4;
	        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	        padding: 40px 50px;
	    }
		.signup-form .form-group {
			margin-bottom: 20px;
		}
		.signup-form label {
			font-weight: normal;
			font-size: 13px;
		}
		.signup-form input[type="checkbox"] {
			margin-top: 2px;
		}    
	    .signup-form .btn {        
	        font-size: 16px;
	        font-weight: bold;
			background: #007bff;
			border: none;
			min-width: 140px;
	        outline: none !important;
	    }
		.signup-form .btn:hover, .signup-form .btn:focus {
			background: #00b3b3;
		}
		.signup-form a {
			color: #007bff;
			text-decoration: none;
		}	
		.signup-form a:hover {
			text-decoration: underline;
		}
	</style>
	</head>
	<body>
	<div class="signup-form">
	    <form action="#" method="post">
			<h2>로그인</h2>
	        <div class="form-group">
	        	아이디<input type="text" id="login_cid" class="form-control"  required="required">
	        </div>
	        
			<div class="form-group">
	            비밀번호<input type="password" id="login_cpw" class="form-control"  required="required">
	        </div>
			
	        <div class="form-group">
	            <button id="btn_login" type="submit" class="btn btn-primary btn-lg" style=" width: 326px;">로그인</button>
	        </div>
	         <div class="clearfix">
		      <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
		      <a href="#" class="pull-right">Forgot Password?</a>
		    </div>        
	    </form>
		<div class="text-center">Already have an account? </div>
	</div>

	</body>
	  `    
	  },


};
