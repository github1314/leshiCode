<template>
    <div class="financingExamineDetails">
        <header>{{type}}<span @click="back_list()">返回列表</span></header>
        <div>
            <!--  v-loading="xqData==''"-->
        <div class="financingExamineDetails_header">
            <span v-if="code == '0'">状态:待审核</span>
            <span v-if="code == '1'">状态:审核通过</span>
            <span v-if="code == '2'">状态:审核不通过</span>
            <span v-if="code == '3'">状态:已过期</span>
            <span v-if="code == '0'" class="exmineBtn" @click="sh_Btn()">审核</span>
            <span v-if="code == '0'" class="exmineBtn" @click="jj_Btn()">拒绝</span>
            <span class="applyTxt" v-if="!examineBtnShow"> (正在等待付款方审核，请耐心等待或联系付款方)</span>
        </div>
            <div class="financingExamineDetails_h">
            <span>融资申请信息</span>
        </div>
            <div class="financingExamineDetails_c clearFix">
            <div class="financingExamineDetails_c_l">
                <ul>
                    <li>
                        <span>选择关联应收账单</span>
                        <span>{{detailData.receivablesNum}}</span>
                        <!--<span>查看对应账单</span>-->
                        <router-link tag="span" :to="{name:'receivableBill'}">查看对应账单</router-link>
                    </li>
                    <li>
                        <span>申请贷款金额</span>
                        <span>{{detailData.applyAmount | currency('')}}元</span>
                    </li>
                    <li>
                        <span>担保方式</span>
                        <span>{{detailData.assureMeans}}</span>
                    </li>
                    <li>
                        <span>贷款用途</span>
                        <span>{{detailData.loanPurpose}}</span>
                    </li>
                    <li>
                        <span>贷款对象</span>
                        <span>{{detailData.loanFor}}</span>
                    </li>
                    <li>
                        <span>还款方式</span>
                        <span>{{detailData.repaymentType}}</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>应收账单净值</span>
                        <span>{{detailData.receivablesNetAmount | currency('')}}元</span>
                    </li>
                    <li>
                        <span>申请到账日</span>
                        <span>{{detailData.applyAccountTime}}</span>
                    </li>
                    <li>
                        <span>贷款到期日</span>
                        <span>{{detailData.applyEndTime}}</span>
                    </li>
                    <li>
                        <span>贷款投向</span>
                        <span>{{detailData.industryTo}}</span>
                    </li>
                    <li>
                        <span>争议解决方式</span>
                        <span>{{detailData.settlementType}}</span>
                    </li>
                </ul>
            </div>
        </div>
            <shisuanResult :ssData="ssData" :hkData="hkData"></shisuanResult>
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
                examineBtnShow:true,
                dataCode:'',
//                idCode:false,
                //需要传到试算的数据
                ssData:{
                    predictAccount:'',
                    predictHandleFee:'',
                    predictInterest:'',
                    predictServiceFee:'',
                    predictSum:'',
                    procedureType:'',
                    servicePayType:'',
                    repaymentType:'',
                },
                hkData:[{
                    PFEE:'',
                    SFEE:'',
                    amortizedInterest:'',
                    amortizedPrincipal:'',
                    payer:'',
                    period:'',
                    periodMoney:'',
                    repayDate:''
                },{
                    PFEE:'',
                    SFEE:'',
                    amortizedInterest:'',
                    amortizedPrincipal:'',
                    payer:'',
                    period:'',
                    periodMoney:'',
                    repayDate:''
                }],
                code:'',
                detailData:[],
            }
        },
        components: { shisuanResult },
        methods: {
            //返回列表的方法
            back_list(){
                this.$router.go(-1)
            },
            //立即审核通过
            sh_Btn(){
                this.$http.post('/api/financing/selfInspection',this.qs.stringify({applyNum:this.dataCode,approvalResult:'0'})).then((res)=>{
//                    console.log(res.data);
                    if(res.data.code == 200){
                        this.$router.push({name:'financingExamine'});
                    }else if(res.data.code != 200){
                        this.$message({
                            showClose: true,
                            message: res.data.msg,
                            type: 'error'
                        });
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            },
            //拒绝审核通过
            jj_Btn(){
                this.$http.post('/api/financing/selfInspection',this.qs.stringify({applyNum:this.dataCode,approvalResult:'1'})).then((res)=>{
//                    console.log(res.data);
                    if(res.data.code == 200){
                        this.$router.push({name:'financingExamine'});
                    }else if(res.data.code != 200){
                        this.$message({
                            showClose: true,
                            message: res.data.msg,
                            type: 'error'
                        });
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },
        created:function () {
            //查看详情的编号/账单号
            this.dataCode = this.$route.params.id;
            //状态码
            this.code = this.$route.params.code;
            if(this.$route.params.type === 'examine'){
                this.type = '融资申请审核';
                this.examineBtnShow = true;
            }else if(this.$route.params.type === 'apply'){
                this.type = '融资申请';
                this.examineBtnShow = false;
            }
            //融资申请详情的数据的请求
            this.$http.post('/api/financing/applyDetail',this.qs.stringify({applyNum:this.dataCode})).then((res)=>{
//                console.log(res.data);
                this.detailData = res.data.data.applyDetail;
                this.ssData = res.data.data.trialResult;
                this.hkData = res.data.data.periodSchedulesList;
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
        .financingExamineDetails_header{
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
        .financingExamineDetails_h{
            height:60px;
            border-bottom: 1px solid #F0F0F0;
            line-height:60px;
            margin-left: 30px;
            &>span{
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
            }
        }
        .financingExamineDetails_c{
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
        /*.shisuanResult{*/
            /*&>.financingExamineDetails_h{*/
                /*height:60px;*/
                /*border-bottom: 1px solid #F0F0F0;*/
                /*line-height:60px;*/
                /*margin-left: 30px;*/
                /*&>span{*/
                    /*font-size: 16px;*/
                    /*color: #333333;*/
                    /*letter-spacing: 0;*/
                /*}*/
            /*}*/
            /*&>.financingExamineDetails_c{*/
                /*padding: 15px 0 15px 0;*/
                /*margin-left: 30px;*/
                /*border-bottom: 1px solid #F0F0F0;*/
                /*&>.financingExamineDetails_c_l{*/
                    /*float: left;*/
                    /*width: 50%;*/
                    /*&>ul{*/
                        /*&>li{*/
                            /*height:45px;*/
                            /*line-height:45px;*/
                            /*&>span:nth-child(3){*/
                                /*font-size: 16px;*/
                                /*color: #3993FF;*/
                                /*letter-spacing: 0;*/
                                /*padding-left: 20px;*/
                                /*text-decoration: underline;*/
                                /*cursor: pointer;*/
                            /*}*/
                            /*&>span:first-child{*/
                                /*display: inline-block;*/
                                /*width: 150px;*/
                                /*font-size: 16px;*/
                                /*color: #666666;*/
                                /*letter-spacing: 0;*/
                            /*}*/
                            /*&>span:nth-child(2){*/
                                /*display: inline-block;*/
                                /*font-size: 16px;*/
                                /*color: #333333;*/
                                /*letter-spacing: 0;*/
                                /*padding-left: 15px;*/
                            /*}*/
                        /*}*/
                    /*}*/
                /*}*/
                /*&>.financingExamineDetails_c_r{*/
                    /*float: left;*/
                    /*width: 50%;*/
                    /*&>ul{*/
                        /*&>li{*/
                            /*height:45px;*/
                            /*line-height:45px;*/
                            /*&>span:first-child{*/
                                /*display: inline-block;*/
                                /*width: 150px;*/
                                /*font-size: 16px;*/
                                /*color: #666666;*/
                                /*letter-spacing: 0;*/
                            /*}*/
                            /*&>span:last-child{*/
                                /*display: inline-block;*/
                                /*font-size: 16px;*/
                                /*color: #333333;*/
                                /*letter-spacing: 0;*/
                                /*padding-left: 15px;*/
                            /*}*/
                        /*}*/
                    /*}*/
                /*}*/
            /*}*/
            /*&>table{*/
                /*margin: 30px;*/
                /*border-left: 1px solid #EBEBEB ;*/
                /*border-right: 1px solid #EBEBEB ;*/
                /*border-collapse: collapse;*/
                /*.table_h{*/
                    /*height:40px;*/
                    /*background: #F7F7F7;*/
                    /*&>th{*/
                        /*font-size: 14px;*/
                        /*color: #666666;*/
                    /*}*/
                /*}*/
                /*&>tr:not(.table_h){*/
                    /*border-bottom: 1px solid #EBEBEB ;*/
                    /*height:60px;*/
                    /*&>td{*/
                        /*font-size: 14px;*/
                        /*color: #666666;*/
                    /*}*/
                    /*&>td{*/
                        /*text-align: center;*/
                    /*}*/
                /*}*/
            /*}*/
        /*}*/
    }
</style>
