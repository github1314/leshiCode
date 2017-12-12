<template>
    <div class="accountOperation">
        <header>账户操作</header>
        <div class="accountOperation_c" v-loading="loading">
            <p>账户总资产</p>
            <h5>{{bank.accountBalance|currency('')}}</h5>
            <div>
                <el-tooltip content="暂未开通" placement="top" effect="light">
                    <el-button  type="primary" plain class="accountOperation_btn1">提现到本地银行卡
                    </el-button>
                </el-tooltip>
                <el-tooltip content="暂未开通" placement="top" effect="light">
                    <el-button type="primary" class="accountOperation_btn2">向平台账户充值</el-button>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: '',
        data() {
            return {
                loading: true,
                bank: {
                    accountBalance: '',
                }
            }
        },
        components: {},
        methods: {},
        created() {
            this.loading = true;
            // 获取账户开通状态
            this.$http.post('/api/enterpriseAccount/findEnterpriseAccountStatus', this.qs.stringify()).then(response => {
                if (response.data.code === 200) {
                    this.loading = false;
                    if (response.data.data.status === 0) {

                    } else {          // 已经开通账户
                        this.bank = response.data.data.bank;
                    }
                }
            }).catch(error => {
            });
        }
    }
</script>

<style lang="less" scoped>
    .accountOperation {
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left: 30px;
            font-size: 18px;
            line-height: 55px;
            color: #333;
        }
        & > .accountOperation_c {
            width: 854px;
            height: 247px;
            margin: 19px auto;
            border: 1px solid #E4E4E4;
            box-shadow: 0 7px 10px 0 rgba(212, 212, 212, 0.50);
            border-radius: 3px;
            p {
                text-align: center;
                margin-top: 59px;
                font-size: 14px;
                color: #999999;
                letter-spacing: 0;
            }
            h5 {
                text-align: center;
                font-size: 32px;
                color: #333333;
                letter-spacing: 0;
                margin: 15px 0 24px 0;
            }
            & > div {
                text-align: center;
                .accountOperation_btn1 {
                    width: 172px;
                    height: 42px;
                    margin-right: 15px;
                }
                .accountOperation_btn2 {
                    width: 172px;
                    height: 42px;
                    margin-left: 15px;
                }
            }
        }
    }
</style>
