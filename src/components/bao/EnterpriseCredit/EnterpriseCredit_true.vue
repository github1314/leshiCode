<template>
    <div class="EnterpriseCredit_true" id="EnterpriseCredit_true">
        <!--企业授信有数据（通过）的情况下-->
        <ul class="form_list">
            <li v-for="item in dataList">
                <div class="listDisplay_title clearFix">
                    <p>
                        <span>{{item.productName}}</span>
                        <span>{{item.creatTime}}</span>
                        <!--<span>12:30:01</span>-->
                    </p>
                    <div>
                        <!--<a href="#" class="del" v-if="false"><i class="el-icon-delete"></i>删除</a>-->
                    </div>
                </div>
                <div class="listDisplay_content">
                    <ul class="clearFix">
                        <li>
                            <p>{{item.preCreditAmount}}</p>
                            <p>年度预算金额(元)</p>
                        </li>
                        <li>
                            <p v-if="item.status == '1'">审核中</p>
                            <p v-if="item.status == '2'">已生效</p>
                            <p v-if="item.status == '3'">审核未通过</p>
                            <p>状态</p>
                        </li>
                        <li>
                            <p>{{item.endDate}}</p>
                            <p>失效日期</p>
                        </li>
                        <li>
                            <p>{{item.amountOfCreditAvailable}}</p>
                            <p>可用授信金额</p>
                        </li>
                        <li>
                            <!--<a href="#" v-if="true" class="apply">申请变更</a>-->
                            <router-link  v-if="item.status=='3'" :to="{name:'changeEnterpriseCredit',params:{id:item.limitKey}}" class="aeapply">重新申请</router-link>
                            <router-link v-if="item.status=='2'" class="apply" :to="{name:'changeEnterpriseCredit',params:{id:item.limitKey}}">申请变更</router-link>
                            <router-link class="apply" :to="{name:'changeEnterpriseCredit',params:{id:item.limitKey}}">查看详情</router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <recommend></recommend>
    </div>
</template>

<script>
    import listDisplay from '@/components/bao/listDisplay/listDisplay'
    import recommend from '@/components/bao/recommend/recommend'
    export default {
        name: 'EnterpriseCredit_true',
        data() {
            return {
                dataList:''
            }
        },
        components: {
            listDisplay,
            recommend
        },
        methods: {},
        beforeCreate:function () {
            this.$http.post('/api/creditManageController/creditDetailList',this.qs.stringify({userId:this.$store.state.account.id})).then((res)=>{
                if(res.data.code == 200){
                    this.dataList = res.data.data.creditList;
                }else {
                    this.$notify.error({
                        title: '错误',
                        message: res.data.msg
                    });
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
    }
</script>

<style lang="less" scoped>
    .EnterpriseCredit_true{
        .form_list>li{
            margin-top: 19px;
            &>.listDisplay_title{
                width: 820px;
                height:40px;
                background: #F7F7F7;
                margin: auto;
                &>p{
                    float: left;
                    font-size: 14px;
                    color: #666666;
                    line-height: 40px;
                    padding-left: 18px;
                    &>span:nth-child(2){
                        margin: 0 10px 0 28px;
                    }
                }
                &>div{
                    float: right;
                    &>.modify{
                        height:40px;
                        line-height: 40px;
                        font-size: 14px;
                        color: #3993FF;
                        letter-spacing: 0;
                        padding-right: 18px;
                    }
                    &>.del{
                        height:40px;
                        line-height: 40px;
                        font-size: 14px;
                        color: #F45D4A;
                        letter-spacing: 0;
                        padding-right: 18px;
                    }
                }

            }
            &>.listDisplay_content{
                width: 820px;
                min-height:110px;
                background: #FFFFFF;
                margin: auto;
                border: 1px solid #EBEBEB;
                border-top:none ;
                padding-bottom: 10px;
                &>ul{
                    min-height:110px;
                    display: flex;
                    &>li{
                        flex-grow: 1;
                        margin:auto;
                        float: left;
                        &>p:nth-child(1){
                            font-size: 14px;
                            color: #000000;
                            margin: 0 0 18px 0;
                        }
                        &>p:nth-child(2){
                            font-size: 12px;
                            color: #999999;
                            letter-spacing: 0;
                        }
                        &>p{
                            text-align: center;
                        }
                        &>a.apply {
                            display: block;
                            width: 108px;
                            height:36px;
                            line-height:36px;
                            text-align: center;
                            border: 1px solid #3993FF;
                            border-radius: 2px;
                            font-size: 14px;
                            color: #3993FF;
                            letter-spacing: 0;
                            margin: 11px auto 0 auto;
                        }
                        &>a.aeapply {
                            display: block;
                            width: 108px;
                            height:36px;
                            line-height:36px;
                            text-align: center;
                            border: 1px solid #FF6600;
                            border-radius: 2px;
                            font-size: 14px;
                            color: #FF6600;
                            letter-spacing: 0;
                            margin: 11px auto 0 auto;
                        }
                    }
                }
            }
        }
    }
</style>
