<template>
    <div class="GetPassword">
        <el-steps :active="active" align-center>
            <el-step title="确认账号"></el-step>
            <el-step title="安全验证"></el-step>
            <el-step title="重置密码"></el-step>
        </el-steps>

        <el-form class="form" label-position="left" label-width="100px">

            <template v-if="active===0">
                <el-form-item label="手机号">
                    <el-input class="" v-model="data.phone"></el-input>
                </el-form-item>
                <el-form-item label="图片验证码" class="img_Yz">
                    <el-input v-model="data.img_code_i"></el-input>
                    <img :src="code.img_code_url" alt="验证码" @click="img_code">
                </el-form-item>
            </template>

            <el-form-item v-if="active!==0" label="手机号">
                <div class="" style="padding-left: 15px;">{{data.phone | PrivacyPhone}}</div>
            </el-form-item>

            <el-form-item label="短信验证码" v-if="active===1">
                <el-input v-model="data.verificationMessage">
                    <el-button class="send"
                               style="width:150px;"
                               slot="append"
                               @click="send"
                               :disabled="!code.code_send"
                               icon="el-icon-message">
                        {{code.code_send_text}}
                    </el-button>
                </el-input>
            </el-form-item>

            <template v-if="active===2">
                <el-form-item label="新密码">
                    <el-input type="password" v-model="data.pwd1"></el-input>
                </el-form-item>
                <el-form-item label="重复新密码">
                    <el-input type="password" v-model="data.pwd2"></el-input>
                </el-form-item>
            </template>

            <el-form-item>
                <el-button class="submit" @click="sub" type="primary" :disabled="!checked">{{submit_text[active]}}
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'GetPassword',
        // 数据
        data() {
            return {
                active: 0,
                submit_text: ['下一步 安全验证', '下一步 设置密码', '确定'],
                checked: true,
                code: {
                    timer: null,
                    countdown: 10,
                    code_send: true,
                    img_code_url: 'http://placehold.it/80x40/000000/ffffff?text=Q W E R',
                    code_send_text: '发送验证码',
                },
                data: {
                    phone: '18511110837',
                    yz: '',
                    img_code_i: '',
                    verificationMessage: '',
                    pwd1: '',
                    pwd2: ''
                }
            }
        },

        // 计算属性
        computed: {},

        // 事件
        methods: {
            // 图片验证码
            img_code() {
                this.$http.post('/api/imageValidate/imgValidate', this.qs.stringify()).then(response => {
                    this.code.img_code_url = 'data:image/png;base64,' + response.data.data.image
                }).catch(error => {
                });
            },

            // 短信倒计时
            send() {
                //发送的方法
                this.$http.post('/api/syst/sendMessage', this.qs.stringify({
                    mobileNumber: this.data.phone,
                })).then(response => {

                }).catch(error => {
                });


                let send_f = (() => {
                    this.code.countdown--;
                    if (this.code.countdown <= 0) {
                        this.code.code_send_text = '发送验证码';
                        clearInterval(this.code.timer);
                        this.code.countdown = 10;
                        this.code.code_send = true;
                    } else {
                        this.code.code_send_text = this.code.countdown + '秒后重试';
                        this.code.code_send = false;
                    }
                });
                send_f();
                this.code.timer = setInterval(() => {
                    send_f();
                }, 1000)
            },
            sub() {
                if (this.active === 0) {
                    let phone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(this.data.phone);

                    if (!phone) {
                        this.$message({
                            showClose: true,
                            message: '请输入正确的手机号！',
                            type: 'error'
                        });
                    } else if (!this.data.img_code_i) {
                        this.$message({
                            showClose: true,
                            message: '请输入验证码！',
                            type: 'error'
                        });
                    } else {
                        this.$http.post('/api/syst/verificationCode', this.qs.stringify({
                            mobileNumber: this.data.phone,
                            verificationCode: this.data.img_code_i
                        })).then(response => {

                            if (response.data.code !== 200) {
                                this.img_code();
                                this.$message({
                                    showClose: true,
                                    message: response.data.msg,
                                    type: 'error'
                                });
                            } else {
                                this.active = 1;
                            }
                        }).catch(error => {
                        });
                    }


                } else if (this.active === 1) {         // 第二步

                    if (this.data.verificationMessage) {
                        // 短信验证码是否正确
                        this.$http.post('/api/syst/verificationMessage', this.qs.stringify({
                            mobileNumber: this.data.phone,
                            messageCode: this.data.verificationMessage
                        })).then(response => {
                            if (response.data.code !== 200) {
                                this.$message({
                                    showClose: true,
                                    message: response.data.msg,
                                    type: 'error'
                                });
                            } else {
                                this.active = 2;
                            }
                        }).catch(error => {
                        });
                    } else {
                        this.img_code();
                        this.$message({
                            showClose: true,
                            message: '请先输入验证码！',
                            type: 'error'
                        });
                    }


                } else if (this.active === 2) {

                    // 密码未填写
                    if (this.data.pwd1 === '' || this.data.pwd2 === '') {
                        this.$message({
                            showClose: true,
                            message: '请先输入两次密码！',
                            type: 'error'
                        });
                    } else {
                        // 密码不相等
                        if (this.data.pwd1 === this.data.pwd2) {
                            // 密码长度不合法
                            if (this.data.pwd1.length < 6 || this.data.pwd1.length > 18) {
                                this.$message({
                                    showClose: true,
                                    message: '密码长度最少6位，最长18位！',
                                    type: 'error'
                                });
                            }else{
                                this.$http.post('/api/syst/resetPassWord',this.qs.stringify({
                                    mobileNumber: this.data.phone,
                                    passWord:this.data.pwd1
                                })).then(response => {
                                    if(response.data.code!==200){
                                        console.log(response);
                                    }else{
                                        this.$router.push({name:'login'})
                                    }
                                }).catch(error => {});
                            }
                        } else {
                            this.$message({
                                showClose: true,
                                message: '输入两次密码不匹配！',
                                type: 'error'
                            });
                        }
                    }


                }
            }
        },
        created: function () {
            // 刚进入页面 触发图片验证码
            this.img_code();
        }
    }
</script>

<style lang="less" scoped>
    @import "../../assets/less/base.less";

    .GetPassword {
        margin: auto;
        width: 998px;
        padding-top: 40px;
        .form {
            padding: 30px;
            width: 450px;
            margin: auto;

            .img_Yz {
                .el-input {
                    width: 260px;
                    top: -14px;
                    & + img {
                        width: 80px;
                        height: 40px;
                        margin-left: 4px;
                        border-radius: 3px;
                    }
                }
            }

            a {
                color: @a_hover;
            }
            .submit {
                width: 100%;
                border-radius: 2px;
            }
        }
    }
</style>
