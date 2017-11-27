<template>
    <div class="addEnterpriseCredit">
        <header>新增企业授信 <div class="addEnterpriseCredit_tn" @click="addEnterpriseCreditBack()">返回列表</div></header>
        <addEnterpriseCreditBackChange></addEnterpriseCreditBackChange>
    </div>
</template>

<script>
    import addEnterpriseCreditBackChange from '@/components/bao/EnterpriseCredit/addEnterpriseCreditBackChange'

    export default {
        name: '',
        data() {
            return {}
        },
        components: {
            addEnterpriseCreditBackChange,
        },
        methods: {
            addEnterpriseCreditBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less" scoped>
    .addEnterpriseCredit{
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left:30px;
            font-size: 18px;
            line-height: 55px;
            color:#333;
            position: relative;
            &>.addEnterpriseCredit_tn{
                width: 170px;
                height:36px;
                text-align: center;
                display: inline-block;
                line-height: 36px;
                position: absolute;
                right:50px;
                top:12px;
                font-size: 16px;
                color: #3993FF;
                letter-spacing: 0;
                cursor: pointer;
            }
        }
    }
</style>
