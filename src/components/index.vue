<template>
    <div class="homePage">

        <div class="banner"></div>
        <div class="introduce">
            <div>
                <img src="../assets/homePage/QQ图片20171115150923.png" alt="">
                <p>首期授信期限:1年</p>
            </div>
            <div>
                <img src="../assets/homePage/QQ图片20171115150923.png" alt="">
                <p>融资期限:不超过90天</p>
            </div>
            <div>
                <img src="../assets/homePage/QQ图片20171115150923.png" alt="">
                <p>利率:年化12%~18%</p>
            </div>
            <div>
                <a href="#" class="Panic_Buying">立即抢购</a>
            </div>
        </div>
        <div class="technological_process">
            <p>申请流程</p>
            <p>在线申请，仅四步</p>
            <div class="step clearFix">
                <div>
                    <a href="#">1</a>
                    <p>注册开通</p>
                    <p>上传资料实名认证</p>
                </div>
                <div>
                    <a href="#">2</a>
                    <p>融资申请</p>
                    <p>实时额度随借随还</p>
                </div>
                <div>
                    <a href="#">3</a>
                    <p>线上签约</p>
                    <p>在线签署融资协议</p>
                </div>
                <div>
                    <a href="#">4</a>
                    <p>结算还款</p>
                    <p>按日计息自动结算</p>
                </div>
                <i></i>
            </div>

        </div>
        <div class="leXiaoBao_Box">
            <p>乐小宝</p>
            <ul class="clearFix">
                <li>
                    <p>平台搭建</p>
                    <p>融合多种金融工具</p>
                    <p>搭建线上金融服务平台</p>
                </li>
                <li>
                    <p>平台搭建</p>
                    <p>融合多种金融工具</p>
                    <p>搭建线上金融服务平台</p>
                </li>
                <li>
                    <p>平台搭建</p>
                    <p>融合多种金融工具</p>
                    <p>搭建线上金融服务平台</p>
                </li>
                <li>
                    <p>平台搭建</p>
                    <p>融合多种金融工具</p>
                    <p>搭建线上金融服务平台</p>
                </li>
                <li>
                    <p>平台搭建</p>
                    <p>融合多种金融工具</p>
                    <p>搭建线上金融服务平台</p>
                </li>
                <li>
                    <p>平台搭建</p>
                    <p>融合多种金融工具</p>
                    <p>搭建线上金融服务平台</p>
                </li>

            </ul>
        </div>
        <div class="homePage_content clearFix">
            <div class="homePage_news">
                <p>实时新闻</p>
                <ul>
                    <li v-for="i in 3" class="clearFix">
                        <img src="../assets/homePage/222.png" alt="">
                        <div>
                            <p>格力美的12起诉讼至今未开庭 董明珠或主动和解</p>
                            <span>2017/06/01 09:21</span>
                        </div>
                    </li>
                </ul>
            </div>   <!-- 新闻-->
            <div class="homePage_information">
                <p>快讯</p>
                <ul>
                    <li v-for="i in 4">
                        <p>现金贷将迎强监管：除利率上限，还将从资金、牌照等方解</p>
                        <span>2017/06/01 09:21</span>
                    </li>
                </ul>
            </div>    <!-- 资讯-->
            <div class="homePage_problem">
                <p>常见问题</p>
                <ul>
                    <li>
                        <h5>1什么是乐小保</h5>
                        <p>“乐小保”是乐视金融旗下开放式独立运营的互联网企业级金融服务云平台。将以中国供应链及产业链中快速成长的中小微企业为中心搭建便捷、安全、稳定、风险可控的开放式供应链融资服务平台，并以此为切入点，成为中国供应链金融市场最佳金融科技创新实践者，为中小微企业输出整合金融服务，帮助他们管好生意、用好资金、提升企业金融力。</p>
                    </li>
                    <li>
                        <h5>2. 如何保障资金安全？</h5>
                        <p>（1）信息验证：实名+实时验证，为保障账户、资金安全，需要实名认证并绑定与企业信息一致的银行账号。（2）多维保护：我们将严格保护企业的机密数据，平台将24小时自动监控。一旦发现账户资金异常，我们会立刻发现并处理，严格保障企业的账户安全。（3）法律保障：平台将为每份投资签订法律协议，协议保障投资者的投资利益与平台规范。</p>
                    </li>
                </ul>
            </div><!-- 问题-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {}
        },
        components: {
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    @import "../assets/less/base.less";

    .homePage{
        position: relative;
        .banner{
            width: 100%;
            height:522px;
            background: url("../assets/homePage/banner@1x.png") 50% 50% no-repeat;
            background-size: 100% 100%;
        }
        .introduce{
            width: 1180px;
            height:160px;
            background: linear-gradient(left,#39C1FF,#3993FF);
            margin: -52px auto 0 auto;
            div{
                width: 274px;
                float: left;
                text-align: center;
            }
            &>div:nth-child(1){
                margin: 40px 0 17px 0px;
                color: #fff;
            }
            &>div:nth-child(2){
                margin: 40px 0 17px 0px;
                color: #fff;
            }
            &>div:nth-child(3){
                margin: 40px 0 17px 0px;
                color: #fff;
            }
            &>div:nth-child(4){
                a{
                    display: inline-block;
                    width: 160px;
                    height:46px;
                    line-height:46px;
                    background: #fff;
                    color: #1C91FA;
                    text-align: center;
                    margin-top:57px ;
                    font-size:18px;
                    font-weight:400;
                }
            }
            .Panic_Buying:hover{
                transform: scale(0.99);
            }
        }
        .technological_process{
            min-width: 1180px;
            width: 1180px;
            height: 281px;
            margin: 0 auto;

            p{
                text-align: center;
            }
            &>p:nth-child(1){
                font-size:24px;
                margin-top: 59px;
                color: #333;
            }
            &>p:nth-child(2){
                font-size: 12px;
                color: #999;
                margin-top: 8px;
            }
            .step{
                width: 1050px;
                margin: 0 auto;
                position: relative;
                i{
                    display: block;
                    width:800px;
                    height:2px;
                    position: absolute;
                    top:48px;
                    left:120px;
                    background: linear-gradient(left, #4DABFF, #1C91FA);
                    z-index: -1;
                }
                div{
                    float: left;
                    width: 262px;
                    text-align: center;
                    padding-top: 23px;
                    a{
                        display: inline-block;
                        width: 52px;
                        height:52px;
                        background-color: #3993FF ;
                        border-radius: 50%;
                        color: #fff;
                        text-align: center;
                        line-height:52px;
                        font-size:32px;
                    }
                    &>p:nth-child(2){
                        font-size:18px;
                        color: #333;
                        margin-top: 19px;
                    }
                    &>p:nth-child(3){
                        font-size:12px;
                        color: #666;
                        margin-top: 9px;
                    }
                }
            }
        }
        .leXiaoBao_Box{
            width: 100%;
            height:384px;
            background: #F6F6FC;
            padding-top: 25px;
            &>p{
                text-align: center;
                font-size:22px;
                color: #333;
            }
            &>ul{
                width: 1200px;
                min-width: 1200px;
                margin: 0 auto;
                li{
                    width: 400px;
                    float: left;
                    background: url("../assets/homePage/111.png") no-repeat 115px 55px;
                    padding-left: 211px;
                    padding-top: 50px;
                    padding-bottom: 35px;
                    &>p:nth-child(1){
                        font-size:18px;
                        margin-bottom: 21px;
                    }
                    &>p:nth-child(2){
                        font-size:12px;
                    }
                    &>p:nth-child(3){
                        font-size:12px;
                    }
                }
            }
        }
        .homePage_content{
            width:1200px ;
            min-width: 1200px;
            margin: 0 auto;
            padding: 75px 0 141px 0;
            &>div{
                width: 400px;
                float: left;
            }
            .homePage_news{
                padding-left: 10px;
                &>p{
                    color: #333333;
                    font-size:24px;
                    /*font-weight:bold;*/
                }
                ul{
                    li{
                        padding-top: 25px;
                        img{
                            float: left;
                            width: 110px;
                            height:70px;

                        }
                        div{
                            width: 280px;
                            height:70px;
                            float: left;
                            padding: 0 60px 0 20px;
                            position: relative;
                            &>p{
                                font-size:14px;
                                color: #333;
                            }
                            &>span{
                                position: absolute;
                                bottom:0;
                                left:20px;
                                font-size:12px;
                                color: #999;
                            }
                        }
                    }
                }
            }
            .homePage_information{
                &>p{
                    color: #333333;
                    font-size:24px;
                }
                /*font-weight:bold;*/
                &>ul{
                    li{
                        padding-top: 25px;
                        padding-right: 60px;
                        p{
                            font-size:14px;
                            color: #333;
                        }
                        span{
                            font-size:12px;
                            color: #999;
                        }
                    }
                }
            }
            .homePage_problem{
                padding-right: 10px;
                &>p{
                    color: #333333;
                    font-size:24px;
                }
                &>ul{
                    li{
                        padding-top: 25px;
                        &>h5{
                            font-size:14px;
                        }
                        &>p{
                            font-size:12px;
                            color: #666;
                        }
                    }
                }
                /*font-weight:bold;*/
            }
        }
    }

</style>
