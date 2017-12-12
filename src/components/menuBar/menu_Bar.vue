<template>
    <div class="menuBar_content" id="menuBar">
        <div class="menuBar_header">
            <div class="headPortrait">
                <img src="../../assets/menuBar/touxiang.png" alt="">
            </div>
            <p>乐视金融</p>
            <div class="authentication">
                <i class="iconfont icon-v"></i>
                <span>企业认证</span>
            </div>
        </div>
        <div class="menuBar_menu">
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu
                        :default-active="active"
                        class="el-menu-vertical"
                        @open="handleOpen"
                        @close="handleClose"
                        :unique-opened="true"
                        router
                    >
                        <el-menu-item index="overview" :route="{name:'overview'}">
                            <span slot="title">企业总览</span>
                        </el-menu-item>
                        <el-menu-item index="certification" :route="{name:'certification'}">
                            <span slot="title">企业认证</span>
                        </el-menu-item>
                        <el-submenu index="3">
                            <template slot="title" class="border_hover">
                                <span>账单管理</span>
                            </template>
                            <el-menu-item index="receivableBill"  :route="{name:'receivableBill'}">应收账单</el-menu-item>
                            <el-menu-item index="BillsPayable" :route="{name:'BillsPayable'}">应付账单</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title" class="border_hover">
                                <span>融资管理</span>
                            </template>
                            <el-menu-item index="financingApply" :route="{name:'financingApply'}">融资申请</el-menu-item>
                            <el-menu-item index="financingExamine" :route="{name:'financingExamine'}">融资申请审核</el-menu-item>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title" class="border_hover">
                                <span>贷款管理</span>
                            </template>
                            <el-menu-item index="loan" :route="{name:'loan'}">我的借款</el-menu-item>
                            <el-menu-item index="repayment" :route="{name:'repayment'}">我的还款</el-menu-item>
                        </el-submenu>

                        <el-submenu index="6">
                            <template slot="title" class="border_hover">
                                <span>账户管理</span>
                            </template>
                            <el-menu-item index="accountSetting"  :route="{name:'accountSetting'}">账户设置</el-menu-item>
                            <el-menu-item index="accountqueryHomepage" :route="{name:'accountqueryHomepage'}">账户查询</el-menu-item>
                            <el-menu-item index="accountOperation" :route="{name:'accountOperation'}">账户操作</el-menu-item>
                        </el-submenu>

                        <el-menu-item index="EnterpriseCredit" :route="{name:'EnterpriseCredit'}">
                            <span slot="title">企业授信</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                active:'overview',
            }
        },
        components: {},
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created: function () {
            this.$route.meta.list ? this.active = this.$route.meta.list:'overview'
        }
    }
</script>

<style lang="less">
    @import "../../assets/less/base.less";

    .menuBar_content {
        .menuBar_header {
            padding-top: 40px;
            padding-bottom: 61px;
            .headPortrait {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin: 0 auto 37px auto;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    cursor: pointer;
                }
            }
            & > p {
                text-align: center;
                font-size: 16px;
                color: #4D4D4D;
            }
            & > .authentication {
                width: 110px;
                height: 36px;
                background: #FFEFED;
                border-radius: 2px;
                margin: 20px auto 0px auto;
                text-align: center;
                line-height: 36px;
                i {
                    color: #FF5E4D;
                }
                span {
                    color: #FF5E4D;
                    font-size: 16px;
                    font-weight: 200;
                }
            }
        }

        .el-menu span{
            margin-left:10px;
        }
        .el-submenu__title+ul li{
            padding-left:55px !important;
        }

        // 设计图颜色与背景

        // 菜单的背景和边框颜色
        /*@menu_bg:#ecf5ff;
        @menu_link_color:rgb(236, 245, 255);*/


        // 重置样式
        .menuBar_menu {
            .el-menu {
                border-right: none !important;
            }
        }
        /*
                .el-menu-item, .el-submenu__title{
                    line-height: 50px;
                    height: 50px;
                    font-size:16px;
                }
                .el-menu-vertical{
                    // 第一层
                    &>.el-menu-item {
                        height: 50px;
                        line-height: 50px;
                        border-left: 5px solid rgba(255,255,255,0);
                        &:hover{
                            border-left: 5px solid @a_hover;
                        }
                        &.is-active{
                            border-left: 5px solid @a_hover;
                            background-color: @menu_bg;
                            &>div{
                                background-color: @menu_bg;
                                border-left: 5px solid @menu_bg;
                            }
                        }
                    }
                }

                .el-submenu {
                    .el-submenu__title{
                        border-left: 5px solid rgba(255,255,255,0);
                        &:hover+ul{
                            background-color: @menu_link_color;

                        }
                        i{
                            font-size:16px;
                            color:@a_hover;
                        }
                    }
                    &.is-active{
                        .el-submenu__title{
                            background-color: @menu_bg;
                            border-left: 5px solid @a_hover;
                        }
                        .el-menu{
                            background-color: @menu_link_color;
                        }
                    }
                    &.is-opened{
                        &:hover{
                            background-color: @menu_link_color;
                            .el-menu{
                                background-color: @menu_link_color;
                            }
                        }

                        // 二级菜单
                        .el-menu-item{
                            &:hover{
                                color:@a_hover;
                            }
                        }
                    }
                }
                */

    }
</style>
