<template>
    <!-- 新增企业授信和修改企业授信的组件 -->
    <div class="addEnterpriseCreditBackChange">
        <el-form ref="form" :model="form" label-width="180px">
            <div class="addEnterpriseCreditBackChange_c">
                <el-form-item>
                    <div class="label" slot="label">授信产品<span>*</span></div>
                    <p>乐小宝</p>
                </el-form-item>
            </div>
            <div class="addEnterpriseCreditBackChange_c">
                <el-form-item>
                    <div class="label" slot="label">授信预算金额<span>*</span></div>
                    <el-input v-model="form.creditLimit" type="number"></el-input>
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
                            点击上传
                        </el-button>
                        <template>
                            <el-table
                                :data="upload.filelist"
                                style="width: 500px">
                                <el-table-column
                                    prop="documentNumCH"
                                    label="类型"
                                    width="300">
                                </el-table-column>
                                <el-table-column
                                    prop="filePath"
                                    label="操作">
                                    <template slot-scope="scope">
                                        <el-button @click="upload_view(scope.row)" size="mini" plain>查看</el-button>
                                        <el-button
                                            @click="upload_remove(scope)"
                                            size="mini"
                                            type="danger"
                                            plain>删除
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-form-item>
                </div>
            </el-form>
        </div>

        <el-form ref="form" :model="form" label-width="180px">
            <div class="addEnterpriseCreditBackChange_c">
                <el-form-item>
                    <div class="label" slot="label">业务联系人<span>*</span></div>
                    <el-input v-model="form.contactName" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">联系人座机号<span>*</span></div>
                    <el-input v-model="form.phone" placeholder="区号-座机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">邮箱<span>*</span></div>
                    <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">备注</div>
                    <el-input v-model="form.note" placeholder="请输入"></el-input>
                </el-form-item>
                <el-button type="primary" class="primarybtn" @click="sub">保存并提交</el-button>
            </div>
            <div class="addEnterpriseCreditBackChange_c">
                <el-form-item>
                    <div class="label" slot="label">联系人手机号<span>*</span></div>
                    <el-input v-model="form.mobile" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">传真<span>*</span></div>
                    <el-input v-model="form.fax" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">合同邮寄地址<span>*</span></div>
                    <el-input v-model="form.address" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="label" slot="label">邮编<span>*</span></div>
                    <el-input v-model="form.postCode" placeholder="请输入"></el-input>
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
                    <el-select v-model="upload.item" placeholder="请选择" style="width: 270px;">
                        <el-option
                            v-for="item in upload.list"
                            :key="item.value"
                            :label="item.codeValue"
                            :value="item.codeKey"
                        >
                        </el-option>
                    </el-select>
                </template>
                <el-upload
                    class="upload"
                    drag
                    :multiple="false"
                    :auto-upload="true"
                    :show-file-list="false"
                    :disabled="!upload.item"
                    accept="image/gif,image/jpeg,image/png,application/pdf"

                    action="/api/creditManageController/upLoadFileToServer"

                    name="files"
                    :data="{documentType:upload.item}"

                    :before-upload="beforeUpload"
                    :on-success="file_success">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                        <div v-if="!upload.item">请先在上方选择证件类型</div>
                        <div v-else>将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png/gif/pdf文件，且不超过6MB</div>
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
                form: {
                    id: '',
                    email: '',
                    creditLimit: '',
                    contactName: '',
                    mobile: '',
                    phone: '',
                    address: '',
                    note: '',
                    fax: '',
                    postCode: ''
                },
                upload: {
                    dialogVisible: false,
                    list: [],
                    item: '',
                    filelist: []
                },
            }
        },
        components: {},
        methods: {
            beforeUpload(file) {
                const size = file.size / 1024 / 1024 < 6;

                if (!size) {
                    this.$message.error('上传证件大小不能超过 6MB!');
                }
                return size;
            },
            // 上传成功后的钩子
            file_success(response, file, fileList) {
                // 上传之后 获取文件列表
                this.upload.filelist.push(response.data.data.files);
                // 关闭上传窗口
                this.upload.dialogVisible = false;
                // 初始化类型选择
                this.upload.item = '';
                /*this.$http.post('/api/creditManageController/imageList').then(response => {
                    if (response.data.code === 200) {

                    }
                }).catch(error => {
                });*/
            },
            upload_view(row) { // 新窗口查看  浏览器不支持pdf会自动下载
                window.open(row.filePath)
            },
            upload_remove(scope) { // 删除某个文件

                console.log(scope);

                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.upload.filelist.splice(scope.$index, 1);

                    /*this.$http.post('/api/creditManageController/deleteImg', this.qs.stringify({
                        evidenceKey: row.evidenceKey,
                    })).then(response => {
                        // 删除成功
                        if (response.data.code === 200) {
                            // 上传之后 获取文件列表
                            this.$http.post('/api/creditManageController/imageList').then(response => {
                                if (response.data.code === 200) {
                                    this.upload.filelist = response.data.data;
                                }
                            }).catch(error => {
                            });
                        }
                    }).catch(error => {
                    });*/
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            // 提交
            sub() {
                let form = this.form;
                if (!this.$v.haveValue(form.creditLimit)) {
                    // 授信预算金额
                    this.$notify({
                        title: '警告',
                        message: '请填写授信预算金额！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form.contactName)) {
                    // 业务联系人
                    this.$notify({
                        title: '警告',
                        message: '请填写业务联系人！',
                        type: 'warning'
                    });
                } else if (!this.$v.isTEL(form.phone)) {
                    // 联系人座机号
                    this.$notify({
                        title: '警告',
                        message: '请正确填写联系人座机号！',
                        type: 'warning'
                    });
                } else if (!this.$v.isEmail(form.email)) {
                    // 邮箱
                    this.$notify({
                        title: '警告',
                        message: '请填写邮箱！',
                        type: 'warning'
                    });
                } else if (!this.$v.isPhoneNum(form.mobile)) {
                    // 联系人手机号
                    this.$notify({
                        title: '警告',
                        message: '请正确填写联系人手机号！',
                        type: 'warning'
                    });
                } else if (!this.$v.isFax(form.fax)) {
                    // 传真
                    this.$notify({
                        title: '警告',
                        message: '请填写传真！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form.address)) {
                    // 合同邮寄地址
                    this.$notify({
                        title: '警告',
                        message: '请填写合同邮寄地址！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form.postCode)) {
                    // 邮编
                    this.$notify({
                        title: '警告',
                        message: '请正确填写邮编！',
                        type: 'warning'
                    });
                } else {
                    this.$http.post('/api/creditManageController/saveEnterpriseCredit', this.qs.stringify(this.form)).then(response => {
                        if (response.data.code === 200) {
                            // 提交成功
                            this.$notify({
                                title: '成功',
                                message: '提交成功，请耐心等待审核！',
                                type: 'success'
                            });
                            this.$router.push({name: 'EnterpriseCredit'});
                        }
                    }).catch(error => {
                    });
                }
            }
        },

        created() {
            this.form.id = this.$route.params.id;

            let QYLX = () => {
                return this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                    typeNum: 'SXWJ'
                }))
            };


            this.$http.all([QYLX()])
                .then(this.$http.spread((res1) => {
                    //
                    if (res1.data.code === 200) {
                        this.upload.list = res1.data.data
                    }
                }));
        }
    }
</script>

<style lang="less" scoped>
    .addEnterpriseCreditBackChange {
        padding-top: 30px;
        .el-form {
            display: flex;
            .addEnterpriseCreditBackChange_c {
                flex-grow: 1;
                & > .el-button {
                    width: 160px;
                    height: 40px;
                    margin-left: 180px;
                }
                .label {
                    text-align: left;
                    font-size: 16px;
                    color: #666;
                    padding-left: 30px;
                    & > span {
                        color: red;
                    }
                }
                .el-input__inner {
                    width: 214px;
                    height: 40px;
                }
                .el-input {
                    padding-right: 45px;
                }
                .el-select {
                    width: 229.5px;
                }
                .el-form-item {
                    & > p {
                        text-indent: 20px;
                        font-size: 16px;
                        color: #333;
                    }
                }
            }
        }
        .upload_img {
            padding: 30px 0 0 0;
            border-top: 1px solid #F0F0F0;
            border-bottom: 1px solid #F0F0F0;
            margin-bottom: 30px;
            .label {
                font-size: 16px;
                color: #666;
            }
        }
        .upload_content {
            text-align: center;
            margin-top: -30px;
            & > div {
                margin: 5px;
            }

        }
        .line_h {
            line-height: 20px;
        }
        .a_color {
            color: #3993FF;
            font-size: 12px;
            letter-spacing: 0;
            text-decoration: underline;
            cursor: pointer;
        }
        .p_color {
            font-size: 12px;
            color: #F45D4A;
            letter-spacing: 0;
        }
    }
</style>
