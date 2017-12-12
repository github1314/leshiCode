<template>
    <div class="accountQuery clearFix">
        <!-- 账户管理---账单查询 -->
        <header>账单查询</header>
        <div class="account_input clearFix">
            <el-date-picker
                style="margin-left: 0;"
                type="date"
                v-model="search.creatTime"
                value-format="yyyy-MM-dd"
                placeholder="请选择交易日期">
            </el-date-picker>
            <el-input
                placeholder="请输入平台流水号"
                v-model="search.num"
                prefix-icon="el-icon-edit el-input__icon"
            >
            </el-input>
            <el-button type="primary" icon="el-icon-search" @click="search_click">搜索</el-button>
        </div>

        <div v-loading="loading" class="loading">
            <!--  表格 -->
            <table border="0" cellspacing="0">
                <tr class="th_bag">
                    <th>日期</th>
                    <th>客户资金账户</th>
                    <th>客户名称</th>
                    <th>平台业务流水号</th>
                    <th>银行业务流水号</th>
                    <th>交易金额</th>
                    <th>交易结果</th>
                </tr>
                <tbody>
                <tr v-for="i in this.list">
                    <td>{{i.creatTime.time|yymmdd}}</td>
                    <td>{{i.customerCapitalAccount}}</td>
                    <td>{{i.customerName}}</td>
                    <td>{{i.businessTransactionPlatform}}</td>
                    <td>{{i.bankingTransaction}}</td>
                    <td>{{i.transactionAmount|currency('')}}</td>
                    <td>{{i.status===0?'成功':'失败'}}</td>
                </tr>
                </tbody>
            </table>

            <!-- 分页 -->
            <div class="block paging">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="search.page"
                    :page-size="10"
                    layout="total, prev, pager, next, jumper"
                    :total=total
                    prev-text="上一页"
                    next-text="下一页">
                </el-pagination>
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
                total: 10,
                search: {
                    page: 1,
                    creatTime: '',
                    num: '',
                },
                list: [
                    /*
                    {
                        creatTime: {
                            time: 1
                        },
                        status: 1,                       // 状态
                        transactionAmount: '',           // 金额
                        bankingTransaction: '',          // 银行业务流水号
                        businessTransactionPlatform: '', // 平台业务流水号
                        customerCapitalAccount: '',      // 客户资金账户
                        customerName: '',                // 客户名称
                    }
                    */
                ]
            }
        },
        components: {},
        computed: {},
        methods: {
            search_click() {
                this.search.page=1;
                this.$http.post('/api/enterpriseAccount/findAccountDetailed', this.qs.stringify(this.search)).then(response => {
                    if (response.data.code === 200) {
                        this.loading = false;
                        this.total = response.data.data.pageCount;
                        this.list = response.data.data.TransactionRecordEntity
                    } else {

                    }
                }).catch(error => {
                });
            },
            handleCurrentChange(val) {
                this.$http.post('/api/enterpriseAccount/findAccountDetailed', this.qs.stringify(this.search)).then(response => {
                    if (response.data.code === 200) {
                        this.loading = false;
                        this.total = response.data.data.pageCount;
                        this.list = response.data.data.TransactionRecordEntity
                    } else {

                    }
                }).catch(error => {
                });
            }
        },
        created: function () {
            this.$http.post('/api/enterpriseAccount/findAccountDetailed', this.qs.stringify(this.search)).then(response => {
                if (response.data.code === 200) {this.loading = false;
                    this.total = response.data.data.pageCount;
                    this.list = response.data.data.TransactionRecordEntity
                } else {

                }
            }).catch(error => {
            });
        },
    }
</script>

<style lang="less" scoped>
    .accountQuery {
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left: 30px;
            font-size: 18px;
            line-height: 55px;
            color: #333;
        }
        .account_input {
            padding: 30px 40px;
            & > div, button {
                width: 200px;
                margin-left: 50px;
            }
            & > button {
                margin-left: 130px;
            }
        }
        .loading {
            min-height: 500px;
        }
        table {
            margin-left: 35px;
            width: 800px;
            & > tbody {
                min-height: 500px;
            }
            .th_bag {
                background: #F2F9FE;
            }
            tr:nth-child(2n+1) {
                background: #FAFCFF;
            }
            th {
                height: 50px;
                font-size: 14px;
                color: #4D4D4D;
                letter-spacing: 0;
                line-height: 14px;
                text-align: center;
            }
            tr {
                & > td:nth-child(3) {
                    max-width: 120px;
                }
            }
            td {
                height: 50px;
                font-size: 12px;
                color: #4D4D4D;
                letter-spacing: 0;
                padding: 10px;
                line-height: 18px;
                text-align: center;
            }
        }
        .paging {
            margin-top: 36px;
            float: right;
            margin-right: 64px;
        }
    }
</style>
