<template>
    <!-- 新增企业授信和修改企业授信的组件 -->
    <div class="addEnterpriseCreditBackChange">
        <el-form ref="form" :model="form" label-width="180px">
            <div class="addEnterpriseCreditBackChange_c">
                <el-form-item>
                    <div class="label" slot="label">授信产品<span>*</span></div>
                    <p>乐小宝</p>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">授信预算金额<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">账户名称<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </div>
            <div class="addEnterpriseCreditBackChange_c">
                <el-form-item>
                    <div class="label" slot="label">年度预算<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label" style="line-height: 20px">接受融资贷款账户开户行<span>*</span></div>
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">账号<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </div>
        </el-form>

        <!-- 上传图片 -->
        <div class="upload_img">
            <el-form ref="form" :model="form" label-width="180px">
            <div class="addEnterpriseCreditBackChange_c">
                <el-form-item>
                    <div class="label" slot="label">上传证件<span>*</span></div>
                    <el-button plain
                               icon="el-icon-picture-outline"
                               @click="upload.dialogVisible=true"
                               >
                        <!--{{edit.f4?'开始上传':'查看图片'}}-->
                        点击上传
                    </el-button>
                </el-form-item>

            </div>
            </el-form>
        </div>

        <el-form ref="form" :model="form" label-width="180px">
            <div class="addEnterpriseCreditBackChange_c">
                <el-form-item>
                    <div class="label" slot="label">业务联系人<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">联系人座机号<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">邮箱<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item><el-form-item>
                    <div class="label" slot="label">备注<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-button type="primary" class="primarybtn">保存并提交</el-button>
            </div>
            <div class="addEnterpriseCreditBackChange_c">
                <el-form-item>
                    <div class="label" slot="label">联系人手机号<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">传真<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">合同邮寄地址<span>*</span></div>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </div>

        </el-form>

        <el-dialog
            id="img_upload"
            title="上传证件图片"
            :visible.sync="upload.dialogVisible"
            width="500px">
            <div class="upload_content">
                <template>
                    <el-select v-model="upload.item" placeholder="请选择" @change="title_show">
                        <el-option
                            v-for="(item,index) in upload.list"
                            :key="item.value"
                            :label="item.value"
                            :value="item.value"
                            >
                        </el-option>
                    </el-select>
                    <p :class="{'a_color':title_s=='下载模版','p_color':title_s!='下载模版'}">{{ title_s }}</p>
                </template>
                <el-upload
                    class="upload"
                    drag
                    :action="upload.action">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                        <div>将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png/gif文件，且不超过2MB</div>
                    </div>
                </el-upload>
            </div>
        </el-dialog>

    </div>
</template>

<script>

    export default {
        name: '',
        data() {
            return {
                title_s:"",
                form: {
                    name: '',
                    region: '',
                },
                upload:{
                    dialogVisible:false,
                    action:'https://jsonplaceholder.typicode.com/posts/',
                    list:[{
                        value: '公司章程'
                    }, {
                        value: '验资报告',title:"非必备资料"
                    }, {
                        value: '近两年企业财务报表',title:"经会计师事务所审计"
                    }, {
                        value: '最新一起企业财务报表',
                    }, {
                        value: ' 采购框架协议 ',
                    }, {
                        value: '股东会和董事会同意申请授信协议',title:"下载模版"
                    }, {
                        value: '企业征信报告',
                    }, {
                        value: '预留印鉴卡',title:"下载模版"
                    }],
                    item:'',
                    filelist:[
                        {
                            type:'营业执照',
                            edit:'1111',
                        }
                    ]
                },
            }
        },
        components: {},
        methods: {
            title_show(val){
                if(val == '公司章程'){
                    this.title_s = '非上市公司，需加盖工商局档案查询章；上市公司：与上市公司公开披露章程一致。'
                }else if(val == '验资报告'){
                    this.title_s = '非必备资料'
                }else if(val == '近两年企业财务报表'){
                    this.title_s = '经会计师事务所审计'
                }else if(val == '股东会和董事会同意申请授信协议' || val == '预留印鉴卡'){
                    this.title_s = '下载模版'
                }else {
                    this.title_s = ''
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .addEnterpriseCreditBackChange{
        padding-top: 30px;
        .el-form{
            display: flex;
            .addEnterpriseCreditBackChange_c{
                flex-grow: 1;
                &>.el-button{
                    width: 160px;
                    height:40px;
                    margin-left: 180px;
                }
                .label{
                    text-align: left;
                    font-size:16px;
                    color: #666;
                    padding-left: 30px;
                    &>span{
                        color: red;
                    }
                }
                .el-input__inner{
                    width: 214px;
                    height:40px;
                }
                .el-input{
                    padding-right: 45px;
                }
                .el-select{
                    width: 229.5px;
                }
                .el-form-item{
                    &>p{
                        text-indent:20px;
                        font-size:16px;
                        color: #333;
                    }
                }
            }
        }
        .upload_img{
            padding: 30px 0 0 0;
            border-top: 1px solid #F0F0F0;
            border-bottom: 1px solid #F0F0F0;
            margin-bottom: 30px;
            .label{
                font-size:16px;
                color: #666;
            }
        }
        .upload_content{
            text-align: center;
            margin-top:-30px;
            &>div{
                margin:5px ;
            }

        }
        .line_h{
            line-height: 20px;
        }
        .a_color{
            color: #3993FF;
            font-size: 12px;
            letter-spacing: 0;
            text-decoration: underline;
            cursor: pointer;
        }
        .p_color{
            font-size: 12px;
            color: #F45D4A;
            letter-spacing: 0;
        }
    }
</style>
