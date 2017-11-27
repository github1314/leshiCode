<template>
    <footer class="footer" id="footer">
        <div>
            <div>
                <p><a href="http://corp.lefinance.com/" target="_blank"><span>关于我们</span></a><span>|</span>
                    <a href="https://jr.lemall.com/tradecenter/contactus.html"
                       target="_blank"><span>联系我们</span></a><span>|</span>
                    <a href="https://jr.lemall.com/tradecenter/disclaimer.html" target="_blank"><span>免责声明</span></a>
                </p>
                <p><span>友情链接</span><span>|</span>
                    <a href="http://www.lemall.com" target="_blank"><span>乐视商城</span></a><span>|</span>
                    <a href="http://www.lesports.com" target="_blank"><span>乐视体育</span></a><span>|</span>
                    <a href="http://www.le.com" target="_blank"><span>乐视视频</span></a><span>|</span>
                    <a href="http://leplay.cn" target="_blank"><span>乐视应用商店</span></a>
                </p>
                <p>
                    <span>Copyright © 2017 乐视金融 All rights reserved</span><span>|</span>
                    <a href="http://www.miibeian.gov.cn/publish/query/indexFirst.action" target="_blank"><span>京ICP备14047511号-1</span></a><span>|</span>
                    <span>京ICP证140733号</span>
                </p>
            </div>
            <div>
                <div>
                    <img v-if="qr=='wechat'" class="qcode" src="../../assets/footer/footer-wechat.png">
                    <img v-else-if="qr=='android'" class="qcode" src="../../assets/footer/footer-Android.png">
                    <img v-else-if="qr=='h5'" class="qcode" src="../../assets/footer/footer-H5.png">
                    <img v-else class="qcode" src="../../assets/footer/footer-ios.png">

                    <div class="footer_triangle_border_right" style="margin-top: -80px"></div>
                </div>
                <div>
                    <p id="ios"
                       @mouseover="qr_hover('ios')"
                       @mouseout="">
                        <img src="../../assets/footer/icon-foot-ios-sel.png" v-if="qr=='ios'">
                        <img src="../../assets/footer/icon-foot-ios.png" v-else>
                        <span>苹果客户端下载</span>
                    </p>
                    <p id="android"
                       @mouseover="qr_hover('android')">
                        <img src="../../assets/footer/icon-foot-android-sel.png" v-if="qr=='android'">
                        <img src="../../assets/footer/icon-foot-android.png" v-else>
                        <span>安卓客户端下载</span></p>
                    <p id="wap"
                       @mouseover="qr_hover('h5')">
                        <img src="../../assets/footer/icon-foot-wap-sel.png" v-if="qr=='h5'">
                        <img src="../../assets/footer/icon-foot-wap.png" v-else>
                        <span>手机浏览器访问</span></p>
                    <p id="wechat"
                       @mouseover="qr_hover('wechat')">
                        <img src="../../assets/footer/icon-foot-wechat-sel.png" v-if="qr=='wechat'">
                        <img src="../../assets/footer/icon-foot-wechat.png" v-else>
                        <span>微信公众号访问</span>
                    </p>
                </div>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>服务时间：</td>
                            <td>工作日9:00-21:00</td>
                        </tr>
                        <tr>
                            <td>服务电话：</td>
                            <td>4009-995-157</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'footer',
        data: () => ({
            qr: 'h5'
        }),
        methods: {
            qr_hover(qr_value) {
                this.qr = qr_value
            }
        },
        created() {

        }

    }
</script>

<style lang="less" scoped>
    a {
        color: #666 !important;
    }

    .footer {
        position: relative;
        background: #FFFFFF;
        box-shadow: inset 0px 1px 0px 0px #DBDBDB;
        height: 215px;
        width: 100%;
        bottom: 0;
        a:hover {
            span {
                color: #1F92F9;
            }
        }
    }

    .footer a, footer a:hover, footer a:visited, footer a:active, footer a:link {
        color: #666;
        text-decoration: none;
        text-underline: none;
    }

    .footer > div {
        margin: auto;
        width: 1200px;
        color: #666666;
        box-shadow: inset 0px 1px 0px 0px #DBDBDB;
        background: #FFFFFF;
    }

    .footer > div > div:first-child {
        font-size: 14px;
        display: inline-block;
        padding-top: 10px;
    }

    .footer > div > div:first-child > p {
        margin-top: 38px;
    }

    .footer > div > div:first-child > p > span {
        margin-right: 10px;
    }

    .footer > div > div:first-child > p > a span:hover {
        opacity: 1;

    }

    .footer > div > div:first-child > p > a span {
        margin-right: 10px;
    }

    .footer > div > div:last-child {
        width: 210px;
        font-size: 12px;
        display: inline-block;
        margin-left: 350px;
        margin-top: 20px;
        position: absolute;
    }

    .footer > div > div:last-child > div:first-child {
        border: 1px solid #DBDBDB;
        width: 90px;
        height: 90px;
        background-color: #fff;
        float: left;
        margin-right: 15px;
        margin-top: 3px;
    }

    .footer > div > div:last-child > div:first-child img {
        margin: 1px;
        width: 85px;
        height: 85px
    }

    .footer > div > div:last-child > div p {
        margin-top: 0;
        margin-bottom: 0;
        line-height: 23px;
        cursor: pointer;

    }

    .footer > div > div:last-child > div p img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
    }

    .footer > div > div:last-child > div p:hover {
        text-decoration: none;
        text-underline: none;
    }

    .footer > div > div:last-child > div:last-child {
        padding-top: 20px;
        font-size: 14px;
    }

    .footer_triangle_border_right {;
        border-width: 6px 0 6px 6px;
        border-style: solid;
        border-color: transparent transparent transparent #fff; /*透明 透明 透明 灰*/
        position: relative;
        margin-left: 90px;
    }

</style>
