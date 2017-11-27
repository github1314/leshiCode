<template>
    <div class="overview">
        <header>企业总览</header>
        <div class="chart">
            <div :class="dataValue?'item_true':'item_false'">
                <a href="#" class="details" v-if="dataValue">查看详情1</a>
                <p>可用授信总额度(元)</p>
                <p v-if="dataValue">{{ 20000000.3|currency('') }}</p>
                <p v-else="dataValue">--</p>
            </div>
            <div  :class="dataValue?'item_true':'item_false'">
                <a href="#" class="details" v-if="dataValue">查看详情</a>
                <p>可用应收账款(元)</p>
                <p v-if="dataValue">{{ 50000000|currency('') }}</p>
                <p v-else="dataValue">--</p>
                <a href="#" class="btn" v-if="dataValue">添加应收账款</a>
            </div>
            <div  :class="dataValue?'item_true':'item_false'">
                <a href="#" class="details" v-if="dataValue">查看详情2</a>
                <p>贷款金融(元)</p>
                <p v-if="dataValue">{{ 2000000|currency('') }}</p>
                <p v-else="dataValue">--</p>
                <a href="#" class="btn" v-if="dataValue">还款</a>
            </div>
        </div>
        <Recommend v-if="dataValue"></Recommend>
        <Notice v-if="dataValue"></Notice>
    </div>
</template>

<script>
    import Recommend from '@/components/bao/recommend/recommend'
    import Notice from '@/components/bao/notice/notice'
    export default {
        name: 'overview',
        // 数据
        data() {
            return {
                dataValue:true
            }
        },
        components:{
            Recommend,Notice
        },
        // 计算属性
        computed: {

        },

        // 事件
        methods: {},
        created: function () {

        }
    }

</script>

<style lang="less" scoped>
    .overview {
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left:30px;
            font-size: 18px;
            line-height: 55px;
            color:#333;
        }
        .chart {
            display: flex;
            justify-content: space-between;
            padding: 30px;
            .item_true {
                position: relative;
                top: 0;
                width: 264px;
                height: 190px;
                border-radius: 2px;
                transition: all .3s;
                background: #FFFFFF;
                border: 1px solid #E4E4E4;
                box-shadow: 0 7px 10px 0 rgba(212, 212, 212, 0.50);
                &:hover {
                    top: -1px;
                    box-shadow: 0 15px 30px 0 rgba(212, 212, 212, 0.50);
                }
                &>a.details{
                    position: absolute;
                    right:20px;
                    top:13px;
                    font-size: 12px;
                    color: #3993FF;
                    letter-spacing: 0;
                    line-height: 12px;
                    text-decoration: underline ;
                }
                &>p:nth-child(2){
                    margin-top: 43px;
                    text-align: center;
                    font-size: 12px;
                    color: #666666;
                    letter-spacing: 0;
                    line-height: 16px;
                }
                &>p:nth-child(3){
                    font-size: 28px;
                    color: #1F92F9;
                    letter-spacing: 0;
                    line-height: 26px;
                    text-align: center;
                    margin-top: 18px;
                }
                &>a.btn{
                    display: block;
                    width: 140px;
                    height:36px;
                    background: #3993FF;
                    border-radius: 2px;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height: 36px;
                    text-decoration: none;
                    text-align: center;
                    margin: 25px auto 0 auto;
                }
            }
            .item_false {
                position: relative;
                top: 0;
                width: 264px;
                height: 160px;
                border-radius: 2px;
                transition: all .3s;
                background: #FFFFFF;
                border: 1px solid #E4E4E4;
                box-shadow: 0 7px 10px 0 rgba(212, 212, 212, 0.50);
                &:hover {
                    top: -1px;
                    box-shadow: 0 15px 30px 0 rgba(212, 212, 212, 0.50);
                }
                &>p:nth-child(1){
                    margin-top: 43px;
                    text-align: center;
                    font-size: 12px;
                    color: #666666;
                    letter-spacing: 0;
                    line-height: 16px;
                }
                &>p:nth-child(2){
                    font-size: 28px;
                    color: #3993FF;
                    letter-spacing: 0;
                    line-height: 28px;
                    text-align: center;
                    margin-top: 18px;
                }
            }
        }


    }
</style>
