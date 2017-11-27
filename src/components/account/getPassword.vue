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
                <el-form-item label="验证码" class="img_Yz">
                    <el-input></el-input>
                    <img :src="code.img_code_url" alt="验证码">
                </el-form-item>
            </template>

            <el-form-item v-if="active!==0" label="手机号">
                <div class="" style="padding-left: 15px;" >{{data.phone | PrivacyPhone}}</div>
            </el-form-item>

            <el-form-item label="手机验证码" v-if="active===1">
                <el-input>
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
                    <el-input type="password"></el-input>
                </el-form-item>
                <el-form-item label="重复新密码">
                    <el-input type="password"></el-input>
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
                    img_code_url: 'http://placeholder.qiniudn.com/80x40',
                    code_send_text: '发送验证码',
                },
                data: {
                    phone: '',
                    yz: ''
                }
            }
        },

        // 计算属性
        computed: {},

        // 事件
        methods: {
            // 短信倒计时
            send() {
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
                    //this.send();
                    this.active = 1;
                } else if (this.active === 1) {
                    this.active = 2
                } else if (this.active === 2) {
                    this.active = 0
                }
            }
        },
        created: function () {

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
