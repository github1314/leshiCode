<template>
    <div class="listDisplay" id="listDisplay">
        <!-- 表单列表展示 -->
        <ul>
            <li>
                <div class="listDisplay_title clearFix">
                    <p>
                        <span>乐小宝</span>
                        <span>2016-12-11</span>
                        <span>12:30:01</span>
                    </p>
                    <div>
                        <router-link :to="{name:'changeEnterpriseCredit'}"  class="modify" tag="a"><i class="el-icon-edit-outline"></i>修改</router-link>
                        <a href="#" class="del" v-if="false"><i class="el-icon-delete"></i>删除</a>
                    </div>
                </div>
                <div class="listDisplay_content">
                    <ul class="clearFix">
                        <li>
                            <p>100,000.00</p>
                            <p>年度预算金额(元)</p>
                        </li>
                        <li>
                            <p>审核中</p>
                            <p>状态</p>
                        </li>
                        <li>
                            <p>2017-06-21</p>
                            <p>失效日期</p>
                        </li>
                        <li>
                            <p>——</p>
                            <p>可用授信金额</p>
                        </li>
                        <li>
                            <a href="#" v-if="true" class="apply">申请变更</a>
                            <a href="#" v-if="false" class="aeapply">重新申请</a>
                            <a href="#" class="apply">查看详情</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'EnterpriseCredit_true',
        data() {
            return {}
        },
        components: {},
        methods: {}
    }
</script>

<style lang="less" scoped>
    .listDisplay{
        &>ul>li{
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
