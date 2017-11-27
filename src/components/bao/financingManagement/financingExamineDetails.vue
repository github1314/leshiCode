<template>
    <div class="financingExamineDetails">
        <header>{{type}}<span @click="back_list()">返回列表</span></header>
        <div class="financingExamineDetails_header">
            <span>状态:待审核</span><span v-if="examineBtnShow" class="exmineBtn">审核</span><span class="applyTxt" v-if="!examineBtnShow"> (正在等待付款方审核，请耐心等待或联系付款方)</span>
        </div>
        <div class="financingExamineDetails_h">
            <span>融资申请信息</span>
        </div>
        <div class="financingExamineDetails_c clearFix">
            <div class="financingExamineDetails_c_l">
                <ul>
                    <li>
                        <span>选择关联应收账单</span>
                        <span>天辰集团</span>
                        <span>查看对应账单</span>
                    </li>
                    <li>
                        <span>申请贷款金额</span>
                        <span>7960.00元</span>
                    </li>
                    <li>
                        <span>担保方式</span>
                        <span>发票</span>
                    </li>
                    <li>
                        <span>贷款用途</span>
                        <span>周转</span>
                    </li>
                    <li>
                        <span>贷款对象</span>
                        <span>乐视</span>
                    </li>
                    <li>
                        <span>还款方式</span>
                        <span>一次性还本付息</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>应收账单净值</span>
                        <span>7960.00元</span>
                    </li>
                    <li>
                        <span>申请到账日</span>
                        <span>一个月</span>
                    </li>
                    <li>
                        <span>贷款到期日</span>
                        <span>三个月</span>
                    </li>
                    <li>
                        <span>贷款投向</span>
                        <span>天辰</span>
                    </li>
                    <li>
                        <span>争议解决方式</span>
                        <span>发票</span>
                    </li>
                </ul>
            </div>
        </div>
        <shisuanResult></shisuanResult>
    </div>
</template>

<script>
    import shisuanResult from '@/components/bao/financingManagement/shisuanResult'
    export default {
        name: '',
        data() {
            return {
                type:'',
                examineBtnShow:true
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
            if(this.$route.params.type === 'examine'){
                this.type = '融资申请审核';
                this.examineBtnShow = true;
            }else if(this.$route.params.type === 'apply'){
                this.type = '融资申请';
                this.examineBtnShow = false;
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
    }
</style>
