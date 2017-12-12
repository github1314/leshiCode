<template>
    <div class="accountSetting" v-loading="loading">
        <header class="clearFix">
            <span>账户管理</span>
            <span v-if="!edit_show && !status"
                  class="editAccount_r"
                  @click="editAccount_tab">
                    <i class="el-icon-edit-outline"></i>
                    修改
                </span>
        </header>

        <template v-if="status">
            <div class="accountSetting_c">
                <img src="http://placeholder.qiniudn.com/90x90" alt="">
                <p>尊敬的用户,你暂未开通账户,</p>
                <p>请前往开户账户～</p>
            </div>
            <div class="btn_q">
                <el-button type="primary" @click="activate">账户开通</el-button>
            </div>
            <div class="btn_g">
                <!--<el-button disabled="" type="primary">个人用户</el-button>-->
            </div>
        </template>
        <template v-else>
            <div class="editAccount">
                <div class="editAccount_c">
                    <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                        <el-form-item>
                            <div slot="label" class="editAccount_label">
                                <span>开户人名称<span class="editAccount_x" v-if="edit_show">*</span></span>
                            </div>
                            <el-input class="editAccount_input" v-model="formLabelAlign.accountName"
                                      v-if="edit_show"></el-input>
                            <span v-if="!edit_show">{{formLabelAlign.accountName}}</span>
                        </el-form-item>
                        <el-form-item>
                            <div slot="label" class="editAccount_label">
                                <span>账号<span class="editAccount_x" v-if="edit_show">*</span></span>
                            </div>
                            <el-input class="editAccount_input" v-model="formLabelAlign.cardNum"
                                      v-if="edit_show"></el-input>
                            <span v-if="!edit_show" class="editAccount_n">{{formLabelAlign.cardNum | bankNumber}}</span>
                        </el-form-item>
                        <el-form-item>
                            <div slot="label" class="editAccount_label">
                                <span>开户行<span class="editAccount_x" v-if="edit_show">*</span></span>
                            </div>
                            <el-input class="editAccount_input" v-model="formLabelAlign.belongBank"
                                      v-if="edit_show"></el-input>
                            <span v-if="!edit_show">{{formLabelAlign.belongBank}}</span>
                        </el-form-item>
                        <el-form-item>
                            <div slot="label" class="editAccount_label">
                                <span>开户行所在地<span class="editAccount_x" v-if="edit_show">*</span></span>
                            </div>
                            <el-input class="editAccount_input" v-model="formLabelAlign.accountBank"
                                      v-if="edit_show"></el-input>
                            <span v-if="!edit_show">{{formLabelAlign.accountBank}}</span>
                        </el-form-item>
                        <el-form-item>
                            <div slot="label" class="editAccount_label"></div>
                            <el-button type="primary" class="editAccount_btn" v-if="edit_show" @click="sub">
                                保存
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'accountSetting',
        data() {
            return {
                loading: true,
                status: false,
                labelPosition: 'left',
                formLabelAlign: {
                    accountName: '',
                    cardNum: '',
                    belongBank: '',
                    accountBank: '',
                },
                edit_show: false
            }
        },
        components: {},
        methods: {
            activate() {
                this.status = false;
            },
            editAccount_tab() {
                this.edit_show = !this.edit_show;
            },
            sub() {
                let form = this.formLabelAlign;
                if (!this.$v.haveValue(form.accountName)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写开户人名称！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form.cardNum) || isNaN(form.cardNum)) {
                    this.$notify({
                        title: '警告',
                        message: '请正确填写账户号码！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form.belongBank)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写开户行！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form.accountBank)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写开户行所在地！',
                        type: 'warning'
                    });
                } else {
                    this.loading = true;
                    // 获取账户开通状态
                    this.$http.post('/api/enterpriseAccount/saveEnterpriseAccount', this.qs.stringify(this.formLabelAlign)).then(response => {
                        if (response.data.code === 200) {
                            this.loading = false;
                        }
                    }).catch(error => {
                    });

                    this.edit_show = !this.edit_show;
                }
            }
        },
        created() {
            // 获取账户开通状态
            this.$http.post('/api/enterpriseAccount/findEnterpriseAccountStatus', this.qs.stringify()).then(response => {
                if (response.data.code === 200) {
                    this.loading = false;
                    if (response.data.data.status === 0) {
                        // 没有开通
                        this.status = true;
                    } else {
                        this.formLabelAlign = response.data.data.bank;
                        this.status = false;
                    }
                }
            }).catch(error => {
            });
        }
    }
</script>

<style lang="less" scoped>
    .accountSetting {
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left: 30px;
            font-size: 18px;
            line-height: 55px;
            color: #333;
            & > .editAccount_r {
                float: right;
                margin-right: 50px;
                font-size: 16px;
                color: #3993FF;
                letter-spacing: 0;
                cursor: pointer;
            }
        }
        & > .accountSetting_c {
            text-align: center;
            padding-top: 181px;
            padding-bottom: 44px;
            & > p:nth-child(2) {
                margin-top: 29.2px;
            }
            & > p {
                font-size: 14px;
                color: #666666;
            }
        }
        .btn_q, .btn_g {
            text-align: center;
            margin-bottom: 30px;
            button {
                width: 220px;
                background: #3993FF;
                color: #fff;
            }
        }

    }

    .editAccount {
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left: 30px;
            font-size: 18px;
            line-height: 55px;
            color: #333;

        }
        .editAccount_c {
            padding: 30px 30px 30px 80px;
            .editAccount_input {
                width: 240px;
                height: 40px;
            }
            .editAccount_label {
                /*width: 140px;*/
                & > span {
                    font-size: 16px;
                    color: #666666;
                    letter-spacing: 0;
                    .editAccount_x {
                        color: red;
                    }
                }
            }
            .editAccount_btn {
                width: 220px;
                height: 40px;
            }

        }
        .el-form-item__content span{
            color:#555;
            font-size:18px;
        }
    }
</style>
