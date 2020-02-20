<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">	
	<title>GoodFor</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

<body>
	<div id="intro">
		<link rel="stylesheet" href="http://www.kaiwa-projects.com/assets/css/qbkl-grid.css">
	  <link rel="stylesheet" href="http://www.kaiwa-projects.com/assets/css/style-ko.css">
 		<div class="top-decorations">
						<a href="#" style="
					position: absolute;
					left: 15px;
					top: 20px;
					text-decoration: none;
					color: #ffffff;
				"></a>
					</div>
 		<!--  <div class="top-decorations" style="width: 100%; position: absolute; "></div>  -->
	
		<section id="intro" class="fx-backstretch">
			<div class="info" style="position: relative; z-index: 0; background: none;">
				<div class="container" style="top: 18%;">
					<div class="row">

						<div class="col-full"><h1 style="margin-top: 100px;">나성</h1></div>

					</div>
					<div class="row">
						<div class="col-1-4 centered line"></div>
					</div>
					<div class="row">
						<div class="col-full"><h4>웹개발자</h4></div>
					</div>
				</div>
				<div class="backstretch" style="left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; height: 91%; width: 100%; z-index: -999998; position: absolute;">
<!-- 					<img src="http://www.kaiwa-projects.com/assets/img/backstretch.jpg" style="position: absolute; margin: 0px; padding: 0px; border: none; width: 100%; height: 825px; max-height: none; max-width: none; z-index: -999999; left: -129.833px; top: 0px;"> -->
					<img src="<%=application.getContextPath()%>/resources/img/main.png" style="opacity: 0.5; margin: 0px; padding: 0px; border: none; width: 100%; height: 99%; max-height: none; max-width: none; z-index: -999999; left: -129.833px; top: 0px;">
				</div>
			</div>
			<div id="nav-sticky-wrapper" class="sticky-wrapper" style="height: 60px;">
				<nav id="nav" style="z-index: 100; font-size: 30px">
					<ul class="clearfix" style="width:610px; font-weight: bold;">
						<li class="current" style="margin-right: 60px;"><a href="#aboutme">인사 소개</a></li>
						<li class="" style="margin-right: 60px;"><a href="#skills"><span></span>기술</a></li>
						<li class="" style="margin-right: 60px;"><a href="#portfolio">프로젝트</a></li>
						<li class=""><a href="#contact">연락</a></li>
					</ul>
				</nav>
			</div>
		</section>
		<section id="aboutme" class="section">
			<div class="container" style="width : 70%">
				<div class="row">
					<div class="col-full">
						<h2 class="section-title">인사 소개</h2>
						<div class="centered line"></div>
					</div>
				</div>
				<div class="row section-content">
					<div class="col-1-3" style="text-align: center;">
						<img src="resources/img/면접용.jpeg" style="height: 200px;" src="">
					</div>

					<div class="col-1-3">
						<h4>안녕하세요? 나성입니다!</h4>
						<p>저는 훌륭하고 멋진 소프트웨어 개발을 즐겨하는 사람입니다. 웹사이트 및 브라우저 플러그인, 기업 소프트웨어도 만들었고, 게임도 제작했습니다. 그 중  좋아했던 프로젝트 몇 개를 아래 포트폴리오로 만들었으니 <a href="#portfolio">여기를 누르시거나</a> 페이지 아래쪽에서 구경해 보세요! 도움이 필요하세요? 저하고 이야기해 보시겠어요? 소셜 미디어나 <a href="#contact">이메일</a>로 연락해 주세요.</p>
						<ul class="social-links clearfix">
							<li><a href="https://www.github.com/본인깃허브주소" target="_blank" title="Github"><i class="fa fa-github"></i></a></li>
						</ul>
					</div>
					 <div class="col-1-3">
						<h4>개인 관심사</h4>
						<p><a href="#skills">프로그래밍</a>을 하지 않을 때는 다음과 같은 것으로 소일하며 즐거운 생활을 하고 있답니다.</p>
						<ul>
							<li>여행을 다니는 것을 좋아합니다</li>
							<li>책 읽는 것을 좋아합니다</li>
							<li>예전 영화나 최신영화를 보는것을 즐깁니다.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section id="skills" class="section-alt">
			<div class="container" style="width:1000px">
				<div class="row" style="margin:0 auto">
					<div class="col-full">
						<h2 class="section-title">전문 기술</h2>
						<div class="centered line"></div>
					</div>
				</div>
				<div class="row section-content" style="margin:0 auto">
					<div class="skill-container">
						<div class="col-full">
							<div class="col-full text-center" style="color: #333;">저는 웹으로는  자바를 사용합니다.<br>
							화면은 부트스트랩과 제이쿼리를 이용해 구성하였고
							<br>데이터베이스는 MariaDB를 사용하였습니다.
							</div>
						</div>
						<div class="col-1-5 skill">
							<h4></h4>
						</div>
						<div class="col-1-5 skill">
							<h4>Java</h4>
						</div>
						<div class="col-1-5 skill">
							<h4>Jquery</h4>
						</div>
						<div class="col-1-5 skill">
							<h4>JavaScript</h4>
						</div>
					</div>
					<div class="col-full skill-container">
						<h3>자주 사용하는 소프트웨어</h3>
					</div>
					<div class="col-2-3 col-wrap centered skill-container" style="with:100%;justify-content: center;">
						<div class="col-1-2" style="padding-left:100px">
							<h4>프레임워크하고 엔진</h4>
							<ul style="color: #333;"><li>Spring5</li></ul>							
						</div>
						<div class="col-1-2" style="padding-left:100px">
							<h4>소프트웨어</h4>
							<ul style="color: #333;"><li>Git</li><li>MySQL</li><li>MariaDB</li></ul>	
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="portfolio" class="section">
			<div class="container">
				<div class="row">
					<div class="col-full">
						<h2 class="section-title">프로젝트 & Git Hub</h2>
						<div class="centered line"></div>
					</div>
				</div>
				<div class="row section-content">
					<div class="row">
						<div class="col-full">
							<ul class="filters">
								<li class="filter active" data-filter="all">전체</li>
							</ul>
						</div>
					</div>
					<div class="row projects gallery" style="margin-left: 320px;">
						<div class="col-1-6 project port-application mix_all" style="display: inline-block;  opacity: 1; padding-top: 30px;">
							<a id="project" href="#">
								<img src="<%=application.getContextPath()%>/resources/img/project_logo.png" alt="project">
							</a>
						</div>
						<div class="col-1-6 project port-game mix_all" style="display: inline-block;  opacity: 1; padding-top: 30px;">
							<a href="https://github.com/자신주소" title="github" >
								<img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" alt="Super Puzzle Platformer is a Unity game developed in 14 days.">
							</a><
						</div>						
					</div>
				</div>
			</div>
		</section>
		<section id="contact" class="section">
			<div class="container">
				<div class="row">
					<div class="col-full">
						<h2 class="section-title">연락처</h2>
						<div class="centered line"></div>
					</div>
				</div>
				<div class="row section-content">
					<div class="col-2-3 col-wrap centered text-center">
						<div class="row">
							<div class="col-full" style="margin-bottom: 25px;">

								항상 초심같은 마음가짐으로 임할것이고 최신기술 트렌드에도 뒤져지지
								않고 하루하루 성장하겠습니다  <br>narasung101@naver.com으로 이메일 주세요. 곧 답장 드리겠습니다.<br>언제든지 연락주세요	
							</div>
						</div>
						<div id="form-contact-container">
							<div class="col-full">
								<label for="">이름
									<h2>나성</h2>
								</label>
							</div>
							<div class="col-full">
								<label for="">Email 주소

									<h2>narasung101@naver.com</h2>
								</label>
							</div>
							<div class="col-full">
								<label for="">휴대폰 번호
									<h2>010-2802-7860</h2>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div id="root">	
	</div>
	<div id="popup-root"></div>
	<div id="popup-exchange"></div>
	<script>
	
		$('#project')
		.click(e=>{
			e.preventDefault()
			location.href = '<%=application.getContextPath()%>/home'
		})
	</script>
</body>
</html>