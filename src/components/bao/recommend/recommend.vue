<template>
    <div class="">
        <div class="recommend">
            <h3>推荐业务</h3>
        </div>
        <div class="recommend_content clearFix">
            <div>
                <p>乐小宝</p>
                <p>优化供应链为企业提供更多可能</p>
            </div>
            <div>
                <ul class="clearFix">
                    <li>
                        <img src="../../../assets/recommend/icon.png" alt="" class="position_top">
                        <span class="span_top">融资成本低</span>
                    </li>
                    <li>
                        <img src="../../../assets/recommend/icon.png" alt="" class="position_top">
                        <span class="span_top">融资期限长</span>
                    </li>
                    <li>
                        <img src="../../../assets/recommend/icon.png" alt="" class="position_bottom">
                        <span class="span_bottom">操作便捷</span>
                    </li>
                    <li>
                        <img src="../../../assets/recommend/icon.png" alt="" class="position_bottom">
                        <span class="span_bottom">额度实时更新</span>
                    </li>
                </ul>
            </div>
            <a href="#">立即申请</a>
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
    /*推荐业务*/
    .recommend {
        h3 {
            color: #333;
            height: 55px;
            font-size: 18px;
            line-height: 55px;
            font-weight: 400;
            padding-left: 30px;
            border-bottom: 1px solid #E4E4E4;
        }
    }
    .recommend_content{
        position: relative;
        width: 853px;
        height:160px;
        border: 1px solid #DFDFDF;
        margin: 30px auto;
        &>div:nth-child(1){
            width: 250px;
            height:100%;
            float: left;
            background-image: linear-gradient(135deg, #FFC953 0%, #FF9B62 100%);
            &>p:nth-child(1){
                font-family:'微软雅黑';
                font-size:35px;
                color: #fff;
                text-align: center;
                margin: 37px 0 11px 0;
            }
            &>p:nth-child(2){
                text-align: center;
                color: #fff;
                font-size:14px;
            }
        }
        &>div:nth-child(2){
            width: 300px;
            height:100%;
            float: left;
            margin-left: 40px;
            &>ul{
                li{
                    float: left;
                    width: 50%;
                    height:80px;
                    position: relative;
                    &>img{
                        width: 35px;
                        height:35px;
                    }
                    &>.position_top{
                        position: absolute;
                        top:38px;
                        left:0;
                    }
                    &>.span_top{
                        display: inline-block;
                        margin: 44px 0 0 50px;
                    }
                    &>.position_bottom{
                        position: absolute;
                        bottom:38px;
                        left:0;
                    }
                    &>.span_bottom{
                        display: inline-block;
                        margin: 14px 0 0 50px;
                    }
                    &>span{
                        font-size:14px;
                        color: rgba(203,203,203,1);
                    }
                }
            }
        }
        &>a{
            display: inline-block;
            width: 140px;
            height:40px;
            line-height:40px;
            background: linear-gradient(left,rgba(255,198,84,1),rgba(255,157,97,1));
            text-align: center;
            color: #fff;
            position: absolute;
            right:78px;
            bottom:62px;
        }
    }
</style>
