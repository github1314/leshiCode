<template>
    <div class="EnterpriseCredit_auditing">
        <!--企业授信审核中的情况下-->
        <div>
            <img src="http://placeholder.qiniudn.com/90x90" alt="">
            <p>你的企业正在审核中，将会在提交后<span>2-3</span>个工作日</p>
            <p>完成审核！请耐心等待～</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'EnterpriseCredit_auditing',
        data() {
            return {}
        },
        components: {},
        methods: {}
    }
</script>

<style lang="less" scoped>
    .EnterpriseCredit_auditing{
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
                color: #666666;
                line-height: 22px;
                &>span{
                    color: #EE5C49;
                }
            }
        }
    }
</style>
