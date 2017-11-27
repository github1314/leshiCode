<template>
    <div class="accountQuery clearFix">
        <!-- 账户管理---账单查询 -->
        <header>账单查询</header>
        <div class="account_input clearFix">
            <div>
                <span>交易日期</span>
                <input type="text">
            </div>
            <div>
                <span>平台交易流水号</span>
                <input type="text">
            </div>
            <div>
                <a href="#">查询</a>
            </div>
        </div>

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
            <tr v-for="i in 6">
                <td>2016.09.20</td>
                <td>234654786543</td>
                <td>集成集团</td>
                <td>47890325</td>
                <td>948278904</td>
                <td>100,121,000.00</td>
                <td>成功</td>
            </tr>
        </table>

        <!-- 分页 -->
        <div class="block paging">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-size="6"
                layout="total, prev, pager, next, jumper"
                :total="200"
                prev-text="上一页"
                next-text="下一页">
            </el-pagination>
        </div>
    </div>
</template>

<script>

    export default {
        name: '',
        data() {
            return {
                currentPage4: 4
            }
        },
        components: {},
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style lang="less" scoped>
        .accountQuery{
            & > header {
                height: 55px;
                border-bottom: 1px solid #f0f0f0;
                padding-left:30px;
                font-size: 18px;
                line-height: 55px;
                color:#333;
            }
            .account_input{
                padding: 30px 0 30px 0;
                div:nth-child(1){
                    margin-right: 30px;
                }
                div{
                    float: left;
                    margin-left:30px;
                    span{
                        font-size: 16px;
                        color: #333333;
                        letter-spacing: 0;
                        line-height: 16px;
                    }
                    input{
                        width: 170px;
                        height:40px;
                        margin-left: 25px;
                        border-radius: 5px;
                        padding-left: 10px;
                        border:1px solid #c0ccda;
                    }
                    a{
                        display: block;
                        width: 140px;
                        height:42px;
                        line-height:42px;
                        text-align:center;
                        background: #3993FF;
                        border-radius: 2px;
                        font-size: 16px;
                        color: #FFFFFF;
                    }
                }
            }
            table{
                margin-left: 35px;
                width: 800px;
                .th_bag{
                    background: #F2F9FE;
                }
                tr:nth-child(3),tr:nth-child(5),tr:nth-child(7){
                    background: #FAFCFF;
                }
                th{
                    height:50px;
                    font-size: 14px;
                    color: #4D4D4D;
                    letter-spacing: 0;
                    line-height: 14px;
                    text-align:center;
                }
                td{
                    height:50px;
                    font-size: 12px;
                    color: #4D4D4D;
                    letter-spacing: 0;
                    line-height: 12px;
                    text-align: center;
                }
            }
            .paging{
                margin-top: 36px;
                float: right;
                margin-right: 64px;
            }
        }
</style>
