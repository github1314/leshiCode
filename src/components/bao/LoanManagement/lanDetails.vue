<template>
    <div class="financingExamineDetails">
        <header>{{title}}<span @click="back_list()">返回列表</span></header>
        <div class="financingExamineDetails_header">
            <span v-if="code == '1'">状态:待审核</span>
            <span v-if="code == '2'">状态:审核不通过</span>
            <span v-if="code == '3'">状态:待签章</span>
            <span v-if="code == '4'">状态:待放款</span>
            <span v-if="code == '5'">状态:已放款</span>
            <span v-if="code == '6'">状态:待还款</span>
            <span v-if="code == '7'">状态:已逾期</span>
            <span v-if="code == '8'">状态:待还款</span>
            <span v-if="code == '9'">状态:已还款</span>
            <span v-if="code == '10'">状态:已逾期</span>
            <span v-if="code =='11'">状态:还款失败</span>
            <router-link v-if="!loanBtnShow" class="exmineBtn" :to="{name:'repaymentPage',params:{id:loanData1.applyNum||0}}" tag="span">申请还款</router-link>
        </div>
        <div class="financingExamineDetails_c clearFix">
            <div class="financingExamineDetails_c_l">
                <ul>
                    <li>
                        <span>贷款编号</span>
                        <span>{{loanData1.applyNum}}</span>
                    </li>
                    <li>
                        <span>贷款金额</span>
                        <span>{{loanData1.loanAmount | currency('') }}元</span>
                    </li>
                    <li>
                        <span>利率</span>
                        <span>{{loanData1.totalRate}}%</span>
                    </li>
                    <li>
                        <span>担保方式</span>
                        <span>{{loanData1.assureMeans}}</span>
                    </li>
                    <li>
                        <span>贷款投向</span>
                        <span>{{loanData1.industryTo}}</span>
                    </li>
                    <li>
                        <span>贷款合同</span>
                        <span class="ht_style" @click="ht_details(loanData1.reserveContractNum)">{{loanData1.reserveContractNum}}</span>
                        <!--<span>预览合同</span>-->
                    </li>
                    <li>
                        <span>服务费</span>
                        <span>{{loanData1.serverFee}}%</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>产品名称</span>
                        <span>{{loanData1.productName}}</span>
                    </li>
                    <li>
                        <span>贷款到账日</span>
                        <span>{{loanData1.applyAccountTime}}</span>
                    </li>
                    <li>
                        <span>贷款到期日</span>
                        <span>{{loanData1.endTime}}</span>
                    </li>
                    <li>
                        <span>贷款用途</span>
                        <span>{{loanData1.loanPurpose}}</span>
                    </li>
                    <li>
                        <span>争议解决方式</span>
                        <span>{{loanData1.settlementType}}</span>
                    </li>
                    <li>
                        <span>申请时间</span>
                        <span>{{loanData1.applyTime}}</span>
                    </li>
                    <li>
                        <span>手续费</span>
                        <span>{{loanData1.counterFee}}%</span>
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
                        <span>{{loanData2.periodMoney | currency('')}}元</span>
                    </li>
                    <li>
                        <span>利息</span>
                        <span>{{loanData2.interest | currency('')}}元</span>
                    </li>
                    <li>
                        <span>服务费</span>
                        <span>{{loanData2.serverFee | currency('')}}元</span>
                    </li>
                    <li>
                        <span>手续费</span>
                        <span>{{loanData2.counterFee | currency('')}}元</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>预计到账金额</span>
                        <span>{{loanData2.recvMoney | currency('')}}元</span>
                    </li>
                    <li>
                        <span>还款方式</span>
                        <span>{{loanData2.repaymentType}}</span>
                    </li>
                    <li>
                        <span>服务费收取方式</span>
                        <span>{{loanData2.servicePayType}}</span>
                    </li>
                    <li>
                        <span>手续费收取方式</span>
                        <span>{{loanData2.procedureType}}</span>
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
            <tr v-for="item in loanData3">
                <td>{{item.repayDate}}</td>
                <td>{{item.amortizedPrincipal}}</td>
                <td>{{item.amortizedInterest}}</td>
                <td>{{item.PFEE}}</td>
                <td>{{item.SFEE}}</td>
                <td>{{item.periodMoney}}</td>
                <td>{{item.payer}}</td>
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
                        <span>{{loanData4.loanAmount | currency('')}}元</span>
                    </li>
                    <li>
                        <span>利息</span>
                        <span>{{loanData4.interest | currency('')}}元</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>融资率</span>
                        <span>{{loanData4.financingRate}}%</span>
                    </li>
                    <li>
                        <span>付款凭证号</span>
                        <span>{{loanData4.evidenceOfPaymentNum}}</span>
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
                title:'',
                loanBtnShow:true,
                loanData1:'',
                loanData2:'',
                loanData3:'',
                loanData4:'',
            }
        },
        components: { shisuanResult },
        methods: {
            back_list(){
                this.$router.go(-1);
            },
            ht_details(val){
//                console.log(val);
                this.$http.post('/api/loan1/getContract',this.qs.stringify({reserveContractNum:val})).then((res)=>{
                    if(res.data.code == 200){
                        window.open(res.data.data.contrackURL);
                    }else {
                        this.$notify.error({
                            title: '错误',
                            message: res.data.msg
                        });
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },
        created:function () {
            let _this = this;
             //查看详情状态吗
            this.code = this.$route.params.code;
            //查看详情的编号
            this.id = this.$route.params.id;
            if(this.$route.params.type === 'loan'){
                this.title = '我的借款详情';
                this.loanBtnShow = true;
            }else if(this.$route.params.type === 'repayment'){
                this.title = '我的还款详情';
                this.loanBtnShow = false;
            }
            //贷款详情的谁请求
            this.$http.post('/api/loan1/loanDetail',this.qs.stringify({applyNum:this.id})).then((res)=>{
                _this.loanData1 = res.data.data.detail;
                _this.loanData2 = res.data.data.loanParticulars;
                _this.loanData3 = res.data.data.periodSchedulesList;
                _this.loanData4 = res.data.data.lockAccountsReceivable;
            }).catch((err)=>{
            });
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
                        &>span.ht_style{
                            font-size: 16px;
                            color: #3993FF !important;
                            letter-spacing: 0;
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
