"use strict";
var s_admin04_vue = s_admin04_vue || {}
s_admin04_vue = {
		
		admin04_head : x=>{
			return ``
		},
		
		admin04_body : x=>{
			return `<div style="margin-top: 30px;"> <!-- Start content -->
				<div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <h4 class="page-title float-left">System Management</h4>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>  <!-- end row -->
                        
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="dripicons-graph-bar float-right"></i>
                                    <h5 class="text-muted text-uppercase mb-3">공지사항</h5>
                                    <h4 class="mb-3" data-plugin="counterup">1,587</h4>
                                    <span class="badge badge-primary"> 3 case </span> 
                                    <span class="text-muted ml-2 vertical-middle">최근 등록일 : 2020.01.28</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="fi-layers float-right"></i>
                                    <h5 class="text-muted text-uppercase mb-3">문의사항</h5>
                                    <h4 class="mb-3"><span data-plugin="counterup">13 / 782</span></h4>
                                    <span class="badge badge-primary"> 5 case </span> 
                                    <span class="text-muted ml-2 vertical-middle">지연건수 (24시간 경과)</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="fi-tag float-right"></i>
                                    <h5 class="text-muted text-uppercase mb-3">1 : 1 문의</h5>
                                    <h4 class="mb-3"><span data-plugin="counterup">15 / 1,232</span></h4>
                                    <span class="badge badge-primary"> 4 case </span> 
                                    <span class="text-muted ml-2 vertical-middle">지연건수 (24시간 경과)</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="mdi mdi-alarm-light float-right"></i>
                                    <h5 class="text-muted text-uppercase mb-3">고객정보수정</h5>
                                    <h4 class="mb-3" data-plugin="counterup">비밀번호 초기화</h4>
                                    <span class="badge badge-primary"> +89% </span> <span class="text-muted ml-2 vertical-middle">Last year</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <h5 class="text-muted text-uppercase mb-3">Summary Table 생성 및 삭제</h5>
                                    </br></br>
                                    <button id="s_createsummarytable" type="button">Table 생성</button>
                                    <div style="display:inline-block;width:20px"></div>
                                    <button id="s_insertsummarytable" type="button">Data Insert</button>
                                    <div style="display:inline-block;width:20px"></div>
                                    <button id="s_dropsummarytable" type="button">Table 삭제</button>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <h5 class="text-muted text-uppercase mb-3">Account Table 생성 및 삭제</h5>
                                    </br></br>
                                    <button type="button">Table 생성</button>
                                    <div style="display:inline-block;width:20px"></div>
                                    <button type="button">Data Insert</button>
                                    <div style="display:inline-block;width:20px"></div>
                                    <button type="button">Table 삭제</button>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <h5 class="text-muted text-uppercase mb-3">QBoard Table 생성 및 삭제</h5>
                                    </br></br>
                                    <button id="s_createboardtable" type="button">Table 생성</button>
                                    <div style="display:inline-block;width:20px"></div>
                                    <button id="s_insertboardtable" type="button">Data Insert</button>
                                    <div style="display:inline-block;width:20px"></div>
                                    <button id="s_dropboardtable" type="button">Table 삭제</button>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <h5 class="text-muted text-uppercase mb-3">Trade Table 생성 및 삭제</h5>
                                    </br></br>
                                    <button id="s_createTradingtable" type="button">Table 생성</button>
                                    <div style="display:inline-block;width:20px"></div>
                                    <button id="s_insertTradingtable" type="button">Data Insert</button>
                                    <div style="display:inline-block;width:20px"></div>
                                    <button id="s_dropTradingtable" type="button">Table 삭제</button>
                                </div>
                            </div>
                        </div>
                        
                    </div> <!-- container -->
                </div> <!-- content -->
                <footer class="footer text-right">
                    2019 - 2020 © Goodfor. - www.Goodfor.com
                </footer>`
	}
}