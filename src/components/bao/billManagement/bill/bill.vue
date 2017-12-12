<template>
    <div class="bill">
        <header>
            <span>{{type}}</span>
            <div>
                <el-button @click="backtrack" type="text">返回列表</el-button>
                <el-button @click="edit_" type="text">编辑</el-button>
            </div>
        </header>

        <div class="content">
            <el-form :label-position="'left'" label-width="135px" :model="form">
                <div class="title">1、基本信息</div>
                <div class="box1">
                    <el-form-item>
                        <div class="label" slot="label">企业工商注册名称<span v-if="edit">*</span></div>
                        <el-input v-if="edit" v-model="form.val" placeholder="请输入"></el-input>
                        <div class="info" v-else>{{form.val}}</div>
                    </el-form-item>
                    <el-form-item>
                        <div class="label" slot="label">付款方<span v-if="edit">*</span></div>
                        <el-input v-if="edit" v-model="form.val" placeholder="请输入"></el-input>
                        <div class="info" v-else>{{form.val}}</div>
                    </el-form-item>
                    <el-form-item>
                        <div class="label" slot="label">付款方公司名<span v-if="edit">*</span></div>
                        <el-input v-if="edit" v-model="form.val" placeholder="请输入"></el-input>
                        <div class="info" v-else>{{form.val}}</div>
                    </el-form-item>
                    <el-form-item>
                        <div class="label" slot="label">到账日期<span v-if="edit">*</span></div>
                        <el-date-picker
                            v-model="form.val"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </div>


                <div class="title">
                    <span>1、基本信息</span>
                    <el-button type="primary" size="small" icon="el-icon-plus">继续添加</el-button>
                </div>
                <div class="box2">
                    <div v-for="o in 1" :key="o" class="item">
                        <el-card class="box-card" >
                            <div class="left">
                                <el-form-item>
                                    <div class="label" slot="label">票据类型<span v-if="edit">*</span></div>
                                    <el-select v-if="edit" v-model="form.val">
                                        <el-option label="规模1" value="规模1"></el-option>
                                        <el-option label="规模2" value="规模2"></el-option>
                                    </el-select>
                                    <div class="info" v-else>{{form.val}}</div>
                                </el-form-item>
                                <el-form-item>
                                    <div class="label" slot="label">票据凭证号<span v-if="edit">*</span></div>
                                    <el-input v-if="edit" v-model="form.val" placeholder="请输入"></el-input>
                                    <div class="info" v-else>{{form.val}}</div>
                                </el-form-item>
                                <el-form-item>
                                    <div class="label" slot="label">票据金额（元）<span v-if="edit">*</span></div>
                                    <el-input v-if="edit" v-model="form.val" placeholder="请输入"></el-input>
                                    <div class="info" v-else>{{form.val}}</div>
                                </el-form-item>
                                <el-form-item>
                                    <div class="label" slot="label">单据开立日期<span v-if="edit">*</span></div>
                                    <el-date-picker
                                        v-model="form.val"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                            <div class="right">
                                <el-form-item>
                                    <div class="label" slot="label">付款单号<span v-if="edit">*</span></div>
                                    <el-input v-if="edit" v-model="form.val" placeholder="请输入"></el-input>
                                    <div class="info" v-else>{{form.val}}</div>
                                </el-form-item>
                                <el-form-item>
                                    <div class="label" slot="label">账期（天）<span v-if="edit">*</span></div>
                                    <el-input v-if="edit" v-model="form.val" placeholder="请输入"></el-input>
                                    <div class="info" v-else>{{form.val}}</div>
                                </el-form-item>
                                <el-form-item>
                                    <div class="label" slot="label">票据净额（元）<span v-if="edit">*</span></div>
                                    <el-input v-if="edit" v-model="form.val" placeholder="请输入"></el-input>
                                    <div class="info" v-else>{{form.val}}</div>
                                </el-form-item>
                                <el-form-item>
                                    <div class="label" slot="label">单据起算日期<span v-if="edit">*</span></div>
                                    <el-date-picker
                                        v-model="form.val"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                            <div class="clearFix"></div>
                            <el-form-item>
                                <div class="label" slot="label">单据图片<span v-if="edit">*</span></div>
                                <div>
                                    <el-upload
                                        class="upload-demo"
                                        ref="upload"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :file-list="fileList"
                                        :auto-upload="false">
                                        <el-button
                                            slot="trigger"
                                            size="small"
                                            icon="el-icon-picture-outline"
                                        >选取图片</el-button>
                                    </el-upload>
                                </div>
                            </el-form-item>
                        </el-card>
                    </div>
                </div>

                <el-form-item>
                    <div class="label" slot="label"></div>
                    <el-button type="primary" class="sub">保存并提交</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'addReceivableBill',
        data() {
            return {
                type: '',
                edit: true,
                form: {
                    val: ''
                },
                fileList: []
            }
        },
        // 计算属性
        computed: {},
        // 事件
        methods: {
            backtrack() {
                this.$router.go(-1);
            },
            edit_() {
                this.edit = !this.edit
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        },
        created: function () {
            // 新增应收
            if (this.$route.params.type === 'new') {
                this.type = '新增账单'

            } else if (this.$route.params.type === 'input') {
                // 应收账单
                this.type = '应收账单'
            } else if (this.$route.params.type === 'output') {
                // 应付账单
                this.type = '应付账单'
            };

            //应收账单的添加账单接口
            this.$http.post('/api/receivables/addClientReceivable',this.qs.stringify()).then((res)=>{

            }).catch((err)=>{

            });


        }
    }
</script>

<style lang="less">
    .bill {
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

        .content {
            padding: 0 30px;
            .title {
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                line-height: 55px;
                border-bottom: 1px solid #F0F0F0;
                button{
                    float: right;
                    margin-top:10px;
                }
            }
            .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-select {
                width: 100%;
            }
            .box1 {
                padding-top: 20px;
                width: 550px;
            }
            .box2 {
                &:after {
                    display: block;
                    content: '';
                    clear: both;
                }
                .item{
                    margin:10px -10px;
                    .el-form-item{
                        margin-bottom:15px;
                    }
                }
                .left {
                    width: 50%;
                    float: left;
                    padding-right: 20px;
                }
                .right {
                    float: right;
                    width: 50%;
                    padding-left: 20px;
                }
            }
            .sub{
                margin-top:20px;
                width: 200px;
            }
        }

    }
</style>
