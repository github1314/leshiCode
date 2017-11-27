<template>
    <ul class="commonproblem">
        <header></header>
        <li v-for="i in 6">
            <h5>1. 乐小宝的贷款利率是多少？</h5>
            <p>根据企业的综合经营情况核定贷款利率，日利率最低为万分之3.3。根据企业的综合经营情况核定贷款利率，日利率最低为万分之3.3。根据企业的综合经营情况核定贷款利率，日利率最低为万分之3.3。根据企业的综合经营情况核定贷款利率，日利率最低为万分之3.3。根据企业的综合经营情况核定贷款利率，日利率最低为万分之3.3。根据企业的综合经营情况核定贷款利率，日利率最低为万分之3.3。</p>
        </li>
    </ul>
</template>

<script>

    export default {
        name: '',
        data() {
            return {}
        },
        components: {},
        methods: {}
    }
</script>

<style lang="less" scoped>
    .commonproblem{
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left:30px;
            font-size: 18px;
            line-height: 55px;
            color:#333;
        }
        padding: 27px 73px 0 29px;
        &>li{
            &>h5{
                font-size: 12px;
                color: #000;
                line-height: 24px;
            }
            &>p{
                font-size: 12px;
                color: #151515;
                line-height: 24px;
            }
        }
    }
</style>
