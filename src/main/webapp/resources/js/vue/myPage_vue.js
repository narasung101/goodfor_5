"use strict";
var myPage_vue = myPage_vue || {}
myPage_vue = {
	main : ()=>{
		return `
		<div style="margin: auto ; width: 70% ; height: 600px">
			<div style="width: 30% ; height: 550px ; float: left ; margin-top: 50px ; background-color: #F5F5F5">
				<div style="margin-top: 10px ; width:100% ;  height:220px ; overflow: hidden; display: flex ; align-items: center; justify-content: center">
					<img style="border-radius: 50%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="">
				</div>
				<div style="float: left ; margin-left: 20px ; margin-top: 30px ; font-size: 15px ; font-weight: bolder ; color: gray" >아이디 : hong </div>
				
				<button id="s_btn_pwchange" class="s3_button" style="float: right ; margin-top:60px ; margin-right: 20px ; width : 120px ; height : 20px">비밀번호 변경</button>
				
				<div style="float: left ; width: 100% ; height: 30px"></div>
				<div style="float: left ; margin-left: 20px ; margin-top: 30px ; font-size: 13px ; color: gray" >
				<i id="s_etc_btn" class="fa fa-phone" style="font-size:20px ; color: gray ;"></i>&nbsp;&nbsp;&nbsp;&nbsp;010-1231-5252</div>
				<div style="float: left ; width: 100%"></div>
				<div style="float: left ; margin-left: 20px ; margin-top: 30px ; font-size: 13px ; color: gray" >
				<i id="s_etc_btn" class="fa fa-envelope-o" style="font-size:20px ; color: gray ;"></i>&nbsp;&nbsp;&nbsp;&nbsp;hong@naver.com </div>
				<div style="float: left ; width: 100%"></div>
				<div style="float: left ; margin-left: 20px ; margin-top: 30px ; font-size: 13px ; color: gray" >투자성향 : 공격적 </div>
				<button id="s_btn_pwchange" class="s3_button" style="float: right ; margin-top:60px ; margin-right: 20px ; width : 120px ; height : 20px">개인정보 변경</button>
			</div>
			<div style="width: 70% ; height: 550px ; float: left ; margin-top: 50px ; margin-left: -2px ; background-color: white ; border: 2px solid #F5F5F5">
				<div style="width: 100% ; height: 30%">
					<div style="margin-top : 7px ; margin-left : 10px ; float: left ; font-size : 15px ; font-weight : bolder ; color : gray">
						<i class="fa fa-bars" style="font-size: 17px ; color : gray"></i>&nbsp;&nbsp;계좌정보
					</div>
					<div style="float: left ; width: 100% ; height: 20px"></div>
					<div style="float: left ; width: 50% ; background-color">
						<div style="float: left ; margin-left: 20px ; width: 40% ; font-size: 13px ; font-weight: bold ; color: gray">
						<i class="fa fa-square-o" style="font-size: 13px ; color : gray"></i>&nbsp;&nbsp;계좌번호</div>
						<div style="float: left ; margin-right: 60px ; width: 20%; font-size: 13px; font-weight: bold ; color: gray">100012001</div>
						<div style="float: left ; width: 100%"></div>
						<div style="margin-top: 20px ; float: left ; margin-left: 20px ; width: 40%; font-size: 13px; font-weight: bold ; color: gray">
						<i class="fa fa-square-o" style="font-size: 13px ; color : gray"></i>&nbsp;&nbsp;신규개설일자</div>
						<div style="margin-top: 20px ; float: left ; margin-right: 60px ; width: 20%; font-size: 13px; font-weight: bold ; color: gray">2019.05.22</div>
						<div style="float: left ; width: 100%"></div>
						<div style="margin-top: 20px ; float: left ; margin-left: 20px ; width: 40%; font-size: 13px; font-weight: bold ; color: gray">
						<i class="fa fa-square-o" style="font-size: 13px ; color : gray"></i>&nbsp;&nbsp;최종거래일자</div>
						<div style="margin-top: 20px ; float: left ; margin-right: 60px ; width: 20%; font-size: 13px; font-weight: bold ; color: gray">2020.01.22</div>
						<div style="float: left ; width: 100%"></div>						
					</div>
					<div style="float: left ; width: 50%">
						<div style="margin-top: 50px ; float: left ; font-size: 20px ; color: gray">잔액&nbsp;&nbsp;&nbsp;&nbsp;</div>
						<div style="float: left ; font-size: 60px ; color: #2874A6 ">8,900,900</div>
						<div style="margin-top: 50px ;float: left ; font-size: 20px ; color: gray">&nbsp;&nbsp;원</div>
					</div>
				</div>
				<div style="width: 100% ; height: 10%">
					<div style="width: 45% ; margin-top : 20px ; margin-left : 10px ; float: left ; font-size : 15px ; font-weight : bolder ; color : gray">
						<i class="fa fa-bars" style="font-size: 17px ; color : gray"></i>&nbsp;&nbsp;거래내역
					</div>
					<div style="float: left ; margin-top: 3px ; text-align: center ; height : 60px ; width:40% ; line-height : 60px ; font-size: 12px">
			    		<input type="radio" name="join_invest" value="1" required="required" checked="checked" style="display: inline-block ; vertical-align: middle"> 전체&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			    		<input type="radio" name="join_invest" value="2" required="required" style="display: inline-block ; vertical-align: middle"> 지출내역&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			    		<input type="radio" name="join_invest" value="3" required="required" style="display: inline-block ; vertical-align: middle"> 수입내역&nbsp;&nbsp;
					</div>
					<button id="s_btn_selectmmnaeyuk" class="s3_button" style="float: left ; margin-top:18px ; width : 60px ; height : 25px">조&nbsp;&nbsp;회</button>
				
				</div>
				<div style="width: 100% ; height: 60%">
				
				</div>
			</div>
		</div>
		`
	}
}
