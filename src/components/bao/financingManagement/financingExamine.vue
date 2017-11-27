<template>
    <div class="financingExamine">
        <!--<header><span>融资申请审核</span></header>-->
        <header><span>融资申请审核</span></header>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane name="1">
                <span slot="label">全部</span>
                <div>
                    <el-select v-model="value" placeholder="请选择还款方">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <ul class="form_list">
                        <li>
                            <div class="listDisplay_title clearFix">
                                <p>
                                    <span>乐小宝</span>
                                    <span>2016-12-11</span>
                                    <span>12:30:01</span>
                                </p>
                                <div>
                                    <!--<router-link class="modify" tag="a"><i class="el-icon-edit-outline"></i>修改</router-link>-->
                                    <a href="#" class="del" v-if="true"><i class="el-icon-delete"></i>删除</a>
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
                                        <!--<a href="#" v-if="true" class="apply">申请变更</a>-->
                                        <!--<router-link class="apply" tag="a" :to="{name:''}">申请变更</router-link>-->
                                        <router-link class="apply" tag="a" :to="{name:'financingExamineDetails',params:{type:'examine',id:'2'}}">查看详情</router-link>
                                        <router-link class="aeapply" tag="a" :to="{name:''}">重新申请</router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane name="2">
                <span slot="label">待审核<el-badge :value="2" class="item"></el-badge></span>
                <div>
                    <ul class="form_list">
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
                                        <!--<router-link class="apply" tag="a" :to="{name:''}">申请变更</router-link>-->
                                        <router-link class="apply" tag="a" :to="{name:'financingExamineDetails',params:{type:'examine',id:'2'}}">查看详情</router-link>
                                        <router-link class="aeapply" tag="a" :to="{name:''}">重新申请</router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane name="3">
                <span slot="label">审核通过</span>
                <div>
                    <ul class="form_list">
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
                                        <!--<a href="#" v-if="true" class="apply">申请变更</a>-->
                                        <!--<router-link class="apply" tag="a" :to="{name:''}">申请变更</router-link>-->
                                        <router-link class="apply" tag="a" :to="{name:'financingExamineDetails',params:{type:'examine',id:'2'}}">查看详情</router-link>
                                        <router-link class="aeapply" tag="a" :to="{name:''}">重新申请</router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane name="4">
                <span slot="label">审核不通过</span>
                <div>
                    <ul class="form_list">
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
                                        <!--<a href="#" v-if="true" class="apply">申请变更</a>-->
                                        <!--<router-link class="apply" tag="a" :to="{name:''}">申请变更</router-link>-->
                                        <router-link class="apply" tag="a" :to="{name:'financingExamineDetails',params:{type:'examine',id:'2'}}">查看详情</router-link>
                                        <router-link class="aeapply" tag="a" :to="{name:''}">重新申请</router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane name="5">
                <span slot="label">已过期<el-badge :value="5" class="item"></el-badge></span>
                <div>
                    <ul class="form_list">
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
                                        <!--<a href="#" v-if="true" class="apply">申请变更</a>-->
                                        <!--<router-link class="apply" tag="a" :to="{name:''}">申请变更</router-link>-->
                                        <router-link class="apply" tag="a" :to="{name:'financingExamineDetails',params:{type:'examine',id:'2'}}">查看详情</router-link>
                                        <router-link class="aeapply" tag="a" :to="{name:''}">重新申请</router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import listDisplay from '@/components/bao/listDisplay/listDisplay'
    export default {
        name: '',
        data() {
            return {
//                type:"",
                activeName: '1',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        },
        components: {
            listDisplay
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);

            }
        }
    }
</script>

<style lang="less">
    .financingExamine{
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left:30px;
            font-size: 18px;
            line-height: 55px;
            color:#333;
            position: relative;
            &>div{
                position: absolute;
                top:10px;
                right:50px;
                width: 170px;
                height:36px;
                border: 1px solid #FF6600;
                border-radius: 2px;
                line-height:36px;
                text-align: center;
                font-size: 16px;
                color: #FF6600;
                cursor: pointer;
            }
        }
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
        .el-tabs{
            width: 820px;
            margin: auto;
            .el-tabs__nav{
                width: 100% !important;
                display: flex;
                &>.el-tabs__item{
                    flex-grow: 1 !important;
                    text-align: center;
                    height:58px;
                    line-height: 58px;
                }
                &>.el-tabs__item:hover{
                    &>span{
                        color: #F45D4A;
                    }
                }

                &>.el-tabs__active-bar{
                    background: #F45D4A;
                }
            }
            .item{
                margin-top: -17px;
            }
            .is-active{
                color: #F45D4A;
            }
        }
    }
</style>
