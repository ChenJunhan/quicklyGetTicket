var count = 1;
var dateScale = ['18:30', '20:00'];    // 订票日期时间段选择， 18：30 到 20:00 之前
var timer = setInterval(function() {
    
    // '深圳北： IOQ'  普宁: PEQ
    const HTTP = {
        "leftTicketDTO.train_date": "2018-06-12",
        "leftTicketDTO.from_station": $("#fromStation").val(),
        "leftTicketDTO.to_station": $("#toStation").val(),
        purpose_codes: "ADULT"
    }
      function cn() {
          for (var cq = 0; cq < limit_tickets.length; cq++) {
              var cp = limit_tickets[cq];
              if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.fc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.gc) && cp.save_status != "" && (cp.id_type == ticket_submit_order.passenger_card_type.passport || cp.id_type == ticket_submit_order.passenger_card_type.work || cp.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
                  return true
              } else {
                  if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.wc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.dc) && (cp.id_type == ticket_submit_order.passenger_card_type.passport || cp.id_type == ticket_submit_order.passenger_card_type.work || cp.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
                      return true
                  }
              }
          }
          return false
      }
    
      function aD(cm) {
          var cp = ""
            , co = "";
          var cr = cm.replace(/-/g, "");
          if (cr.substring(4, 5) == "0") {
              cp = cr.substring(5, 6) + "月"
          } else {
              cp = cr.substring(4, 6) + "月"
          }
          if (cr.substring(6, 7) == "0") {
              co = cr.substring(7, 8) + "日"
          } else {
              co = cr.substring(6, 8) + "日"
          }
          var cn = new Date(Date.parse(cm.replace(/-/g, "/")));
          var cq = "日一二三四五六";
          return cp.concat(co).concat("&nbsp;&nbsp;").concat("周").concat(cq.charAt(cn.getDay()))
      }
    
      function bV(cm) {
          if (cm && cm.length > 0) {
              if (DW_TRAINS && DW_TRAINS.length) {
                  for (var cp = 0, cr = cm.length; cp < cr; cp++) {
                      var cq = cm[cp].queryLeftNewDTO.station_train_code;
                      for (var cn = 0, co = DW_TRAINS.length; cn < co; cn++) {
                          if (cq == DW_TRAINS[cn]) {
                              return true
                          }
                      }
                  }
              }
          }
          return false
      }
      
      $.ajax({
        type: "get",
        isTakeParam: false,
        beforeSend: function(co) {
            co.setRequestHeader("If-Modified-Since", "0");
            co.setRequestHeader("Cache-Control", "no-cache")
        },
        url: ctx + CLeftTicketUrl,
        data: HTTP,
        timeout: 10000,
        error: function(co, cq, cp) {
            if ("timeout" == cq || "No Transport" == cq || "abort" == cq) {
                if ($("#auto_query").is(":checked")) {
                    aj(cm)
                }
            }
        },
        success: function(cq) {
            if (cq.status) {
                if (cq.data == null || cq.data.length == 0) {
                    $("#sear-sel").hide();
                    $("#sear-result").hide();
                    $("#t-list").hide();
                    $("#no_filter_ticket_fromstation").html($("#fromStationText").val());
                    $("#no_filter_ticket_tostation").html($("#toStationText").val());
                    $("#no_filter_ticket_2").show();
                    $(".content").css("min-height", "344px");
                    $("#yxtraindiv").hide();
                    trainListForIE = [];
                    return
                }
                if (cq.data.flag == 1) {
                    function b2(cp, cr) {
                        var co = [];
                        for (var cn = 0; cn < cp.length; cn++) {
                            var cs = [];
                            var cm = cp[cn].split("|");
                            cs.secretStr = cm[0];
                            cs.buttonTextInfo = cm[1];
                            var cq = [];
                            cq.train_no = cm[2];
                            cq.station_train_code = cm[3];
                            cq.start_station_telecode = cm[4];
                            cq.end_station_telecode = cm[5];
                            cq.from_station_telecode = cm[6];
                            cq.to_station_telecode = cm[7];
                            cq.start_time = cm[8];
                            cq.arrive_time = cm[9];
                            cq.lishi = cm[10];
                            cq.canWebBuy = cm[11];
                            cq.yp_info = cm[12];
                            cq.start_train_date = cm[13];
                            cq.train_seat_feature = cm[14];
                            cq.location_code = cm[15];
                            cq.from_station_no = cm[16];
                            cq.to_station_no = cm[17];
                            cq.is_support_card = cm[18];
                            cq.controlled_train_flag = cm[19];
                            cq.gg_num = cm[20] ? cm[20] : "--";
                            cq.gr_num = cm[21] ? cm[21] : "--";
                            cq.qt_num = cm[22] ? cm[22] : "--";
                            cq.rw_num = cm[23] ? cm[23] : "--";
                            cq.rz_num = cm[24] ? cm[24] : "--";
                            cq.tz_num = cm[25] ? cm[25] : "--";
                            cq.wz_num = cm[26] ? cm[26] : "--";
                            cq.yb_num = cm[27] ? cm[27] : "--";
                            cq.yw_num = cm[28] ? cm[28] : "--";
                            cq.yz_num = cm[29] ? cm[29] : "--";
                            cq.ze_num = cm[30] ? cm[30] : "--";
                            cq.zy_num = cm[31] ? cm[31] : "--";
                            cq.swz_num = cm[32] ? cm[32] : "--";
                            cq.srrb_num = cm[33] ? cm[33] : "--";
                            cq.yp_ex = cm[34];
                            cq.seat_types = cm[35];
                            cq.from_station_name = cr[cm[6]];
                            cq.to_station_name = cr[cm[7]];
                            cs.queryLeftNewDTO = cq;
                            co.push(cs)
                        }
                        return co
                    }
                    cq.data = b2(cq.data.result, cq.data.map)
                }
                trainListForIE = [];
                for (var cr = 0; cr < cq.data.length; cr++) {
                    trainListForIE.push(cq.data[cr].queryLeftNewDTO.station_train_code + "(" + cq.data[cr].queryLeftNewDTO.start_time + "--" + cq.data[cr].queryLeftNewDTO.arrive_time + ")")
                }
                if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
                    var cx = [];
                    for (var cr = 0, cy = cq.data.length; cr < cy; cr++) {
                        var cp = cq.data[cr].queryLeftNewDTO;
                        var cu = cp.station_train_code;
                        cu = cu.substring(0, 1);
                        if ("G" == cu || "D" == cu) {
                            cx.push(cq.data[cr])
                        }
                    }
                    cq.data = cx
                }
                if ($("#DW_SHOW_STR")[0]) {
                    $("#DW_SHOW_STR").remove()
                }
                if ($("#hainan_limit_msg")[0]) {
                    $("#hainan_limit_msg").remove()
                }
                $("#sear-sel").show();
                $("#sear-result").show();
                $("#t-list").show();
                $("#no_filter_ticket_2").hide();
                $("#no_filter_ticket").hide();
                var co = "";
                var ct = "";
                if (train_tour_flag != null && train_tour_flag == "fc") {
                    var cw = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aD($("#back_train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cq.data.length).concat("</strong>个车次");
                    if (bV(cq.data)) {
                        co = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
                    } else {
                        if (hainan_limit_msg && ae(cm, cq.data)) {
                            ct = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                        }
                    }
                    if ($("#auto_query").is(":checked")) {
                        var cv = "";
                        for (var cs = 0; cs < 25; cs++) {
                            cv = cv + "&nbsp;"
                        }
                        cw = cw.concat(cv + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                    }
                    $("#sear-result>p").html(cw);
                    if ($("#auto_query").is(":checked")) {
                        $("#filterTic").bind("click", bf)
                    }
                } else {
                    var cw = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aD($("#train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cq.data.length).concat("</strong>个车次");
                    if (bV(cq.data)) {
                        co = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
                    } else {
                        if (hainan_limit_msg && ae(cm, cq.data)) {
                            ct = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                        }
                    }
                    if ($("#auto_query").is(":checked")) {
                        var cv = "";
                        for (var cs = 0; cs < 25; cs++) {
                            cv = cv + "&nbsp;"
                        }
                        cw = cw.concat(cv + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                    }
                    $("#sear-result>p").html(cw);
                    if ($("#auto_query").is(":checked")) {
                        $("#filterTic").bind("click", bf)
                    }
                }
                if (!$("#DW_SHOW_STR")[0]) {
                    $("#sear-result>p").after(co)
                }
                if (ct) {
                    $("#sear-result>p").after(ct)
                }
                if (dwTranTimeStr) {
                    clearInterval(dwTranTimeStr)
                }
                if ($("#DW_SHOW_STR")[0]) {
                    dwTranTimeStr = window.setInterval(function() {
                        if ($("#DW_SHOW_STR").attr("data") == "1") {
                            $("#DW_SHOW_STR").attr("data", "2").html("夜行两千公里 最低不足千元")
                        } else {
                            $("#DW_SHOW_STR").attr("data", "1").html("高铁动卧 夕发朝至 风雨无阻 省时省钱")
                        }
                    }, 1300)
                }
                if ($("#hainan_limit_msg")[0]) {
                    hainan_tip = null;
                    hainan_tip = new Marquee({
                        ID: "hainan_limit_msg",
                        Direction: "left",
                        Step: 1,
                        Width: 0,
                        Height: 0,
                        Timer: 30,
                        DelayTime: 0,
                        WaitTime: 0,
                        ScrollStep: 0
                    })
                }
                a8 = cq.data;
                console.log('a8', a8,if_show_pass_code_login)
                console.log(`当前执行了${count}次`)
                count++;
                a8.some(function(e) {
                    // console.log(e.secretStr,
                    //             e.queryLeftNewDTO.start_time,
                    //             e.queryLeftNewDTO.train_no,
                    //             e.queryLeftNewDTO.from_station_telecode,
                    //             e.queryLeftNewDTO.to_station_telecode
                    //         );
                    //         console.log(e.queryLeftNewDTO.to_station_name);
                    // wz: 无座
                    // ze： 二等
                    // zy: 一等

                    if((e.queryLeftNewDTO.canWebBuy == 'Y' && e.queryLeftNewDTO.to_station_name == '普宁' && e.queryLeftNewDTO.ze_num != '无' && e.queryLeftNewDTO.ze_num != '1') 
                    || (e.queryLeftNewDTO.canWebBuy == 'Y' && e.queryLeftNewDTO.to_station_name == '普宁' && e.queryLeftNewDTO.wz_num != '无' && e.queryLeftNewDTO.wz_num != '1')
                    || (e.queryLeftNewDTO.ccanWebBuy == 'Y' && e.queryLeftNewDTO.to_station_name == '普宁' && e.queryLeftNewDTO.wy_num != '无' && e.queryLeftNewDTO.wy_num != '1')
                    || (e.queryLeftNewDTO.ccanWebBuy == 'Y' && e.queryLeftNewDTO.to_station_name == '普宁' && e.queryLeftNewDTO.wy_num != '无' && e.queryLeftNewDTO.wy_num != '1')
                ) {
                    // 不设置则全天都可预订
                    if (!dateScale.length) {
                        return reserve(e);
                    }else {
                        var startTime = new Date(new Date().toDateString() + ' ' + dateScale[0]),
                            endTime = new Date(new Date().toDateString() + ' ' + dateScale[1]),
                            transTime = new Date(new Date().toDateString() + ' ' + e.queryLeftNewDTO.start_time);
                        
                        if (startTime < transTime && endTime > transTime) {
                            return reserve(e);
                        }
                    }

                    function reserve(e) {
                        checkG1234(
                            e.secretStr,
                            e.queryLeftNewDTO.start_time,
                            e.queryLeftNewDTO.train_no,
                            e.queryLeftNewDTO.from_station_telecode,
                            e.queryLeftNewDTO.to_station_telecode)
                            clearInterval(timer);
                            var e = document.createEvent("MouseEvents");
                            e.initEvent("click", true, true);
                            document.getElementById("tryPlayer").dispatchEvent(e);
                            return e.queryLeftNewDTO.canWebBuy == 'Y'
                        }
                    }
                })
              
                if (!$("#yxtrain_loading").is(":hidden")) {
                    $.showYxTrainData()
                }
                yxTrainChange = $("#fromStationText").val() + $("#toStationText").val() + $("#train_date").val()
            } else {
                if (cq && cq.c_url) {
                    CLeftTicketUrl = cq.c_url;
                    aj(cm)
                }
            }
        },
        error: function(co) {
            if (co.status == 403) {
                if ($("#query_ticket").html() == "停止查询") {
                    if (queryLeftTicket_times <= queryLeftTicket_count) {
                        $("#query_ticket").trigger("click").trigger("click");
                        queryLeftTicket_times++
                    } else {
                        queryLeftTicket_times = 0
                    }
                }
            }
        }
    });
    }, 3000)
   