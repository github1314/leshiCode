<template>
    <div class="shisuanResult">
        <div class="financingExamineDetails_h">
            <span>试算结果</span>
        </div>
        <div class="financingExamineDetails_c clearFix">
            <div class="financingExamineDetails_c_l">
                <ul>
                    <li>
                        <span>预计费用总计</span>
                        <span>{{ssData.predictSum | currency('')}}元</span>
                    </li>
                    <li>
                        <span>预计利息</span>
                        <span>{{ssData.predictInterest | currency('')}}元</span>
                    </li>
                    <li>
                        <span>预计服务费</span>
                        <span>{{ssData.predictServiceFee | currency('')}}元</span>
                    </li>
                    <li>
                        <span>预计手续费</span>
                        <span>{{ssData.predictHandleFee | currency('')}}元</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>预计到账金额</span>
                        <span>{{ssData.predictAccount | currency('')}}元</span>
                    </li>
                    <li>
                        <span>还款方式</span>
                        <span>{{ssData.repaymentType}}</span>
                    </li>
                    <li>
                        <span>服务费收取方式</span>
                        <span>{{ssData.servicePayType}}</span>
                    </li>
                    <li>
                        <span>手续费收取方式</span>
                        <span>{{ssData.procedureType}}</span>
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
            <tr v-for="item in hkData">
                <td>{{item.repayDate}}</td>
                <td>{{item.amortizedPrincipal}}</td>
                <td>{{item.amortizedInterest}}</td>
                <td>{{item.PFEE}}</td>
                <td>{{item.SFEE}}</td>
                <td>{{item.periodMoney}}</td>
                <td>{{item.payer}}</td>
            </tr>
        </table>

    </div>
</template>

<script>

    export default {
        name: 'shisuanResult',
        data() {
            return {
//
            }
        },
        components: {


        },
        methods: {


        },
        props:['ssData','hkData'],
        mounted:function () {

        },
        computed: {

        }
    }
</script>

<style lang="less" scoped>
    .shisuanResult{
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
            margin: 30px;
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
