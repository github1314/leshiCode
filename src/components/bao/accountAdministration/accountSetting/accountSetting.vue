<template>
    <div class="accountSetting">
        <header>账户管理</header>
        <div class="accountSetting_c">
            <img src="http://placeholder.qiniudn.com/90x90" alt="">
            <p>尊敬的用户,你暂未开通企业和个人账户,</p>
            <p>请前往开户账户～</p>
        </div>
        <div class="btn_q">
            <router-link type="primary" tag="el-button" :to="{name:'editAccount'}">企业用户</router-link>
        </div>
        <div class="btn_g">
            <el-button disabled="" type="primary">个人用户</el-button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'accountSetting',
        data() {
            return {}
        },
        components: {},
        methods: {}
    }
</script>

<style lang="less" scoped>
    .accountSetting{
        &>header{
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left:30px;
            font-size: 18px;
            line-height: 55px;
            color:#333;
        }
        &>.accountSetting_c{
            text-align: center;
            padding-top: 181px;
            padding-bottom: 44px;
            &>p:nth-child(2){
                margin-top: 29.2px;
            }
            &>p{
                font-size: 14px;
                color: #666666;
            }
        }
        .btn_q,.btn_g{
            text-align: center;
            margin-bottom: 30px;
            button{
                width: 220px;
                background: #3993FF;
                color: #fff;
            }
        }

    }

</style>
