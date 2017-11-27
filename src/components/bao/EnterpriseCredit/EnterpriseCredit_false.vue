<template>
    <div class="EnterpriseCredit_false">
        <!--企业授信没有值（未通过）的情况下-->
        <div>
            <img src="http://placeholder.qiniudn.com/76x76" alt="">
            <p>尊敬的客户，你暂未通过企业认证</p>
            <a href="#">点击修改信息</a>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'EnterpriseCredit_false',
        data() {
            return {

            }
        },
        components: {},
        methods: {}
    }
</script>

<style lang="less" scoped>
    .EnterpriseCredit_false{
        &>div{
            width: 220px;
            margin: auto;
            text-align: center;
            padding-top: 165px;
            &>p{
                font-size: 14px;
                color: #F45D4A;
                line-height: 14px;
                margin: 26px 0 39px 0;
            }
            &>a{
                display: block;
                width: 220px;
                height:42px;
                background: #3993FF;
                border-radius: 2px;
                text-align: center;
                font-size: 16px;
                color: #FFFFFF;
                line-height: 42px;
            }
        }
    }
</style>
