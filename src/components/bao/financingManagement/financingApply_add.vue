<template>
    <div class="financingApply_add">
        <header>
            <span>新增融资申请</span>
            <div>
                <el-button @click="backtrack" type="text">返回列表</el-button>
            </div>
        </header>
        <div class="main">
            <div class="title">融资申请信息</div>
            <el-form :label-position="'left'" label-width="110px" :model="form">
                <div class="content clearFix">
                    <div class="left">
                        <el-form-item>
                            <div class="label" slot="label">关联应收账单<span>*</span></div>
                            <el-select v-model="form.val">
                                <el-option label="选择1" value="选择1"></el-option>
                                <el-option label="选择2" value="选择2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">申请贷款金额<span>*</span></div>
                            <el-input v-model="form.val" placeholder="请输入金额"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">担保方式<span>*</span></div>
                            <el-select v-model="form.val">
                                <el-option label="选择1" value="选择1"></el-option>
                                <el-option label="选择2" value="选择2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">贷款用途<span>*</span></div>
                            <el-input v-model="form.val" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">贷款对象<span>*</span></div>
                            <el-input v-model="form.val" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">还款方式<span>*</span></div>
                            <el-input v-model="form.val" placeholder="请输入"></el-input>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item>
                            <div class="label" slot="label">关联应收账单<span>*</span></div>
                            <el-input v-model="form.val" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">日期<span>*</span></div>
                            <el-date-picker
                                v-model="form.val"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">担保方式<span>*</span></div>
                            <el-select v-model="form.val">
                                <el-option label="选择1" value="选择1"></el-option>
                                <el-option label="选择2" value="选择2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">贷款用途<span>*</span></div>
                            <el-input v-model="form.val" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">贷款对象<span>*</span></div>
                            <el-input v-model="form.val" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">还款方式<span>*</span></div>
                            <el-input v-model="form.val" placeholder="请输入"></el-input>
                        </el-form-item>
                    </div>
                    <el-form-item>
                        <div class="label" slot="label"></div>
                        <el-button type="primary" class="ss">试算</el-button>
                    </el-form-item>
                </div>
            </el-form>

        </div>
        <shisuanResult></shisuanResult>
    </div>
</template>

<script>
    import shisuanResult from '@/components/bao/financingManagement/shisuanResult'
    export default {
        name: 'financingApply_add',
        // 数据
        data() {
            return {
                form: {
                    val: ''
                },
            }
        },

        // 计算属性
        computed: {},
        components:{
            shisuanResult
        },
        // 事件
        methods: {
            // 返回上一页
            backtrack() {
                this.$router.go(-1);
            },
        },
        created: function () {

        }
    }
</script>

<style lang="less" scoped>
    .financingApply_add {
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left: 30px;
            font-size: 18px;
            line-height: 55px;
            color: #333;
            position: relative;
            & > div {
                position: absolute;
                top: -1px;
                right: 30px;
                & > a {
                    display: inline-block;
                    width: 170px;
                    height: 36px;
                    line-height: 36px;
                    border: 1px solid #FF6600;
                    border-radius: 2px;
                    text-align: center;
                    font-size: 16px;
                    color: #FF6600;
                    margin-right: 20px;
                }
            }
        }
        & > .main {
            padding: 0 30px;
            & > .title {
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                line-height: 55px;
                border-bottom: 1px solid #F0F0F0;
            }
            & .content {
                padding:20px;
                & > div {
                    width: 45%;
                    min-height: 100px;
                    &.left{
                        float: left;
                    }
                    &.right{
                        float: right;
                        margin-right:20px;
                    }
                    .label{
                        span{
                            color:red;
                        }
                    }
                    .el-form-item__content{
                        &>div{
                            width: 100%;
                        }
                    }

                }
                /*试算*/
                .ss{
                    border-radius: 2px;
                    width: 160px;
                    height: 40px;
                }
            }
        }
    }
</style>
