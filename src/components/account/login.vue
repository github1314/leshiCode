<template>
    <div class="login">
        <div class="main-pc clearFix">
            <div class="login-frame">
                <h2>登陆</h2>
                <div class="ipt">
                    <i class="iconfont icon-zhanghao"></i>
                    <input type="text">
                </div>
                <div class="ipt mt">
                    <i class="iconfont icon-mima"></i>
                    <input type="password">
                </div>
                <div class="retrieve clearFix">
                    <router-link :to="{name:'getpassword'}">忘记密码？</router-link>
                </div>
                <button @click="login">登陆</button>
                <div class="reg">
                    <router-link :to="{name:'registered'}">立即注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        // 数据

        data() {
            return {}
        },

        // 计算属性
        computed: {},

        // 事件
        methods: {
            login() {
                this.$message({
                    showClose: true,
                    duration: 3000,
                    dangerouslyUseHTMLString: true,
                    message: '提示信息'
                })
            }
        },

        created: function () {

        }
    }
</script>
<style>
    #header {
        box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.06);
    }
</style>
<style lang="less" scoped>
    @import "../../assets/less/base.less";

    .login {
        width: 100%;
        min-height: @content_min_height;
        background: url("../../assets/account/login/login-banner.png") no-repeat center;
        background-size: cover;
        .main-pc {
            padding: 70px;
            .login-frame {
                float: right;
                width: 414px;
                height: 444px;
                opacity: 0.95;
                background: #FFFFFF;
                -webkit-box-shadow: 0 2px 12px 0 rgba(109, 109, 109, 0.50);
                -moz-box-shadow: 0 2px 12px 0 rgba(109, 109, 109, 0.50);
                box-shadow: 0 2px 12px 0 rgba(109, 109, 109, 0.50);
                padding: 40px;
                h2 {
                    font-size: 32px;
                    color: #333333;
                    font-weight: 300;
                    padding-bottom: 30px;
                }
                .ipt {
                    width: 100%;
                    height: 54px;
                    position: relative;
                    &.mt {
                        margin-top: 30px;
                    }
                    i.iconfont {
                        font-size: 22px;
                        position: absolute;
                        top: 15px;
                        left: 18px;
                    }
                    input {
                        display: block;
                        width: 100%;
                        height: 54px;
                        font-size: 16px;
                        line-height: 54px;
                        border: 1px solid #959595;
                        border-radius: 2px;
                        outline: none;
                        padding: 0 20px 0 50px;
                    }
                }
                .retrieve, .reg {
                    a {
                        float: right;
                        margin: 10px;
                        font-size: 12px;
                        color: #3993FF;
                        letter-spacing: 0;
                        line-height: 12px;
                    }
                }
                button {
                    width: 100%;
                    height: 48px;
                    color: #fff;
                    margin-top: 45px;
                    font-size: 20px;
                    background-image: linear-gradient(-135deg, #39C1FF 0%, #4685FF 100%);
                    border-radius: 2px;
                    cursor: pointer;
                }
            }
        }
    }


</style>








