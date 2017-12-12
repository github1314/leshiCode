<template>
    <div class="accountqueryHomepage">
        <header>账户查询</header>
        <div class="accountqueryHomepage_c" v-loading="loading">
            <h5><span>账户名称：{{bank.accountName}}</span></h5>
            <p><span>资金账户</span><span>{{1234123412 | bankNumber}}</span></p>
            <p><span>账户状态</span><span>{{bank.status===2?'正常':'无效'}}</span></p>
            <p><span>账户余额</span><span>{{bank.accountBalance|currency('')}}</span></p>
            <p><span>冻结金额</span><span>{{bank.freezingBalance|currency('')}}</span></p>
            <router-link class="accountqueryHomepage_p" tag="span" :to="{name:'accountQuery'}">交易明细</router-link>
        </div>
        <recommend></recommend>
    </div>
</template>

<script>
    import recommend from '@/components/bao/recommend/recommend'

    export default {
        name: '',
        data() {
            return {
                loading: true,
                status: true,
                tk: 1,
                bank: {
                    accountName: '',
                    status: 1,
                    accountBalance: '',
                    freezingBalance: '',
                }
            }
        },
        components: {recommend},
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
    .accountqueryHomepage {

        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left: 30px;
            font-size: 18px;
            line-height: 55px;
            color: #333;
        }
        & > .accountqueryHomepage_c {
            width: 854px;
            height: 247px;
            background: #FFFFFF;
            border: 1px solid #E4E4E4;
            box-shadow: 0 7px 10px 0 rgba(212, 212, 212, 0.50);
            border-radius: 3px;
            margin: 19px auto;
            position: relative;
            padding: 41px 30px;
            & > h5 {
                margin-bottom: 15px;
                font-size: 16px;
                color: #333333;
            }
            p {
                margin-top: 18px;
                ont-size: 16px;
                color: #999999;
                letter-spacing: 0;
                & > span:first-child {
                    ont-size: 16px;
                    color: #999999;
                    letter-spacing: 0;
                    margin-right: 30px;
                }
                & > span:last-child {
                    font-size: 16px;
                    color: #333333;
                    letter-spacing: 0;
                }
            }
            & > .accountqueryHomepage_p {
                position: absolute;
                top: 41px;
                right: 29px;
                font-size: 16px;
                color: #3993FF;
                letter-spacing: 0;
                cursor: pointer;
            }
        }
    }
</style>
