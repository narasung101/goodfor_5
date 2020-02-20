"use strict";
var s_admin01_vue = s_admin01_vue || {}
s_admin01_vue = {
		admin01_body : x=>{
			return `
        <!-- Begin page -->
        <div id="wrapper">
        
            <div class="left side-menu">
                    <!--- Sidemenu -->
                    <div id="sidebar-menu" class="active">
                        <!-- Left Menu Start -->
                        <ul class="metismenu in" id="side-menu">
                            <li class="menu-title">ADMIN MENU</li>
                            <li>
                                <a id="s_admin_m1" href="#"><i class="fi-briefcase"></i> <span> DashBoard </span> <span class="menu-arrow"></span></a>
                            </li>
                            <li>
                                <a id="s_admin_m3" href="#"><i class="fi-bar-graph-2"></i><span> System Monitoring </span> <span class="menu-arrow"></span></a>
                            </li>
                            <li>
                                <a id="s_admin_m4" href="#"><i class="fi-box"></i><span> System Management </span> <span class="menu-arrow"></span></a>
                            </li>
                		</ul>
					</div>	<!-- Sidebar-menu end -->
            </div>	<!-- Left Sidebar End -->
            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            
            <div id="s_body_div01" class="content-page">
                
                <div  style="margin-top: 30px;">	<!-- Start content -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <h4 class="page-title float-left">Dashboard</h4>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>	<!-- end row -->
                        
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div id="s_tcaseamount" class="card-box tilebox-one">
                                    <!-- move to s_admin.js -->
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div id="s_scaseamount" class="card-box tilebox-one">
                                	<!-- move to s_admin.js -->
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div id="s_dcaseamount" class="card-box tilebox-one">
                                    <!-- move to s_admin.js -->
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div id="s_stcase" class="card-box tilebox-one">
                                    <!-- move to s_admin.js -->
                                </div>
                            </div>
                        </div>	<!-- end row -->
                        
                        <!-- The Modal -->
						<div id="sejong_Modal" class="sejong_modal">
						  <!-- Modal content -->
						  <div class="sejong_modal-content">
						    <span id="sejong_Modal_closer" class="sejong_close">&times;</span>
						    <p>이상거래 건별 세부 내역</p>
							  	<div style="font-size:small; overflow-y: scroll; height:300px">
							  	<table class="table table-hover" id="sModalTable">
									<thead>
										<tr>
											<th style="position: sticky ; top : 0 ; background-color : white">거래일자</th>
											<th style="position: sticky ; top : 0 ; background-color : white">계좌번호</th>
											<th style="position: sticky ; top : 0 ; background-color : white">종목</th>
											<th style="position: sticky ; top : 0 ; background-color : white">매매유형</th>
											<th style="position: sticky ; top : 0 ; background-color : white">거래유형</th>
											<th style="position: sticky ; top : 0 ; background-color : white">거래수량</th>
											<th style="position: sticky ; top : 0 ; background-color : white">거래단가</th>
											<th style="position: sticky ; top : 0 ; background-color : white">거래금액</th>
										</tr>
									</thead>
									<tbody>
										
									</tbody>
								</table>
								</div>
						</div>
						  
						</div>
                        
                        
                        <div class="row">
                        
                            <div class="col-xl-7">
                                <div class="card-box">
                                    <h4 class="header-title">월별 거래금액 현황</h4>
                                    
                                    <canvas id="s1_Chart" height="250" width="480" style="display: block; height: 339px; width: 543px;"></canvas>
                                    
                                </div>
                            </div>
                            
                            <div class="col-xl-5">
                                <div class="card-box">
                                    <h4 class="header-title">거래타입별 현황</h4>
                                    
                                    <canvas id="s2_Chart" height="522" width="678" style="display: block; height: 418px; width: 543px;"></canvas>
                                </div>
                            </div>
                        </div>
                         
                            
                        </div>
                        </div>
                    </div> <!-- container -->
                </div> <!-- content -->
                
             
                
                
                <footer class="footer text-right">
                    2019 - 2020 © Goodfor. - www.Goodfor.com
                </footer>
            </div>
        </div>`
	}
}