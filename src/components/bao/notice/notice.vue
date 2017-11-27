<template>
        <div>
            <div class="notice">
                <h3>通知</h3>
            </div>
            <div class="notice_content">
                <img src="../../../assets/notice/notice.png" alt="">
                <p>你还没有相关通知～</p>
            </div>
        </div>
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
    .notice{
        h3{
            color: #333;
            height: 55px;
            font-size: 18px;
            line-height: 55px;
            font-weight: 300;
            padding-left: 30px;
            border-bottom: 1px solid #E4E4E4;
        }
    }
    .notice_content{
        text-align: center;
        img{
            width: 55px;
            height:68px;
            margin: 69px 0 22px 0;
        }
        p{
            font-size: 14px;
            color: #666666;
            line-height: 14px;
        }
    }
</style>
