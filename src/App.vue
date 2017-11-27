<template>
    <div id="app">
        <header_Bar></header_Bar>
        <div id="content">
            <router-view name="index"></router-view>
            <router-view name="content"></router-view>
        </div>
        <footer_v></footer_v>
    </div>
</template>

<script>
    import header_Bar from '@/components/header/header_bar'
    import footer_v from '@/components/footer/footer'

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            header_Bar,
            footer_v
        },
        methods: {}
    }
</script>

<style lang="less">
    /*引入阿里字体图标库*/
    @import "../static/icon/iconfont.css";
    @import "./assets/less/base.less";
    /*---------全局重置开始----------*/
    html, body {
        color: #666;
        height: 100%;
        font-family: Microsoft YaHei, Arial, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, SimSun, sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
    }

    body,
    div,
    ul,
    ol,
    li,
    dl,
    dt,
    dd,
    p,
    pre,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    input,
    blockquote,
    fieldset,
    button,
    textarea,
    th,
    td {
        margin: 0;
        padding: 0;
        outline:none;
        box-sizing: border-box;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        border: none;
        margin: 0;
        padding: 0;
    }

    body {
        min-width: 1200px;
        & > #app {
            min-height: 100vh;
            & > #content {
                min-height: @content_min_height;
            }
        }
    }


</style>
