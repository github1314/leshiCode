<template>
    <div class="EnterpriseCredit_NoJurisdiction">
        <!-- 没有权限 -->
        <div>
            <img src="http://placeholder.qiniudn.com/80x80" alt="">
            <p>你没有该功能的权限！</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'EnterpriseCredit_NoJurisdiction',
        data() {
            return {}
        },
        components: {},
        methods: {}
    }
</script>

<style lang="less" scoped>
    .EnterpriseCredit_NoJurisdiction{
        &>div{
            width: 340px;
            margin: auto;
            text-align: center;
            padding-top: 160px;
            img{
                margin-bottom: 19px;
            }
            p{
                font-size: 14px;
                color: red;
                line-height: 22px;
            }
        }
    }
</style>
