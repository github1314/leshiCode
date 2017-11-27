<template>
    <div id="bg">
        <div class="main-pc bao-main">
            <div class="breadcrumb">
                <router-link :to="{name:'index'}">乐视金融首页</router-link>
                <i class="el-icon-arrow-right"></i>
                <span>我的乐小宝</span>
            </div>
            <!--框体-->
            <section>
                <!--菜单-->
                <aside>
                    <menu_Bar></menu_Bar>
                </aside>
                <!--内容与标题-->
                <section>
                    <!--标题-->
                    <!--<header>菜单名称</header>-->
                    <!--内容-->
                    <main>
                        <router-view name="detail"></router-view>
                        <router-view name="detaila"></router-view>
                    </main>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
    import menu_Bar from '@/components/menuBar/menu_Bar'

    export default {
        name: 'bao',
        // 数据
        data() {
            return {}
        },
        components: {
            menu_Bar
        },
        // 计算属性
        computed: {},

        // 事件
        methods: {},
        created: function () {

        }
    }
</script>

<style lang="less" scoped>
    @import "../../assets/less/base.less";

    #bg {
        min-height: @content_min_height;
        background: @bao_bg;
        padding-bottom: 130px;
    }

    .bao-main {
        .breadcrumb {
            line-height: 40px;
            font-size: 12px;
            color: #4A4A4A;
            a {
                color: #4A4A4A;
                &:hover {
                    color: @a_hover;
                }
            }
            span {
                color: @a_hover;
            }
        }
        /*框体布局*/
        & > section {
            min-height: 948px;
            background: #ffffff;
            display: flex;
            align-items: stretch;
            main {
                padding-bottom: 50px;
            }
            & > aside {
                width: 290px;
                border-right: 1px solid #f0f0f0;
                flex: none;
            }
            & > section {
                flex: auto;
                /*& > header {*/
                /*height: 55px;*/
                /*border-bottom: 1px solid #f0f0f0;*/
                /*padding-left:30px;*/
                /*font-size: 18px;*/
                /*line-height: 55px;*/
                /*color:#333;*/
                /*}*/
            }
        }
    }
</style>
