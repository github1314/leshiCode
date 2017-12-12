<template>
    <div class="login">
        <div class="main-pc clearFix">
            <div class="login-frame">
                <h2>登陆</h2>
                <div class="ipt">
                    <i class="iconfont icon-zhanghao"></i>
                    <input type="text" v-model="form.mobileNumber">
                </div>
                <div class="ipt mt">
                    <i class="iconfont icon-mima"></i>
                    <input type="password" v-model="form.passWord">
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
            return {
                form: {
                    mobileNumber: '18511110837',
                    passWord: '111111',
                },
                rules: {}
            }
        },

        // 计算属性
        computed: {},

        // 事件
        methods: {
            login() {

                let self = this;

                let phone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(this.form.mobileNumber);
                let pwd = (this.form.passWord);

                if (!phone) {
                    this.$message({
                        showClose: true,
                        message: '请输入正确的手机号！',
                        type: 'error'
                    });
                } else if (!pwd) {
                    this.$message({
                        showClose: true,
                        message: '请输入密码！',
                        type: 'error'
                    });
                } else {
                    this.$http.post('/api/syst/loginUser', this.qs.stringify(self.form)).then(response => {
                        if (response.data.code !== 200) {
                            this.$message({
                                showClose: true,
                                message: response.data.msg,
                                type: 'error'
                            });
                        } else if (response.data.code === 200) {
                            // 成功
                            // this.$store.state.account.login = true;
                            this.$store.commit('info',{
                                login:true,
                                id:response.data.data.adminId,
                                username:response.data.data.adminName,
                            });
                            this.$router.push({name: 'overview'});
                        }
                    }).catch(error => {
                    });
                }

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
        display: block !important;
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








