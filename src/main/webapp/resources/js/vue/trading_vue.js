"use strict";
var trading_vue = trading_vue || {}
trading_vue = {
	trading_mainbody : x=>{
    return `
    <body style="width: auto; height: auto;">
    <div id="main_div" border="2" bordercolor="black" style="width: 1500px; height: 600px; margin-left: 7%;">
      <div id="d_one" style="width: 975px; height: 300px; overflow: auto; background-color: white; float: left;">
        <table id="tab1" border="1" bordercolor="black" style="width: 975px; height: 300px; table-layout: fixed; background-color: white; text-align: center;" >
          <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
              <td id="btn_mystock" colspan="4">관심</td>
              <td id="btn_lead" colspan="4">업종 / 테마</td>
              <td id="btn_uprank" colspan="4">상승</td>
              <td id="btn_downrank" colspan="4">하락</td>
          </tr>
          <tr id="click_event2" style="width: 100%; height: 30px; background-color: white">
            <td id="btn_lmystock" colspan="2">보유종목</td>
            <td id="btn_attention" colspan="2">관심종목</td>
          </tr>
          <tr id="attention_title" border="1"; bordercolor="black";
              style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
            <td colspan="2">종목명</td>
            <td colspan="2">현재가</td>
            <td colspan="2">전일대비</td>
            <td colspan="2">등락률</td>
            <td colspan="2">시가</td>
            <td colspan="2">고가</td>
            <td colspan="2">저가</td>
            <td colspan="2">매도호가</td>
            <td colspan="2">매수호가</td>
            <td colspan="2">거래량</td>
          </tr>
          <tr id="attention_data" style="width: 100%;">
            <td colspan="2" style="text-align: left;">보유종목명 data</td>
            <td colspan="2" style="text-align: center;">현재가 data</td>
            <td colspan="2" style="text-align: center;">전일대비 data</td>
            <td colspan="2" style="text-align: center;">등락률 data</td>
            <td colspan="2" style="text-align: center;">시가 data</td>
            <td colspan="2" style="text-align: left;">고가 data</td>
            <td colspan="2" style="text-align: left;">저가 data</td>
            <td colspan="2" style="text-align: left;">매도호가 data</td>
            <td colspan="2" style="text-align: left;">매수호가 data</td>
            <td colspan="2" style="text-align: left;">거래량 data</td>
          </tr>
        </table>
      </div>
     <div id="d_two" style="width: 525px; height: 600px; overflow: auto; background-color: white; float: right;">
        <table id="tab2" border="1" bordercolor="black" style="width: 100%; height: 100%; text-align: center;">
        <tr style="background-color: #B5C7EC">
         <!-- 현재가 -->
            <td colspan="2">업종</td>
            <td><input type="text" name="stockcode" value="종목명"></td>
            <td><button id="tab2_search">검색</button></td>
            <td style="background-color: white;">종목코드 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">현재가</td>
            <td colspan="2">현재가 data</td>
            <td style="background-color: #84A3E0">매도호가</td>
            <td>매도호가 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">전일대비</td>
            <td colspan="2">전일대비 data</td>
            <td style="background-color: #84A3E0">매수호가</td>
            <td>매수호가 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">등락률</td>
            <td colspan="2">등락률 data</td>
            <td style="background-color: #84A3E0">전일가</td>
            <td>전일가 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">거래량</td>
            <td colspan="2">거래량 data</td>
            <td style="background-color: #84A3E0">시가</td>
            <td>시가 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">거래대금(백만)</td>
            <td colspan="2">거래대금 data</td>
            <td style="background-color: #84A3E0">고가</td>
            <td>고가 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">액면가</td>
            <td colspan="2">100원</td>
            <td style="background-color: #84A3E0">저가</td>
            <td>저가 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">상한가</td>
            <td colspan="2">상한가 data</td>
            <td style="background-color: #84A3E0">전일상한</td>
            <td>전일상한 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">하한가</td>
            <td colspan="2">하한가 data</td>
            <td style="background-color: #84A3E0">전일하한</td>
            <td>전일하한 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">PER</td>
            <td colspan="2">PER data</td>
            <td style="background-color: #84A3E0">EPS</td>
            <td>EPS data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">52주 최고</td>
            <td colspan="2">52주 최고 data</td>
            <td style="background-color: #84A3E0">52주 최저</td>
            <td>52주 최저 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">시가총액</td>
            <td colspan="2">시가총액 data</td>
            <td style="background-color: #84A3E0">상장주식수</td>
            <td>상장주식수 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">외국인현재</td>
            <td colspan="2">외국인현재 data</td>
            <td style="background-color: #84A3E0">자본금</td>
            <td>자본금 data</td>
          </tr>
      </table>
     </div>
     <div id="d_three" style="width: 975px; height: 300px; overflow: auto; float: left; background-color: white">
        <table id="tab3" border="1" bordercolor="black" style="width: 100%; height: 100%; table-layout: fixed; text-align: center;">
          <tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0; ">
            <td colspan="2">체결시각</td>
            <td colspan="3">체결가</td>
            <td colspan="3">전일비</td>
            <td colspan="3">매도</td>
            <td colspan="3">매수</td>
            <td colspan="3">거래량</td>
            <td colspan="3">변동량</td>
          </tr>
          <tr>
            <td colspan="2">체결시각 data</td>
            <td colspan="3">체결가 data</td>
            <td colspan="3">전일비 data</td>
            <td colspan="3">매도 data</td>
            <td colspan="3">매수 data</td>
            <td colspan="3">거래량 data</td>
            <td colspan="3">변동량 data</td>
          </tr>
      </table>
     </div>
   </div>
</body>`
  },
  trading_mystock : ()=>{
    return `
               <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                 <td id="btn_mystock" colspan="4">관심</td>
                  <td id="btn_lead" colspan="4">업종 / 테마</td>
                  <td id="btn_uprank" colspan="4">상승</td>
                  <td id="btn_downrank" colspan="4">하락</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <!-- 보유종목 일떄 -->
                <td id="btn_lmystock" colspan="2">보유종목</td>
                <td id="btn_attention" colspan="2">관심종목</td>
               </tr>
               <tr id="attention_title" border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">종목명</td>
                <td colspan="2">현재가</td>
                <td colspan="2">전일대비</td>
                <td colspan="2">등락률</td>
                <td colspan="2">시가</td>
                <td colspan="2">고가</td>
                <td colspan="2">저가</td>
                <td colspan="2">매도호가</td>
                <td colspan="2">매수호가</td>
                <td colspan="2">거래량</td>
            </tr>
               <tr id="attention_data" style="width: 100%;">
                <td colspan="2" style="text-align: left;">보유종목명 data</td>
                <td colspan="2" style="text-align: center;">현재가 data</td>
                <td colspan="2" style="text-align: center;">전일대비 data</td>
                <td colspan="2" style="text-align: center;">등락률 data</td>
                <td colspan="2" style="text-align: center;">시가 data</td>
                <td colspan="2" style="text-align: left;">고가 data</td>
                <td colspan="2" style="text-align: left;">저가 data</td>
                <td colspan="2" style="text-align: left;">매도호가 data</td>
                <td colspan="2" style="text-align: left;">매수호가 data</td>
                <td colspan="2" style="text-align: left;">거래량 data</td>
          </tr>
             `
  },
  trading_attention : ()=>{
    return `
               <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                <td id="btn_mystock" colspan="4">관심</td>
                <td id="btn_lead" colspan="4">업종 / 테마</td>
                <td id="btn_uprank" colspan="4">상승</td>
                <td id="btn_downrank" colspan="4">하락</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <!-- 관심종목 일떄 -->
                <td id="btn_lmystock" colspan="2">보유종목</td>
                <td id="btn_attention" colspan="2">관심종목</td>
               </tr>
               <tr id="attention_title" border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">종목명</td>
                <td colspan="2">현재가</td>
                <td colspan="2">전일대비</td>
                <td colspan="2">등락률</td>
                <td colspan="2">시가</td>
                <td colspan="2">고가</td>
                <td colspan="2">저가</td>
                <td colspan="2">매도호가</td>
                <td colspan="2">매수호가</td>
                <td colspan="2">거래량</td>
            </tr>
               <tr id="attention_data" style="width: 100%;">
                <td colspan="2" style="text-align: left;">관심종목명 data</td>
                <td colspan="2" style="text-align: center;">현재가 data</td>
                <td colspan="2" style="text-align: center;">전일대비 data</td>
                <td colspan="2" style="text-align: center;">등락률 data</td>
                <td colspan="2" style="text-align: center;">시가 data</td>
                <td colspan="2" style="text-align: left;">고가 data</td>
                <td colspan="2" style="text-align: left;">저가 data</td>
                <td colspan="2" style="text-align: left;">매도호가 data</td>
                <td colspan="2" style="text-align: left;">매수호가 data</td>
                <td colspan="2" style="text-align: left;">거래량 data</td>
          </tr>`
  },
  trading_lead : ()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                <td id="btn_mystock" colspan="4">관심</td>
                <td id="btn_lead" colspan="4">업종 / 테마</td>
                <td id="btn_uprank" colspan="4">상승</td>
                <td id="btn_downrank" colspan="4">하락</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td id="lead_industry" colspan="2">업종</td>
                <td id="lead_theme" colspan="2">테마</td>
               </tr>
               <tr border="1"; bordercolor="black"; style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="4" rowspan="2">업종명</td>
                <td colspan="4" rowspan="2">전일대비</td>
                <td colspan="12" style="background-color:skyblue">전일대비 등락현황</td>
                </tr>
               <tr border="1"; bordercolor="black"; style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                    <td colspan="3">전체</td>
                    <td colspan="3">상승</td>
                    <td colspan="3">보합</td>
                    <td colspan="3">하락</td>
                  </tr>
                  <tr id="attention_data" style="width: 100%;">
                    <td colspan="4" style="text-align: center;">업종명 data</td>
                    <td colspan="4" style="text-align: center;">전일대비 data</td>
                    <td colspan="3" style="text-align: center;">전체 data</td>
                    <td colspan="3" style="text-align: center;">상승 data</td>
                    <td colspan="3" style="text-align: center;">보합 data</td>
                    <td colspan="3" style="text-align: center;">하락 data</td>
                </tr>`
  },
  trading_lead_theme : ()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                <td id="btn_mystock" colspan="4">관심</td>
                <td id="btn_lead" colspan="4">업종 / 테마</td>
                <td id="btn_uprank" colspan="4">상승</td>
                <td id="btn_downrank" colspan="4">하락</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td id="lead_industry" colspan="2">업종</td>
                <td id="lead_theme" colspan="2">테마</td>
               </tr>
               <tr border="1"; bordercolor="black"; style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="3" rowspan="2">테마명</td>
                <td colspan="3" rowspan="2">전일대비</td>
                <td colspan="4" rowspan="2">최근3일 등락률(평균)</td>
                <td colspan="6" style="background-color:skyblue">전일대비 등락현황</td>
                <td colspan="4" rowspan="2">주도주</td>

                
                </tr>
               <tr border="1"; bordercolor="black"; style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                    <td colspan="2">상승</td>
                    <td colspan="2">보합</td>
                    <td colspan="2">하락</td>
                  </tr>
                  <tr id="attention_data" style="width: 100%;">
                    <td colspan="3" style="text-align: center;">테마명 data</td>
                    <td colspan="3" style="text-align: center;">전일대비 datas</td>
                    <td colspan="4" style="text-align: center;">최근3일 등락률(평균) data</td>
                    <td colspan="2" style="text-align: center;">상승 data</td>
                    <td colspan="2" style="text-align: center;">보합 data</td>
                    <td colspan="2" style="text-align: center;">하락 data</td>
                    <td colspan="2" style="text-align: center;">주도주1 data</td>
                    <td colspan="2" style="text-align: center;">주도주2 data</td>
                </tr>`
  },
  trading_up_rank: ()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                <td id="btn_mystock" colspan="4">관심</td>
                <td id="btn_lead" colspan="4">업종 / 테마</td>
                <td id="btn_uprank" colspan="4">상승</td>
                <td id="btn_downrank" colspan="4">하락</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td id="uprank_kospi" colspan="2">KOSPI</td>
                <td id="uprank_kosdak" colspan="2">KOSDAK</td>
               </tr>
               <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">종목명</td>
                <td colspan="2">현재가</td>
                <td colspan="2">전일대비</td>
                <td colspan="2">등락률</td>
                <td colspan="2">거래량</td>
                <td colspan="2">시가</td>
                <td colspan="2">고가</td>
                <td colspan="2">저가</td>
                <td colspan="2">매수호가</td>
                <td colspan="2">매도호가</td>
            </tr>
               <tr id="uprank_data" style="width: 100%;">
                <td colspan="2" style="text-align: left;">KOSPI 상승 종목명 data</td>
                <td colspan="2" style="text-align: center;">현재가 data</td>
                <td colspan="2" style="text-align: center;">전일대비 data</td>
                <td colspan="2" style="text-align: center;">등락률 data</td>
                <td colspan="2" style="text-align: center;">거래량 data</td>
                <td colspan="2" style="text-align: center;">시가 data</td>
                <td colspan="2" style="text-align: center;">고가 data</td>
                <td colspan="2" style="text-align: center;">저가 data</td>
                <td colspan="2" style="text-align: center;">매수호가 data</td>
                <td colspan="2" style="text-align: center;">매도호가 data</td>
          </tr>`
  },trading_up_rank_kosdak : ()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                <td id="btn_mystock" colspan="4">관심</td>
                <td id="btn_lead" colspan="4">업종 / 테마</td>
                <td id="btn_uprank" colspan="4">상승</td>
                <td id="btn_downrank" colspan="4">하락</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td id="uprank_kospi" colspan="2">KOSPI</td>
                <td id="uprank_kosdak" colspan="2">KOSDAK</td>
               </tr>
               <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">종목명</td>
                <td colspan="2">현재가</td>
                <td colspan="2">전일대비</td>
                <td colspan="2">등락률</td>
                <td colspan="2">거래량</td>
                <td colspan="2">시가</td>
                <td colspan="2">고가</td>
                <td colspan="2">저가</td>
                <td colspan="2">매수호가</td>
                <td colspan="2">매도호가</td>
            </tr>
               <tr id="uprank_data" style="width: 100%;">
                <td colspan="2" style="text-align: left;">KOSDAK 상승 종목명 data</td>
                <td colspan="2" style="text-align: center;">현재가 data</td>
                <td colspan="2" style="text-align: center;">전일대비 data</td>
                <td colspan="2" style="text-align: center;">등락률 data</td>
                <td colspan="2" style="text-align: center;">거래량 data</td>
                <td colspan="2" style="text-align: center;">시가 data</td>
                <td colspan="2" style="text-align: center;">고가 data</td>
                <td colspan="2" style="text-align: center;">저가 data</td>
                <td colspan="2" style="text-align: center;">매수호가 data</td>
                <td colspan="2" style="text-align: center;">매도호가 data</td>
          </tr>`
  },trading_down_rank: ()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                <td id="btn_mystock" colspan="4">관심</td>
                <td id="btn_lead" colspan="4">업종 / 테마</td>
                <td id="btn_uprank" colspan="4">상승</td>
                <td id="btn_downrank" colspan="4">하락</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td id="downrank_kospi" colspan="2">KOSPI</td>
                <td id="downrank_kosdak" colspan="2">KOSDAK</td>
               </tr>
               <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">종목명</td>
                <td colspan="2">현재가</td>
                <td colspan="2">전일대비</td>
                <td colspan="2">등락률</td>
                <td colspan="2">거래량</td>
                <td colspan="2">시가</td>
                <td colspan="2">고가</td>
                <td colspan="2">저가</td>
                <td colspan="2">매수호가</td>
                <td colspan="2">매도호가</td>
            </tr>
               <tr id="uprank_data" style="width: 100%;">
                <td colspan="2" style="text-align: left;">KOSPI 하락 종목명 data</td>
                <td colspan="2" style="text-align: center;">현재가 data</td>
                <td colspan="2" style="text-align: center;">전일대비 data</td>
                <td colspan="2" style="text-align: center;">등락률 data</td>
                <td colspan="2" style="text-align: center;">거래량 data</td>
                <td colspan="2" style="text-align: center;">시가 data</td>
                <td colspan="2" style="text-align: center;">고가 data</td>
                <td colspan="2" style="text-align: center;">저가 data</td>
                <td colspan="2" style="text-align: center;">매수호가 data</td>
                <td colspan="2" style="text-align: center;">매도호가 data</td>
          </tr>`
  },trading_down_rank_kosdak : ()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                <td id="btn_mystock" colspan="4">관심</td>
                <td id="btn_lead" colspan="4">업종 / 테마</td>
                <td id="btn_uprank" colspan="4">상승</td>
                <td id="btn_downrank" colspan="4">하락</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td id="downrank_kospi" colspan="2">KOSPI</td>
                <td id="downrank_kosdak" colspan="2">KOSDAK</td>
               </tr>
               <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">종목명</td>
                <td colspan="2">현재가</td>
                <td colspan="2">전일대비</td>
                <td colspan="2">등락률</td>
                <td colspan="2">거래량</td>
                <td colspan="2">시가</td>
                <td colspan="2">고가</td>
                <td colspan="2">저가</td>
                <td colspan="2">매수호가</td>
                <td colspan="2">매도호가</td>
            </tr>
               <tr id="uprank_data" style="width: 100%;">
                <td colspan="2" style="text-align: left;">KOSDAK 하락 종목명 data</td>
                <td colspan="2" style="text-align: center;">현재가 data</td>
                <td colspan="2" style="text-align: center;">전일대비 data</td>
                <td colspan="2" style="text-align: center;">등락률 data</td>
                <td colspan="2" style="text-align: center;">거래량 data</td>
                <td colspan="2" style="text-align: center;">시가 data</td>
                <td colspan="2" style="text-align: center;">고가 data</td>
                <td colspan="2" style="text-align: center;">저가 data</td>
                <td colspan="2" style="text-align: center;">매수호가 data</td>
                <td colspan="2" style="text-align: center;">매도호가 data</td>
          </tr>`
  },
  trading_time:()=>{
    return `  <tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0; ">
            <td colspan="2">체결시각</td>
            <td colspan="3">체결가</td>
            <td colspan="3">전일비</td>
            <td colspan="3">매도</td>
            <td colspan="3">매수</td>
            <td colspan="3">거래량</td>
            <td colspan="3">변동량</td>
          </tr>
          <tr>
            <td colspan="2">체결시각 data</td>
            <td colspan="3">체결가 data</td>
            <td colspan="3">전일비 data</td>
            <td colspan="3">매도 data</td>
            <td colspan="3">매수 data</td>
            <td colspan="3">거래량 data</td>
            <td colspan="3">변동량 data</td>
          </tr>`
  },
  trading_day:()=>{
    return `  <tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0; ">
            <td colspan="2">날짜</td>
            <td colspan="3">종가</td>
            <td colspan="3">전일비</td>
            <td colspan="3">시가</td>
            <td colspan="3">고가</td>
            <td colspan="3">저가</td>
            <td colspan="3">거래량</td>
          </tr>
          <tr>
            <td colspan="2">날짜 data</td>
            <td colspan="3">종가 data</td>
            <td colspan="3">전일비 data</td>
            <td colspan="3">시가 data</td>
            <td colspan="3">고가 data</td>
            <td colspan="3">저가 data</td>
            <td colspan="3">거래량 data</td>
          </tr>`
  },
  trading_buy:()=>{
    return `  <tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="2">계좌번호 data</td>
                <td colspan="2">이름</td>
                <td colspan="2">비밀번호</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="12" style="text-align: left;">매수희망가</td>
            <td colspan="3" style="background-color: pink">종목</td>
            <td colspan="2" style="background-color: pink;">주식코드</td>
            <td colspan="3" style="background-color: pink;">종목</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="4" style="background-color: #84A3E0;">매수희망가</td>
            <td colspan="8">매수희망가 data</td>
            <td colspan="3" style="background-color: pink">구분</td>
            <td colspan="5" style="background-color: pink">
              <input type="radio" name="sprice" value="지정가">지정가
              <input type="radio" name="mprice" value="시장가">시장가
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="12" style="text-align: left;">매수가능금액 및 수량</td>
            <td colspan="3" style="background-color: pink">조건</td>
            <td colspan="5" style="background-color: pink">
              <input type="radio" name="noop" value="noop">없음
              <input type="radio" name="ioc" value="IOC">IOC
              <input type="radio" name="fok" value="FOK">FOK
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">최대매수금액</td>
            <td colspan="3">최대매수금액data</td>
            <td colspan="3" style="background-color: #84A3E0;">최대매수수량</td>
            <td colspan="3">최대매수수량data</td>
            <td colspan="3" style="background-color: pink">수량</td>
            <td colspan="5" style="background-color: pink"><input type="text">주</td>
            
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">미수없는금액</td>
            <td colspan="3">미수없는금액data</td>
            <td colspan="3" style="background-color: #84A3E0;">미수없는수량</td>
            <td colspan="3">미수없는수량data</td>
            <td colspan="3" style="background-color: pink">단가</td>
            <td colspan="5" style="background-color: pink"><input type="text">원</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="12" style="text-align: left;">매수 가능 금액 내용</td>
            <td colspan="3" style="background-color: pink">번호</td>
            <td colspan="5" style="background-color: pink"><input type="text">원</td>
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">총주문자산금액</td>
            <td colspan="3">총주문자산금액data</td>
            <td rowspan="2" colspan="3" style="background-color: #84A3E0;">현금주문자산금액</td>
            <td rowspan="2" colspan="3">현금주문자산금액data</td>
            <td colspan="3" style="background-color: pink">금액</td>
            <td colspan="5" style="background-color: pink"><input type="text">적용</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">가능수량계산단가</td>
            <td colspan="3">가능수량계산단가data</td>
            <td colspan="3" style="background-color: violet"><a id="btb_buycancle" href="#">전량취소</a></td>
            <td colspan="5" style="background-color: red"><a id="btn_buying" href="#">매수</a></td>
          </tr>`
  },
  trading_sell:()=>{
    return `<tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="2">계좌번호 data</td>
                <td colspan="2">이름</td>
                <td colspan="2">비밀번호</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">총평가금액</td>
            <td colspan="3">총평가금액data</td>
            <td colspan="3" style="background-color: #84A3E0;">총평가손익</td>
            <td colspan="3">총평가손익data</td>
            <td colspan="3" style="background-color: skyblue">종목</td>
            <td colspan="2" style="background-color: skyblue;">주식코드</td>
            <td colspan="3" style="background-color: skyblue;">종목</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">순자산총액</td>
            <td colspan="3">순자산총액data</td>
            <td colspan="3" style="background-color: #84A3E0;">총수익률</td>
            <td colspan="3">총수익률data</td>
            <td colspan="3" style="background-color: skyblue">구분</td>
            <td colspan="5" style="background-color: skyblue">
              <input type="radio" name="sprice" value="지정가">지정가
              <input type="radio" name="mprice" value="시장가">시장가
            </td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="2">종목명</td>
            <td colspan="2">보유량</td>
            <td colspan="2">주문가능</td>
            <td colspan="2">평균단가</td>
            <td colspan="2">평가손익</td>
            <td colspan="2">수익률</td>
            <td colspan="3" style="background-color: skyblue">조건</td>
            <td colspan="5" style="background-color: skyblue">
              <input type="radio" name="noop" value="noop">없음
              <input type="radio" name="ioc" value="IOC">IOC
              <input type="radio" name="fok" value="FOK">FOK
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2" rowspan="5">종목명</td>
            <td colspan="2" rowspan="5">보유량 data</td>
            <td colspan="2" rowspan="5">주문가능 data</td>
            <td colspan="2" rowspan="5">평균단가 data</td>
            <td colspan="2" rowspan="5">평가손익 data</td>
            <td colspan="2" rowspan="5">수익률 data</td>
            <td colspan="3" style="background-color: skyblue">수량</td>
            <td colspan="5" style="background-color: skyblue"><input type="text">주</td>
            
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: skyblue">단가</td>
            <td colspan="5" style="background-color: skyblue"><input type="text">원</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: skyblue">번호</td>
            <td colspan="5" style="background-color: skyblue"><input type="text">원</td>
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: skyblue">금액</td>
            <td colspan="5" style="background-color: skyblue"><input type="text">적용</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: violet"><a id="btb_sellcancle" href="#">전량취소</a></td>
            <td colspan="5" style="background-color: #2E9AFE;"><a id="btn_sell" href="#">매도</a></td>
          </tr>`
  },
  trading_correction:()=>{
    return `<tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="2">계좌번호 data</td>
                <td colspan="2">이름</td>
                <td colspan="2">비밀번호</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="2">주문번호</td>
            <td colspan="2">종목명</td>
            <td colspan="2">매매구분</td>
            <td colspan="2">주문량</td>
            <td colspan="2">주문가</td>
            <td colspan="2">미체결</td>
            <td colspan="3" style="background-color: #D8F6CE;">종목</td>
            <td colspan="2" style="background-color: #D8F6CE;">주식코드</td>
            <td colspan="3" style="background-color: #D8F6CE;">종목</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2" rowspan="5">주문번호 data</td>
            <td colspan="2" rowspan="5">종목명 data</td>
            <td colspan="2" rowspan="5">매매구분 data</td>
            <td colspan="2" rowspan="5">주문량 data</td>
            <td colspan="2" rowspan="5">주문가 data</td>
            <td colspan="2" rowspan="5">미체결 data</td>
            <td colspan="3" style="background-color: #D8F6CE;">원번</td>
            <td colspan="5" style="background-color: #D8F6CE;"><input type="text"></td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #D8F6CE;">수량</td>
            <td colspan="5" style="background-color: #D8F6CE;"><input type="text">
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #D8F6CE;">단가</td>
            <td colspan="5" style="background-color: #D8F6CE;"><input type="text">원</td></td>
            
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #D8F6CE;">번호</td>
            <td colspan="5" style="background-color: #D8F6CE;"><input type="text"></td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="8" style="background-color: #04B486; text-align: center;"><a id="btn_correction" href="#">정정</a></td>
          </tr>`
  },
  trading_cancle:()=>{
    return `<tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="2">계좌번호 data</td>
                <td colspan="2">이름</td>
                <td colspan="2">비밀번호</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="2">주문번호</td>
            <td colspan="2">종목명</td>
            <td colspan="2">매매구분</td>
            <td colspan="2">주문량</td>
            <td colspan="2">주문가</td>
            <td colspan="2">미체결</td>
            <td colspan="3" style="background-color: #ECCEF5;">종목</td>
            <td colspan="2" style="background-color: #ECCEF5;">주식코드</td>
            <td colspan="3" style="background-color: #ECCEF5;">종목</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2" rowspan="4">주문번호 data</td>
            <td colspan="2" rowspan="4">종목명 data</td>
            <td colspan="2" rowspan="4">매매구분 data</td>
            <td colspan="2" rowspan="4">주문량 data</td>
            <td colspan="2" rowspan="4">주문가 data</td>
            <td colspan="2" rowspan="4">미체결 data</td>
            <td colspan="3" style="background-color: #ECCEF5;">원번</td>
            <td colspan="5" style="background-color: #ECCEF5;"><input type="text"></td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #ECCEF5;">수량</td>
            <td colspan="5" style="background-color: #ECCEF5;"><input type="text">
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #ECCEF5;">번호</td>
            <td colspan="5" style="background-color: #ECCEF5;"><input type="text"></td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="8" style="background-color: #04B486;"><a id="btn_correction" href="#">취소</a></td>
          </tr>`
  }

};