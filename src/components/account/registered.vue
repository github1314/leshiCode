<template>
    <div class="registered">
        <el-form label-position="left" label-width="100px">
            <el-form-item label="手机号">
                <el-input v-model="tel">
                    <el-button class="send" style="width:150px;" slot="append" @click="send" :disabled="!code.code_send" icon="el-icon-message">
                        {{code.code_send_text}}
                    </el-button>
                </el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="verificationcode"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="password"></el-input>
            </el-form-item>
            <el-form-item class="checked">
                <el-checkbox v-model="checked">
                    我已阅读同意<a href="http://www.baidu.com">《相关协议》</a>
                </el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button class="submit" type="primary" :disabled="!checked" @click="registerBtn()">确定</el-button>
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
                //手机号
                tel:'',
                //验证码
                verificationcode:'',
                //密码
                password:'',
                //报错信息
                err:'',
                //报错信息显示/隐藏
                showHideClose:true,
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
                let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
                if(this.tel==''){
                    this.$message({
                        showClose: true,
                        message: '手机号不能为空',
                        type: 'error'
                    });
                }else if(!reg.test(this.tel)){
                    this.$message({
                        showClose: true,
                        message: '手机号格式错误',
                        type: 'error'
                    });
                }else {
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
                    }, 1000);




                    let registerData = {
                        mobileNumber:this.tel,
                        verificationCode:this.verificationcode,
                        passWord:this.password
                    };

                    //发送验证码的数据请求
                    this.$http.post('/api/syst/signup',this.qs.stringify(registerData)).then((res)=>{
                        console.log(res)
                        console.log('请求数据')
                    }).catch((err)=>{
                        console.log(err)
                    })


                }
            },
            registerBtn(){
                var _this = this;
                //验证手机号正则
                let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

                if(this.tel=='' && this.verificationcode=='' && this.password==''){
                    this.$message({
                        showClose: true,
                        message: '请填写完整后，在进行提交',
                        type: 'error'
                    });
                }else if(this.tel==''){
                    this.$message({
                        showClose: true,
                        message: '手机号不能为空',
                        type: 'error'
                    });
                }else if(this.verificationcode==''){
                    this.$message({
                        showClose: true,
                        message: '验证码不能为空',
                        type: 'error'
                    });
                }else if(this.password==''){
                    this.$message({
                        showClose: true,
                        message: '密码不能为空',
                        type: 'error'
                    });
                }else if(this.tel||this.verificationcode||this.password){
                    if(!reg.test(this.tel)){
                        this.$message({
                            showClose: true,
                            message: '手机号格式错误',
                            type: 'error'
                        });
                    }else if(this.password.length<6 || this.password.length>18){
                        this.$message({
                            showClose: true,
                            message: '密码格式格式错误',
                            type: 'error'
                        });
                    } else {

                        let registerData = {
                            mobileNumber:this.tel,
                            verificationCode:this.verificationcode,
                            passWord:this.password
                        };
                        console.log(registerData)
                        //满足需要后的数据请求
                        this.$http.post('/api/syst/signup',this.qs.stringify(registerData)).then((res)=>{
                            console.log(res);
                            //f返回结果参数
                            //code编码    msg注册信息   data数据
                            console.log(res.data.msg);
                            if(res.data.code != 200){
                                this.$message({
                                    showClose: true,
                                    message: res.data.msg,
                                    type: 'error'
                                });
                            }else if(res.data.code == 200){
                                this.$message({
                                    showClose: true,
                                    message: '注册成功！请重新登陆。',
                                    type: 'success'
                                });
                                //成功之后跳转到注册页面
                                this.$router.push({name:'login'});
                            }
                        }).catch((err)=>{
                            console.log(err);
                        });
                    }
                }
            }
        },
        created: function () {

        },
        mounted:function () {

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
