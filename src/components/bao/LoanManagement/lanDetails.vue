<template>
    <div class="financingExamineDetails">
        <header>我的待还款详情<span @click="back_list()">返回列表</span></header>
        <div class="financingExamineDetails_header">
            <span>状态:待还款</span><span v-if="!loanBtnShow" class="exmineBtn">申请还款</span><span v-if="loanBtnShow" class="exmineBtn">确认合同</span>
        </div>
        <div class="financingExamineDetails_c clearFix">
            <div class="financingExamineDetails_c_l">
                <ul>
                    <li>
                        <span>贷款编号</span>
                        <span>123123412</span>
                    </li>
                    <li>
                        <span>贷款金额</span>
                        <span>7960.00元</span>
                    </li>
                    <li>
                        <span>利率</span>
                        <span>12%</span>
                    </li>
                    <li>
                        <span>担保方式</span>
                        <span>发票</span>
                    </li>
                    <li>
                        <span>贷款投向</span>
                        <span>工业</span>
                    </li>
                    <li>
                        <span>贷款合同</span>
                        <span>合同编号123</span>
                        <span>预览合同</span>
                    </li>
                    <li>
                        <span>服务费</span>
                        <span>12%</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>产品名称</span>
                        <span>乐小宝</span>
                    </li>
                    <li>
                        <span>贷款到账日</span>
                        <span>2017-09-32</span>
                    </li>
                    <li>
                        <span>贷款到期日</span>
                        <span>2422-04-23</span>
                    </li>
                    <li>
                        <span>贷款用途</span>
                        <span>生产</span>
                    </li>
                    <li>
                        <span>争议解决方式</span>
                        <span>仲裁</span>
                    </li>
                    <li>
                        <span>申请时间</span>
                        <span>2234-34-33 12:22:22</span>
                    </li>
                    <li>
                        <span>手续费</span>
                        <span>12%</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="financingExamineDetails_h">
            <span>贷款明细</span>
        </div>
        <div class="financingExamineDetails_c clearFix">
            <div class="financingExamineDetails_c_l">
                <ul>
                    <li>
                        <span>费用总计</span>
                        <span>233.33元</span>
                    </li>
                    <li>
                        <span>利息</span>
                        <span>7960.00元</span>
                    </li>
                    <li>
                        <span>服务费</span>
                        <span>42.33元</span>
                    </li>
                    <li>
                        <span>属续费</span>
                        <span>33.22元</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>预计到账金额</span>
                        <span>7960.00元</span>
                    </li>
                    <li>
                        <span>还款方式</span>
                        <span>一次性还本付息</span>
                    </li>
                    <li>
                        <span>服务费收取方式</span>
                        <span>先收</span>
                    </li>
                    <li>
                        <span>手续费收取方式</span>
                        <span>先收</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="financingExamineDetails_h">
            <span>还款计划</span>
        </div>
        <table width="850px" cellspacing="0">
            <tr class="table_h">
                <th>还款日</th>
                <th>应还本金(元)</th>
                <th>应还利息(元)</th>
                <th>应还手续费(元)</th>
                <th>应还服务费(元)</th>
                <th>合计(元)</th>
                <th>付款方</th>
            </tr>
            <tr v-for="i in 2" :key="i">
                <td>2018-09-09</td>
                <td>8000.00</td>
                <td>51.56</td>
                <td>--</td>
                <td>12.89</td>
                <td>8045.89</td>
                <td>乐视致新</td>
            </tr>
        </table>
        <div class="financingExamineDetails_h">
            <span>锁定应收款账</span><a href="#">点击查看明细</a>
        </div>
        <div class="financingExamineDetails_c clearFix">
            <div class="financingExamineDetails_c_l">
                <ul>
                    <li>
                        <span>贷款金额</span>
                        <span>233.33元</span>
                    </li>
                    <li>
                        <span>利息</span>
                        <span>7960.00元</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>融资率</span>
                        <span>90.33%</span>
                    </li>
                    <li>
                        <span>付款凭证号</span>
                        <span>2334432244</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import shisuanResult from '@/components/bao/financingManagement/shisuanResult'
    export default {
        name: '',
        data() {
            return {
                type:'',
                loanBtnShow:true
            }
        },
        components: { shisuanResult },
        methods: {
            back_list(){
                this.$router.go(-1)
            }
        },
        created:function () {
            console.log(this.$route);
            if(this.$route.params.type === 'loan'){
                this.type = '我的借款详情';
                this.loanBtnShow = true;
            }else if(this.$route.params.type === 'repayment'){
                this.type = '我的还款详情';
                this.loanBtnShow = false;
            }
        }
    }
</script>

<style lang="less" scoped>
    .financingExamineDetails{
        &>header{
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left:30px;
            font-size: 18px;
            line-height: 55px;
            color:#333;
            position: relative;
            &>span{
                position: absolute;
                top:0px;
                right:61px;
                font-size: 16px;
                color: #3993FF;
                letter-spacing: 0;
                cursor: pointer;
            }
        }
        &>.financingExamineDetails_header{
            height:60px;
            border-bottom: 1px solid #F0F0F0;
            line-height:60px;
            margin-left: 30px;
            &>span:first-child{
                font-size: 20px;
                color: #000000;
                letter-spacing: 0;
            }
            &>span.exmineBtn{
                display: inline-block;
                width: 120px;
                height: 34px;
                border: 1px solid #FF6600;
                border-radius: 2px;
                font-size: 16px;
                color: #FF6600;
                letter-spacing: 0;
                text-align: center;
                line-height:38px;
                margin-left: 20px;
                cursor: pointer;
            }
            &>.applyTxt{
                font-size: 16px;
                color: #999999;
                letter-spacing: 0;
            }
        }
        &>.financingExamineDetails_h{
            height:60px;
            border-bottom: 1px solid #F0F0F0;
            line-height:60px;
            margin-left: 30px;
            &>span{
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
            }
            &>a{
                color: #3993FF;
                font-size:14px;
                margin-left: 20px;
            }
        }
        &>.financingExamineDetails_c{
            padding: 15px 0 15px 0;
            margin-left: 30px;
            border-bottom: 1px solid #F0F0F0;
            &>.financingExamineDetails_c_l{
                float: left;
                width: 50%;
                &>ul{
                    &>li{
                        height:45px;
                        line-height:45px;
                        &>span:nth-child(3){
                            font-size: 16px;
                            color: #3993FF;
                            letter-spacing: 0;
                            padding-left: 20px;
                            text-decoration: underline;
                            cursor: pointer;
                        }
                        &>span:first-child{
                            display: inline-block;
                            width: 150px;
                            font-size: 16px;
                            color: #666666;
                            letter-spacing: 0;
                        }
                        &>span:nth-child(2){
                            display: inline-block;
                            font-size: 16px;
                            color: #333333;
                            letter-spacing: 0;
                            padding-left: 15px;
                        }
                    }
                }
            }
            &>.financingExamineDetails_c_r{
                float: left;
                width: 50%;
                &>ul{
                    &>li{
                        height:45px;
                        line-height:45px;
                        &>span:first-child{
                            display: inline-block;
                            width: 150px;
                            font-size: 16px;
                            color: #666666;
                            letter-spacing: 0;
                        }
                        &>span:last-child{
                            display: inline-block;
                            font-size: 16px;
                            color: #333333;
                            letter-spacing: 0;
                            padding-left: 15px;
                        }
                    }
                }
            }
        }
        &>table{
            margin: 30px 30px 0 30px;
            border-left: 1px solid #EBEBEB ;
            border-right: 1px solid #EBEBEB ;
            border-collapse: collapse;
            .table_h{
                height:40px;
                background: #F7F7F7;
                &>th{
                    font-size: 14px;
                    color: #666666;
                }
            }
            &>tr:not(.table_h){
                border-bottom: 1px solid #EBEBEB ;
                height:60px;
                &>td{
                    font-size: 14px;
                    color: #666666;
                }
                &>td{
                    text-align: center;
                }
            }
        }
    }
</style>
