<template>
    <div class="registered">
        <el-form label-position="left" label-width="100px">
            <el-form-item label="手机号">
                <el-input>
                    <el-button class="send" style="width:150px;" slot="append" @click="send" :disabled="!code.code_send" icon="el-icon-message">
                        {{code.code_send_text}}
                    </el-button>
                </el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password"></el-input>
            </el-form-item>
            <el-form-item class="checked">
                <el-checkbox v-model="checked">
                    我已阅读同意<a href="http://www.baidu.com">《相关协议》</a>
                </el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button class="submit" type="primary" :disabled="!checked">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'registered',
        // 数据
        data() {
            return {
                checked: true,
                code: {
                    timer: null,
                    countdown: 10,
                    code_send: true,
                    code_send_text: '发送验证码',
                },
            }
        },

        // 计算属性
        computed: {},

        // 事件
        methods: {
            send() {
                // 计时开始
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
            }
        },
        created: function () {

        }
    }
</script>

<style lang="less" scoped>
    @import "../../assets/less/base.less";

    .send.is-disabled, .send.is-disabled:focus, .send.is-disabled:hover {
        background-color: transparent;
        border-color: transparent;
    }

    .registered {
        width: 450px;
        height: 500px;
        margin: auto;
        padding-top:40px;
        .checked {
            margin-top: -25px;
            a {
                color: #409EFF;
            }
        }
        .submit {
            width: 100%;
            border-radius: 2px;
        }
    }
</style>
