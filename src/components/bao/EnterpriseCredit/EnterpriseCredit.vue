<template>
    <div class="EnterpriseCredit">
        <header>企业授信<router-link class="EnterpriseCredit_btn" :to="{name:'addEnterpriseCredit',params:{id:1}}" @click="foo()">新增授信</router-link></header>
        <!-- 通过 -->
        <EnterpriseCredit_true v-if="EnterpriseCreditShow==1"></EnterpriseCredit_true>
        <!-- 审核中 -->
        <EnterpriseCredit_auditing v-if="EnterpriseCreditShow==2"></EnterpriseCredit_auditing>
        <!-- 未通过 -->
        <EnterpriseCredit_false v-if="EnterpriseCreditShow==3"></EnterpriseCredit_false>
        <!-- 没有权限 -->
        <EnterpriseCredit_NoJurisdiction v-if="EnterpriseCreditShow==4"></EnterpriseCredit_NoJurisdiction>
    </div>
</template>

<script>

    import EnterpriseCredit_true from  '@/components/bao/EnterpriseCredit/EnterpriseCredit_true'
    import EnterpriseCredit_auditing from  '@/components/bao/EnterpriseCredit/EnterpriseCredit_auditing'
    import EnterpriseCredit_false from  '@/components/bao/EnterpriseCredit/EnterpriseCredit_false'
    import EnterpriseCredit_NoJurisdiction from  '@/components/bao/EnterpriseCredit/EnterpriseCredit_NoJurisdiction'
    import addEnterpriseCredit from  '@/components/bao/EnterpriseCredit/addEnterpriseCredit'

    export default {
        name: 'EnterpriseCredit',
        data() {
            return {
                EnterpriseCreditShow:1
            }
        },
        components: {
            EnterpriseCredit_true,
            EnterpriseCredit_auditing,
            EnterpriseCredit_false,
            EnterpriseCredit_NoJurisdiction,
            addEnterpriseCredit
        },
        methods: {
            foo(){
                alert(111)
            }
        }
    }
</script>

<style lang="less" scoped>
    .EnterpriseCredit{
        & > header {
                height: 55px;
                border-bottom: 1px solid #f0f0f0;
                padding-left:30px;
                font-size: 18px;
                line-height: 55px;
                color:#333;
                position: relative;
            &>.EnterpriseCredit_btn{
                width: 170px;
                height:36px;
                border: 1px solid #FF6600;
                border-radius: 2px;
                text-align: center;
                display: inline-block;
                line-height: 36px;
                font-size: 16px;
                color: #FF6600;
                position: absolute;
                right:50px;
                top:8px;
            }
        }
    }

</style>
