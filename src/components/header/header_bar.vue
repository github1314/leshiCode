<template>
    <div class="header_bar" id="header">
        <div class="header_box clearFix">
            <div class="header_leftBox clearFix">
                <span class="header_barBox_left">服务电话:4009-995-157</span>
                <a href="#" class="header_leftBox_right">在线客服</a>
            </div>
            <div class="header_rightBox">
                <template v-if="!this.$store.state.account.login">
                    <router-link :to="{name:'login'}">登陆</router-link>
                </template>

                <template v-else>
                    <router-link :to="{name:'index'}">您好 {{this.$store.state.account.id}}</router-link>&nbsp;
                    <div style="display: inline-block;" @click="loginQuit">【退出】</div>
                </template>

                <span>|</span>
                <a href="#">个人理财</a>
                <span>|</span>
                <a href="#" class="selectHover">
                    <a href="#">生态导航</a>
                    <img src="../../assets/header/arrow_down.png" alt="">
                    <ul>
                        <li>111111</li>
                        <li>111111</li>
                        <li>111111</li>
                        <li>111111</li>
                        <li>111111</li>
                        <li>111111</li>
                    </ul>
                </a>
                <span>|</span>
                <a href="#" class="iphone">手机版
                    <img src="../../assets/header/tcode@1x.png" alt="">
                </a>
            </div>
        </div>
        <div class="header_content clearFix">
            <div class="header_logo clearFix">
                <a href="#">
                    <img src="../../assets/header/logo.png" alt="">
                </a>
                <div>
                    <p>乐视生态金融平台</p>
                    <p>邀你共享金融生态</p>
                </div>
            </div>
            <div class="header_btn clearFix" @click="bao">
                <p>
                    <img src="../../assets/header/touxiang.png" alt="">
                </p>
                <span>我的乐小保</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                headerNavigation: false,
            }
        },
        computed: {},
        components: {},
        methods: {

            headerShow() {
                this.headerNavigation = !this.headerNavigation;
            },
            bao() {
                this.$router.push({name: 'overview'})
            },
            loginQuit() {   // 退出
                this.$store.commit('quit');
                this.$router.push({name: 'login'});
                this.$http.post('/api/sys/loginQuit').then(response => {

                }).catch(error => {});
            }
        },
        created: function () {
            this.$http.post('/api/syst/senseToken', this.qs.stringify()).then(response => {
                if (response.data.code === 200) {
                    this.$store.commit('info',{
                        login:true,
                    });
                }
            }).catch(error => {
            });
        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped>
    body #header {
        box-shadow: 0 1px 0 0 #E6E6E6;
    }

    .header_bar {
        height: 140px;
        .header_box {
            width: 100%;
            height: 31px;
            .header_leftBox {
                width: 219px;
                height: 31px;
                margin-left: 37px;
                font-size: 12px;
                line-height: 31px;
                float: left;

                .header_barBox_left {
                    float: left;
                    color: #999;
                }
                .header_leftBox_right {
                    float: right;
                    color: #999;
                }
            }
            .header_rightBox {
                float: right;
                height: 31px;
                font-size: 12px;
                line-height: 31px;
                margin-right: 55px;
                position: relative;
                .iphone {
                    img {
                        display: none;
                        position: absolute;
                        top: 23px;
                        right: -28px;
                    }
                }
                .iphone:hover img {
                    display: block;
                }
                span {
                    margin: 0 15px;
                    color: #999;
                }
                a {
                    color: #999;
                }
                .selectHover {
                    img {
                        position: absolute;
                        top: 13px;
                        right: 66px;
                    }
                }
                ul {
                    display: none;
                    width: 89px;
                    position: absolute;
                    top: 23px;
                    right: 56px;
                    border: 1px solid #999;
                    background: #fff;
                    border-top: none;
                    li {
                        text-align: center;
                    }
                    z-index: 5;
                }
                .selectHover:hover ul {
                    display: block;
                }

            }
        }
        .header_content {
            min-width: 1200px;
            width: 1200px;
            margin: 0 auto;

            .header_logo {
                float: left;
                height: 34.5px;
                margin-top: 31.5px;
                margin-left: 10px;
                a {
                    display: block;
                    height: 100%;

                    float: left;
                    img {
                        height: 100%;
                    }
                }
                div {
                    float: left;
                    width: 108px;
                    border-left: 1px solid #999;
                    margin-left: 10.6px;
                    padding-left: 10px;
                    margin-top: 3px;
                    p {
                        font-size: 12px;
                        color: #999;
                    }
                }
            }
            .header_btn {
                cursor: pointer;
                float: right;
                display: block;
                width: 140px;
                height: 40px;
                line-height: 38px;
                border: 1px solid #DCDCDC;
                border-radius: 3px;
                margin: 33px 10px 0px 0px;
                p {
                    display: block;
                    float: left;
                    height: 28px;
                    width: 28px;
                    margin: 5px 8px 0 10px;
                    img {
                        height: 100%;
                        width: 100%;
                        border-radius: 50%;
                    }
                }
                span {
                    color: #4d4d4d;
                }

            }
        }
    }
</style>
