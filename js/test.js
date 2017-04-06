<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript"> 
$(function(){
    $.ajax(  
        {
            type:'get',  
            url : 'http://bbs.zhinengshe.com/getuser.php',  
            dataType : 'jsonp',  
            jsonp:"authback",  
            success  : function(data) {
                var uid = data.uid;
                var username = data.username;
                
                if(uid =="nologin"){
                    //loginpic();
                    set_auth('nologin','nologin');
                    //window.location.href="login.php"; 
                }else{
                    set_auth(uid,username);
                }
            },  
            error : function() {
                set_auth('nologin','nologin');
            }  
        }  
    );  
})

function set_auth(uid,username){
    $.ajax(  
        {  
            type:'post',  
            url : '/wap/libs/global/auth.php',
            data: "uid="+uid+"&username="+username,
            success  : function(data) {
            },  
            error : function() { 
            }  
        }  
    );
}
function loginpic(){
    $('#loginimg').fadeToggle(500);
}
</script> 
<!DOCTYPE html>
<html>
<head>
    <title> </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="shortcut icon" href="/wap/favicon.ico">
    <!-- <link rel="stylesheet" href="http://fonts.useso.com/css?family=Open+Sans:300,400,700"> -->
    <link rel="stylesheet" href="css/themes/default/jquery.mobile-1.4.5.min.css">
    <link rel="stylesheet" href="_assets/css/jqm-demos.css">
    <link href="css/owl.carousel.css" rel="stylesheet">
    <link href="css/owl.theme.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css" type="text/css">
    <script src="js/jquery.min.js"></script>
    <script src="_assets/js/index.js"></script>
    <script src="js/jquery.mobile-1.4.5.min.js"></script>
    <script type='text/javascript' src='js/jquery.easing.1.3.js'></script>
    <script src="js/jquery.message.js" type="text/javascript"></script>
    <script src="js/jquery.form.js" type="text/javascript"></script>
    <script src="js/owl.carousel.js"></script>
</head>
    <body>
            <!-- Header -->
            <div data-role="header" class="jqm-header">
                <h2><img src="images/logo.png" alt="jQuery Mobile"></h2>
                <a href="http://bbs.zhinengshe.com/home.php?mod=space&do=profile" class="ui-btn ui-btn-icon-notext"><img src="images/icon_02.png"></a>
                <a href="#" class="jqm-navmenu-link  ui-btn ui-btn-icon-notext ui-corner-all"><img src="images/icon_01.png"></a>
            </div>
            <!-- Header  End-->

            <!-- Nav-->
            <div data-role="navbar" class="ui-navbar" role="navigation">
                <ul class="ui-grid-b">
                    <li class="ui-block-b">
                        <a href="list.php" class="ui-link ui-btn" data-ajax="false">课程</a>
                    </li>
                    <li class="ui-block-c">
                        <a href="teacher.php" class="ui-link ui-btn" data-ajax="false">师资</a>
                    </li>
                    <li class="ui-block-b">
                        <a href="job.php" class="ui-link ui-btn" data-ajax="false">就业</a>
                    </li>
                    <li class="ui-block-c">
                        <a href="case.php" class="ui-link ui-btn" data-ajax="false">案例</a>
                    </li>
                </ul>
            </div>
            <!-- Nav End-->

            

            <!-- 滑图 -->
            <div class="slider" style="width: 100%; position: relative; overflow: hidden; margin: 0px auto; display: block;">
                <ul style="position: absolute; left: -2560px; width: 3200px;">
                                        <li style="float: left; display: inline; ">
                        <a href="active-view.php?id=587c79f034cec420021"><img src="/wap/ufiles/contentpics/587c7a8f17766490150.png" style="width: 100%; height: 100%;"></a>
                    </li>
                                        <li style="float: left; display: inline; ">
                        <a href="active-view.php?id=585cc8e55676b981545"><img src="/wap/ufiles/contentpics/585ccbff89e25156618.png" style="width: 100%; height: 100%;"></a>
                    </li>
                                        <li style="float: left; display: inline; ">
                        <a href="active-view.php?id=5822e8bfc9e81255239"><img src="/wap/ufiles/contentpics/5823e1f3cb669576786.png" style="width: 100%; height: 100%;"></a>
                    </li>
                                        <li style="float: left; display: inline; ">
                        <a href="active-view.php?id=5822d60d76215790673"><img src="/wap/ufiles/contentpics/5823e2bd8be89594104.png" style="width: 100%; height: 100%;"></a>
                    </li>
                                        <li style="float: left; display: inline; ">
                        <a href="active-view.php?id=57e242c79af65766374"><img src="/wap/ufiles/contentpics/57e2479e5525a460460.jpg" style="width: 100%; height: 100%;"></a>
                    </li>
                                    </ul>
                <div class="focus" style="min-height: 20px; position: absolute; bottom: 0px; width: 100%; height: 48px; z-index: 2; background: rgba(0, 0, 0, 0.498039);"></div>
            </div>
            <!-- 滑图  End-->
            <div id="owl-demo" class="owl-carousel" style="background-color: #FFFFFF;">
                            <a href="view.php?id=5812b8af558fb235624">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/58197e4bab3f6729208.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">全栈全科班</div>
                </a>
                            <a href="view.php?id=5812bc92d0d43217631">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/58197b930177f322651.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">全栈开发精英班</div>
                </a>
                            <a href="view.php?id=5812bd4df1023633838">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/58197ebb80e3e705030.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">前端开发全能班</div>
                </a>
                            <a href="view.php?id=5812be69eac17978340">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/58197ed32db7b150060.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">前端开发晋升班</div>
                </a>
                            <a href="view.php?id=5811b587d517d225138">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/58197faf88fe522392.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">HTML5前端</div>
                </a>
                            <a href="view.php?id=58609929683bc6037">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/5860ed31f2979783735.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">Java精讲班</div>
                </a>
                            <a href="view.php?id=586093cd794c0119754">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/5860ef387e190972951.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">大数据精品班</div>
                </a>
                            <a href="view.php?id=5812caef3f208216191">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/58197d8862bb0649114.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">微信开发</div>
                </a>
                            <a href="view.php?id=5812c822dcbe4517569">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/58197d9ef11b577886.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">NodeJS全栈</div>
                </a>
                            <a href="view.php?id=5812c39707a33308958">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/58196243a25ff173967.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">颠覆式前端</div>
                </a>
                            <a href="view.php?id=5812c19fe29cc327056">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/581980b346142260747.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">WebApp HybridApp</div>
                </a>
                            <a href="view.php?id=5811c6436811b246519">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/58197f564dd12201638.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">JavaScript高级</div>
                </a>
                            <a href="view.php?id=5811c1902569469358">
                    <div class="circular-landscape">
                        <img src="/wap/ufiles/contentpics/58197f4907833198314.png" alt="Owl Image"><!--style="width:90%; margin-top:15px; margin-left:10px;" -->
                    </div>
                    <div style="text-align: center">JavaScript开发</div>
                </a>
                          </div>
            
           
            <div class="ui-content" role="main">
                <!-- Tab -->
                <div data-role="tabs" id="tabs" class="ui-tabs ui-widget ui-widget-content ui-corner-all">
                    <div data-role="navbar" class="ui-navbar" role="navigation">                    
                        <ul >
                            <li class="ui-block-b ui-state-default ui-corner-top width-25" role="tab" tabindex="-1" aria-controls="two" aria-labelledby="ui-id-2" aria-selected="true">
                                <a href="#one" data-ajax="false" class="ui-link ui-btn ui-tabs-anchor  ui-btn-active" role="presentation" tabindex="-1" id="ui-id-2">最新开班</a>
                            </li>
                            <li class="ui-block-b ui-state-default ui-corner-top width-25" role="tab" tabindex="-1" aria-controls="two" aria-labelledby="ui-id-2" aria-selected="false">
                                <a href="#two" data-ajax="false" class="ui-link ui-btn ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-2">就业情况</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div id="one" class="ui-body-d ui-content ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false" style="display: block;">
                        <!-- 列表 -->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    颠覆式前端开发                             </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2016/12/18</div>
                                    <div class="index-li-1-b-l width_60p">全国五大校区同步授课</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">可插班</div>                         
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2016/12/24</div>
                                    <div class="index-li-1-b-l width_60p">北京-国贸教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">满座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发(高级)                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2016/12/26</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2016/12/26</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2016/12/26</div>
                                    <div class="index-li-1-b-l width_60p">北京-国贸教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">满座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/01/03</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    颠覆式前端开发                             </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/01/09</div>
                                    <div class="index-li-1-b-l width_60p">深圳-宝安教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    颠覆式前端开发                             </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/01/09</div>
                                    <div class="index-li-1-b-l width_60p">上海-徐汇教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发(高级)                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/01/09</div>
                                    <div class="index-li-1-b-l width_60p">上海-徐汇教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    颠覆式前端开发                             </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/01/16</div>
                                    <div class="index-li-1-b-l width_60p">北京-平西府教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/01/16</div>
                                    <div class="index-li-1-b-l width_60p">上海-徐汇教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发(高级)                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/01/16</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发(高级)                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/01/16</div>
                                    <div class="index-li-1-b-l width_60p">深圳-宝安教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发(高级)                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/01/16</div>
                                    <div class="index-li-1-b-l width_60p">北京-平西府教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/02/13</div>
                                    <div class="index-li-1-b-l width_60p">上海-徐汇教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/02/13</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发(高级)                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/02/20</div>
                                    <div class="index-li-1-b-l width_60p">北京-国贸教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发(高级)                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/02/20</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/02/20</div>
                                    <div class="index-li-1-b-l width_60p">上海-徐汇教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    颠覆式前端开发                             </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/02/20</div>
                                    <div class="index-li-1-b-l width_60p">上海-徐汇教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发(高级)                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/02/20</div>
                                    <div class="index-li-1-b-l width_60p">深圳-宝安教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/02/20</div>
                                    <div class="index-li-1-b-l width_60p">深圳-宝安教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/02/20</div>
                                    <div class="index-li-1-b-l width_60p">北京-国贸教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发(高级)                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/03/06</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发(高级)                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/03/06</div>
                                    <div class="index-li-1-b-l width_60p">上海-徐汇教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/03/13</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    颠覆式前端开发                             </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/03/20</div>
                                    <div class="index-li-1-b-l width_60p">深圳-宝安教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    颠覆式前端开发                             </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/03/20</div>
                                    <div class="index-li-1-b-l width_60p">北京-国贸教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    全栈开发（Java）                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/03/20</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    移动端HTML5开发                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/03/25</div>
                                    <div class="index-li-1-b-l width_60p">全国五大校区同步授课</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    颠覆式前端开发                             </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/03/26</div>
                                    <div class="index-li-1-b-l width_60p">全国五大校区同步授课</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    全栈NodeJs开发                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/03/26</div>
                                    <div class="index-li-1-b-l width_60p">全国五大校区同步授课</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/03/27</div>
                                    <div class="index-li-1-b-l width_60p">上海-徐汇教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    颠覆式前端开发                             </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/04/03</div>
                                    <div class="index-li-1-b-l width_60p">上海-徐汇教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/04/05</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/04/05</div>
                                    <div class="index-li-1-b-l width_60p">北京-国贸教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/04/05</div>
                                    <div class="index-li-1-b-l width_60p">上海-徐汇教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    精通JavaScript开发                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/04/05</div>
                                    <div class="index-li-1-b-l width_60p">深圳-宝安教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/04/10</div>
                                    <div class="index-li-1-b-l width_60p">北京-亦庄教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/04/10</div>
                                    <div class="index-li-1-b-l width_60p">深圳-宝安教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                            <div class="index-li-1">
                                <div class="index-li-1-t">
                                    前端开发零基础就业班                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_40p">2017/04/17</div>
                                    <div class="index-li-1-b-l width_60p">北京-国贸教学中心</div>
                                </div>
                            </div>
                            <div class="index-li-r">
                                <div class="index-li-r-t">有座</div>                          
                                                                    <div class="index-li-r-b color-blue">                                   
                                    <a href="http://tb.53kf.com/code/client/10142983/1">咨询报名</a>
                                    </div>
                                                            </div>
                        </div>
                        <!-- 列表 END-->
                                            </div>
                    <div id="two" aria-labelledby="ui-id-2" class="ui-content ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-expanded="false" aria-hidden="true" style="display: none;">
                        <!-- 列表 -->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    董*同学毕业后工资14K                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：董* &nbsp; &nbsp; &nbsp; 所学课程：精通JS开发&nbsp;&nbsp; &nbsp;&nbsp; 学前工作：1年左右 &nbsp; &nbsp; 学前月薪：5-6K &nbsp; &nbsp; &nbsp;就职公司：兴*信息有限公司&nbsp; &nbsp; &nbsp;就职月薪：14K &nbsp; &nbsp; 毕业于：2016.5</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    荣*同学毕业后荣获高薪15K                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：荣* &nbsp; &nbsp; &nbsp; 所学课程：精通JS开发&nbsp;&nbsp; &nbsp;&nbsp; 学前工作：1年左右 &nbsp; &nbsp; 学前月薪：5-6K &nbsp; &nbsp; &nbsp;就职公司：北京*医疗脑健康产业公司&nbsp; &nbsp; 就职月薪：15K &nbsp; &nbsp; 毕业于：2016.5</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    *骏毕业后轻松找到工作月薪16K                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：*骏 &nbsp; &nbsp; &nbsp; 所学课程：精通JS开发&nbsp;&nbsp; &nbsp;&nbsp; 学前工作：1年左右 &nbsp; &nbsp; 学前月薪：5-6K &nbsp; &nbsp; &nbsp;就职公司：*TV &nbsp; &nbsp; &nbsp;就职月薪：16K &nbsp; &nbsp; 毕业于：2016.7</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    谢*同学毕业后得高薪18K                               </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：谢* &nbsp; &nbsp; &nbsp; 所学课程：精通JS开发&nbsp;&nbsp; &nbsp;&nbsp; 学前工作：1年左右 &nbsp; &nbsp; 学前月薪：5-6K &nbsp; &nbsp; &nbsp;就职公司：花*银行 &nbsp; &nbsp; &nbsp;就职月薪：18K &nbsp; &nbsp; 毕业于：2016.7</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    陈*同学毕业后得高薪office月入20K                               </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：*珊 &nbsp; &nbsp; &nbsp; 所学课程：精通JS开发&nbsp;&nbsp; &nbsp;&nbsp; 学前工作：1年左右 &nbsp; &nbsp; 学前月薪：5-6K &nbsp; &nbsp; &nbsp;就职公司：况*网络安全公司 &nbsp; &nbsp; &nbsp;就职月薪：20K &nbsp; &nbsp; 毕业于：2016.5</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    曹*同学毕业后得高薪13K                               </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：曹*&nbsp; &nbsp; &nbsp; &nbsp;所学课程：精通JS开发&nbsp;&nbsp; &nbsp;&nbsp; 学前工作：1年左右 &nbsp; &nbsp; 学前月薪：5-6K &nbsp; &nbsp; &nbsp;就职公司：*无忧 &nbsp; &nbsp; &nbsp;就职月薪：13K &nbsp; &nbsp; 毕业业：2016.5</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    李*同学毕业后月薪13K                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：李* &nbsp; &nbsp; &nbsp;所学课程：精通JS开发&nbsp;&nbsp; &nbsp;&nbsp; 学前工作：1年左右 &nbsp; &nbsp; 学前月薪：5-6K &nbsp; &nbsp; &nbsp;就职公司：荣*生物科技有限公司 &nbsp; &nbsp;就职月薪：13K &nbsp; &nbsp; 毕业于：2016.4</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    张*甲同学学习4个月工资13K                             </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：张*甲&nbsp; 所学课程：精通JS开发 学前工作：1年左右 &nbsp;学前月薪：5-6K 就职公司：用*软件&nbsp;&nbsp;就职月薪：13K &nbsp; &nbsp;毕业于：2016.4</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    学习一年后工资14k                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：武*龙 &nbsp; &nbsp; 所学课程：精通JS开发 &nbsp; &nbsp; 学前工作：1年左右 &nbsp; &nbsp;学前月薪：7-8K &nbsp; 就职公司：*创科技 &nbsp; &nbsp;就职月薪：14K-20K &nbsp; 毕业于：2016.4</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    学员毕业后月薪16k                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：王*飞 所学课程：精通JS开发 学前工作：半年左右 学前月薪：5-7K 就职公司：*艺科技 就职月薪：16K-20K &nbsp; 毕业于：2016.4</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    覃*叶学员学习半年工资14k                              </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：覃*叶 &nbsp; &nbsp;所学课程：精通JS开发 &nbsp; &nbsp; 学前工作：半年左右 &nbsp; &nbsp; &nbsp;学前月薪：5-6K &nbsp; &nbsp; &nbsp;就职公司：*度 &nbsp; &nbsp; 就职月薪：14K-20K &nbsp; &nbsp; 毕业于2016.4</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                                <div class="index-li">
                                <div class="index-li-1-t margin_0">
                                    *雄同学学习一年工资翻3倍                               </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l width_80"><p>
    姓名：*雄 &nbsp; &nbsp; &nbsp; 所学课程：精通JS开发&nbsp;&nbsp; &nbsp;&nbsp; 学前工作：1年左右 &nbsp; &nbsp; 学前月薪：5-6K &nbsp; &nbsp; &nbsp;就职公司：*度 &nbsp; &nbsp; &nbsp;就职月薪：14K-20K &nbsp; &nbsp; 毕业于：2016.4</p></div>
                                </div>
                                <div class="index-li-1-b">
                                    <div class="index-li-1-b-l">10/31/2016</div>
                                </div>
                        </div>
                        <!-- 列表 END-->
                                            </div>
                </div>
                <!-- Tab End -->

            </div><!-- /content -->
            <!-- Menu -->
<!-- 2016-11-7 add by blue -->
<script>
    (function(a,b,c,d,e){
        var s= b.createElement(c);s.async=1;s.src='//t.agrantsem.com/tg.js?c='+d+'&t='+e;
        var r= b.getElementsByTagName(c)[0];r.parentNode.insertBefore(s,r);
    })(window,document,'script','AG_626001_QMUU','1');
</script>
<script charset="utf-8" type="text/javascript" src="http://wpa.b.qq.com/cgi/wpa.php?key=XzkzODA2ODI3NV80MjI1MTZfNDAwMDAwMzE1NF8"></script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?08f1fdb3465fe388a1e075ac4e5638a9";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
<!-- end 2016-11-7 add by blue -->

<div data-role="panel" class="jqm-navmenu-panel" data-position="left" data-display="overlay" data-theme="a">
    <ul class="jqm-list ui-alt-icon ui-nodisc-icon">
                <li data-filtertext="introduction overview getting started">
            <a href="list.php" data-ajax="false">课程</a>
        </li>
        <li data-filtertext="introduction overview getting started">
            <a href="teacher.php" data-ajax="false">师资</a>
        </li>
        <li data-filtertext="introduction overview getting started">
            <a href="job.php" data-ajax="false">就业</a>
        </li>
        <li data-filtertext="introduction overview getting started">
            <a href="case.php" data-ajax="false">案例</a>
        </li>
        <!-- <li data-filtertext="introduction overview getting started">
        <a href="../intro/" data-ajax="false">视频</a>
        </li> -->
        <li data-filtertext="introduction overview getting started">
            <a href="active.php" data-ajax="false">活动</a>
        </li>
        <li data-filtertext="introduction overview getting started">
            <a href="contactlist.php"  data-ajax="false">联系我们</a>
        </li>
                
    </ul>
</div>

<!-- Menu End -->
<!-- Footer -->
<div data-role="footer" data-position="fixed" role="contentinfo" class="ui-footer ui-bar-inherit">
    <div data-role="navbar" data-iconpos="left" class="ui-navbar" role="navigation">
        <ul class="ui-grid-b">
            <li class="ui-block-a">
                <a href="tel:4000003154" data-icon="phone" class="ui-link ui-btn ui-icon-phone ui-btn-icon-left myfooter">呼叫</a>
            </li>
            <li class="ui-block-b">
                <a href="http://tb.53kf.com/code/client/10142983/1" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="popupLogin" aria-expanded="false" data-icon="comment" class="ui-link ui-btn ui-icon-comment ui-btn-icon-left myfooter" >咨询</a>
            </li>
            <!-- <li class="ui-block-c">
                <a href="#popupBasic" data-rel="popup" class="ui-btn  ui-shadow ui-btn-inline ui-icon-star ui-btn-icon-left myfooter" data-transition="pop">分享</a>
            </li> -->
            <li class="ui-block-c">
                <a href=" http://bbs.zhinengshe.com/forum.php?mobile=yes" data-icon="heart" class="ui-link ui-btn ui-icon-heart ui-btn-icon-left myfooter">技术圈</a>
            </li>
        </ul>
    </div><!-- /navbar -->
</div>

<!-- Footer End -->

<div class="ui-popup-container pop in ui-popup-active" id="popupLogin-popup" style="max-width: 867px; top: 2164.5px; left: 286px;">
    <div data-role="popup" id="popupLogin" data-theme="a" class="ui-corner-all ui-popup ui-body-a ui-overlay-shadow">
        <form>
            <div style="padding:10px 20px; height: 101px;">
                <div class="zx">
                    <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODA2ODI3NV80MTk4MjdfNDAwMDAwMzE1NF8yXw"><div class="zx1"><img src="images/zx_03.png"></div></a>
                    <a href="http://chat.looyuoms.com/chat/chat/p.do?c=20001547&f=10060659&g=10062055"><div class="zx2"><img src="images/zx_05.png"></div></a>
                </div>
            </div>
        </form>
    </div>
</div>






<!-- 
<div data-role="popup" id="popupBasic">
            <div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a></div>
            </div>

<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"32"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script> -->
            
        </div>
        <script type="text/javascript" src="js/yxMobileSlider.js"></script>
        <script>
            $(".slider").yxMobileSlider({
                width : 640,
                height : 280,
                during : 3000
            })
        </script>
        <script>
    $(document).ready(function() {
      var owl = $("#owl-demo");

      owl.owlCarousel({

      items : 10, 
      itemsDesktop : [1000,5],
      itemsDesktopSmall : [900,3],
      itemsTablet: [600,3],
      itemsMobile : false,
      pagination:true
      });

    });
    </script>
    </body>
</html>
