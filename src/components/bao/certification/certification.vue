<template>
    <div class="certification">
        <header>企业认证</header>
        <el-alert
            v-if="!certification"
            title="您还未进行企业认证，马上申请吧～"
            type="warning"
            show-icon>
        </el-alert>
        <div class="content" v-loading="loading">
            <el-collapse v-model="activeNames" accordion>
                <el-collapse-item title="" name="1">
                    <template slot="title">
                        <div class="title">1、企业认证信息</div>
                    </template>
                    <div class="cf_content">
                        <el-form class="form" ref="form" :model="form1" label-position="left" label-width="150px">
                            <el-form-item>
                                <div class="label" slot="label">企业工商注册名称<span v-if="edit.f1">*</span></div>
                                <el-input v-if="edit.f1" v-model="form1.enterpriseName" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form1.enterpriseName}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">固定电话<span v-if="edit.f1">*</span></div>
                                <el-input v-if="edit.f1" v-model="form1.phone" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form1.phone}}</div>
                            </el-form-item>

                            <el-form-item>
                                <div class="label" slot="label">所属行业<span v-if="edit.f1">*</span></div>
                                <el-select v-if="edit.f1" v-model="form1.belongIndustry">
                                    <el-option v-for="i in select.SSHY" :key="i.codeKey" :label="i.codeValue"
                                               :value="i.codeKey"></el-option>
                                </el-select>
                                <div class="info" v-else v-for="i in select.SSHY" :key="i.codeKey">
                                    <template v-if="form1.belongIndustry===i.codeKey">{{i.codeValue}}</template>
                                </div>
                            </el-form-item>

                            <el-form-item>
                                <div class="label" slot="label">企业规模<span v-if="edit.f1">*</span></div>
                                <el-select v-if="edit.f1" v-model="form1.enterpriseScale">
                                    <el-option v-for="i in select.QYGM" :key="i.codeKey" :label="i.codeValue"
                                               :value="i.codeKey"></el-option>
                                </el-select>
                                <div class="info" v-else v-for="i in select.QYGM" :key="i.codeKey">
                                    <template v-if="form1.enterpriseScale===i.codeKey">{{i.codeValue}}</template>
                                </div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">企业类型<span v-if="edit.f1">*</span></div>
                                <el-select v-if="edit.f1" v-model="form1.enterpriseType">
                                    <el-option v-for="i in select.QYLX" :key="i.codeKey" :label="i.codeValue"
                                               :value="i.codeKey"></el-option>
                                </el-select>
                                <div class="info" v-else v-for="i in select.QYLX" :key="i.codeKey">
                                    <template v-if="form1.enterpriseType===i.codeKey">{{i.codeValue}}</template>
                                </div>
                            </el-form-item>

                            <el-form-item>
                                <div class="label" slot="label">营业地址<span v-if="edit.f1">*</span></div>
                                <el-cascader
                                    :options="options"
                                    v-model="address"
                                    separator=" "
                                    expand-trigger="hover"
                                    :disabled="!edit.f1"
                                    :class="{address_disabled:!edit.f1}"
                                    :props="{
                                        label:'cityName',
                                        value:'cityCode',
                                        children:'children'
                                    }"
                                    @change="">
                                </el-cascader>
                                <el-input
                                    v-if="edit.f1"
                                    v-model="form1.enterpriseAddr"
                                    placeholder="请输入详细地址"></el-input>
                                <div class="info" v-else>{{form1.enterpriseAddr}}</div>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" v-if="edit.f1" @click="form1_sub">下一步</el-button>
                                <el-button plain v-else @click="form1edit" icon="el-icon-edit">编辑</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="" name="2">
                    <template slot="title">
                        <div class="title">2、法人代表信息</div>
                    </template>
                    <div class="cf_content">
                        <el-form class="form" ref="form" :model="form2" label-position="left" label-width="150px">
                            <el-form-item>
                                <div class="label" slot="label">法人代表姓名<span v-if="edit.f2">*</span></div>
                                <el-input v-if="edit.f2" v-model="form2.legalPersonName" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form2.legalPersonName}}</div>
                            </el-form-item>

                            <el-form-item label="特殊资源">
                                <div class="label" slot="label">法人代表性别<span v-if="edit.f2">*</span></div>
                                <el-radio-group v-if="edit.f2" style="line-height: 50px;"
                                                v-model="form2.legalPersonSex">
                                    <el-radio label="1">男</el-radio>
                                    <el-radio label="0">女</el-radio>
                                </el-radio-group>
                                <div class="info" v-else>{{form2.legalPersonSex==1?'男':'女'}}</div>
                            </el-form-item>
                            <el-form-item style="margin-top: -10px;">
                                <div class="label" slot="label">法人代表手机号<span v-if="edit.f2">*</span></div>
                                <el-input v-if="edit.f2" v-model="form2.legalPersonTelNo" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form2.legalPersonTelNo}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">法人代表证件类型<span v-if="edit.f2">*</span></div>
                                <el-select v-if="edit.f2" v-model="form2.legalCertificatesType">
                                    <el-option v-for="i in select.ZJLX" :key="i.codeKey" :label="i.codeValue"
                                               :value="i.codeKey"></el-option>
                                </el-select>
                                <div class="info" v-else v-for="i in select.ZJLX" :key="i.codeKey">
                                    <template v-if="form2.legalCertificatesType===i.codeKey">{{i.codeValue}}</template>
                                </div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">法人代表证件号<span v-if="edit.f2">*</span></div>
                                <el-input v-if="edit.f2" v-model="form2.legalCertificatesNo"
                                          placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form2.legalCertificatesNo}}</div>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" v-if="edit.f2" @click="form2_sub">下一步</el-button>
                                <el-button plain v-else @click="form2edit" icon="el-icon-edit">编辑</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        <div class="title">3、紧急联系人信息</div>
                    </template>
                    <div class="cf_content">
                        <el-form class="form" ref="form" :model="form3" label-position="left" label-width="150px">
                            <el-form-item>
                                <div class="label" slot="label">姓名<span v-if="edit.f3">*</span></div>
                                <el-input v-if="edit.f3" v-model="form3.contactName" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form3.contactName}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">手机号<span v-if="edit.f3">*</span></div>
                                <el-input v-if="edit.f3" v-model="form3.contactMobile" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form3.contactMobile}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">紧急联系人类型<span v-if="edit.f3">*</span></div>
                                <el-select v-if="edit.f3" v-model="form3.contactType">
                                    <el-option v-for="i in select.JJLXRLX" :key="i.codeKey" :label="i.codeValue"
                                               :value="i.codeKey"></el-option>
                                </el-select>
                                <div class="info" v-else v-for="i in select.JJLXRLX" :key="i.codeKey">
                                    <template v-if="form3.contactType===i.codeKey">{{i.codeValue}}</template>
                                </div>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" v-if="edit.f3" @click="form3_sub">下一步</el-button>
                                <el-button plain v-else @click="form3edit" icon="el-icon-edit">编辑</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="4">
                    <template slot="title">
                        <div class="title">
                            4、证件上传 <span>(仅支持jpg、png、gif、pdf格式文件，图片大小不超过6M。)</span>
                        </div>
                    </template>

                    <div class="cf_content">
                        <el-form class="form" v-if="!edit.f1" ref="form" :model="form4" label-position="left"
                                 label-width="150px">
                            <el-form-item>
                                <div class="label" slot="label">证件图片<span v-if="edit.f4">*</span></div>
                                <el-button plain
                                           icon="el-icon-picture-outline"
                                           v-if="edit.f4"
                                           @click="upload.dialogVisible=true">
                                    {{'开始上传'}}
                                </el-button>

                                <template>
                                    <el-table
                                        :data="upload.filelist"
                                        style="width: 100%">
                                        <el-table-column
                                            prop="documentNumCH"
                                            label="类型"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="filePath"
                                            label="操作">
                                            <template slot-scope="scope">
                                                <el-button @click="upload_view(scope.row)" size="mini" plain>查看
                                                </el-button>
                                                <el-button
                                                    @click="upload_remove(scope.row)"
                                                    size="mini"
                                                    type="danger"
                                                    plain
                                                    v-if="edit.f4">删除
                                                </el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </template>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" v-if="edit.f4" @click="form4_sub">下一步</el-button>
                                <el-button plain v-else @click="form4edit" icon="el-icon-edit">编辑</el-button>
                            </el-form-item>
                        </el-form>
                        <div v-else class="upload_alert">
                            <h2>请您先提交"1、企业认证信息"的内容</h2>
                        </div>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="5">
                    <template slot="title">
                        <div class="title">5、电子签章</div>
                    </template>
                    <div class="cf_content">
                        <el-form class="form" ref="form" :model="form5" label-position="left" label-width="150px">
                            <el-form-item>
                                <div class="label" slot="label">统一社会信用代码<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.socialCreditCode" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.socialCreditCode}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">组织机构代码<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.orgNum" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.orgNum}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">工商营业执照号<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.businessLicenseNo" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.businessLicenseNo}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">税务登记证号<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.revenueCertificate"
                                          placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.revenueCertificate}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">经办人姓名<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.operatorName" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.operatorName}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">经办人身份证号码<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.operatorIdNo" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.operatorIdNo}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">经办人手机号<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.operatorMobile" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.operatorMobile}}</div>
                            </el-form-item>

                            <el-form-item>
                                <el-button v-if="edit.f5" type="primary" @click="form5_sub">完成</el-button>
                                <el-button v-else plain @click="form5edit" icon="el-icon-edit">编辑</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>

        <el-dialog
            id="img_upload"
            title="上传证件图片"
            :visible.sync="upload.dialogVisible"
            width="500px">

            <div class="upload_content">
                <template>
                    <el-select v-model="upload.item" placeholder="请选择">
                        <el-option
                            v-for="item in upload.list"
                            :key="item.codeKey"
                            :label="item.codeValue"
                            :value="item.codeKey">
                        </el-option>
                    </el-select>
                </template>
                <el-upload
                    class="upload"
                    drag
                    :disabled="!upload.item"
                    :multiple="false"
                    name="files"
                    :data="{documentType:upload.item}"
                    :show-file-list="false"
                    accept="image/gif,image/jpeg,application/pdf"
                    :before-upload="beforeUpload"
                    :on-success="file_success"
                    :auto-upload="true"
                    action="/api/customerEnterprise/upLoadFileToServer">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                        <div v-if="!upload.item">请先在上方选择证件类型</div>
                        <div v-else>将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png/gif文件</div>
                    </div>
                </el-upload>
            </div>
        </el-dialog>
    </div>
</template>

<script>

    export default {
        name: 'certification',
        // 数据
        data() {
            return {
                loading: true,
                certification: false,
                activeNames: '1',
                edit: {
                    f1: true,
                    f2: true,
                    f3: true,
                    f4: true,
                    f5: true,
                },
                address: [],
                form1: {
                    enterpriseName: '',
                    phone: '',
                    enterpriseScale: '',
                    enterpriseType: '',
                    enterpriseAddr: '',
                    belongIndustry: '',

                    belongProvince: '',
                    belongCity: '',
                    belongCounty: '',

                },
                form2: {
                    legalPersonName: '',
                    legalPersonSex: '',
                    legalPersonTelNo: '',
                    legalCertificatesType: '',
                    legalCertificatesNo: ''
                },
                form3: {        // 紧急联系人
                    contactName: '',
                    contactMobile: '',
                    contactType: '',
                },
                form4: {
                    type: '',
                    num_type: '',
                },
                form5: {
                    socialCreditCode: '',
                    orgNum: '',
                    businessLicenseNo: '',
                    revenueCertificate: '',
                    operatorName: '',
                    operatorIdNo: '',
                    operatorMobile: '',
                },
                upload: {
                    dialogVisible: false,
                    action: 'https://jsonplaceholder.typicode.com/posts/',
                    list: [],
                    item: '',
                    filelist: []
                },
                select: {
                    QYLX: [],
                    SSHY: [],
                    QYGM: [],
                    ZJLX: [],
                    JJLXRLX: []
                },
                options: [],
                selectedOptions: [],
            }
        },

        // 计算属性
        computed: {},

        // 事件
        methods: {
            top() {
                // 返回顶端
                document.documentElement.scrollTop = document.body.scrollTop = 0;
                this.activeNames='1';
                const h = this.$createElement;
                this.$notify({
                    title: '请先填写第一步',
                    type: 'error',
                    message: h('i', {style: 'color: teal'}, '请先提交"1、企业认证信息"里面的内容')
                });
            },
            form1edit() {
                this.edit.f1 = !this.edit.f1;
            },
            form2edit() {
                this.edit.f2 = !this.edit.f2;
            },
            form3edit() {
                this.edit.f3 = !this.edit.f3;
            },
            form4edit() {
                this.edit.f4 = !this.edit.f4;
            },
            form5edit() {
                this.edit.f5 = !this.edit.f5;
            },

            /* ======================表单1========================== */
            form1_sub() {
                let form1 = this.form1;
                if (!this.$v.haveValue(form1.enterpriseName)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写企业工商注册名称！',
                        type: 'warning'
                    });
                } else if (!this.$v.isTEL(form1.phone)) {
                    this.$notify({
                        title: '警告',
                        message: '请正确填写固定电话！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form1.belongIndustry)) {
                    this.$notify({
                        title: '警告',
                        message: '请选择所属行业！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form1.enterpriseScale)) {
                    this.$notify({
                        title: '警告',
                        message: '请选择企业规模！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form1.enterpriseType)) {
                    this.$notify({
                        title: '警告',
                        message: '请选择企业类型！',
                        type: 'warning'
                    });
                } else if (this.address.length === 0) {
                    this.$notify({
                        title: '警告',
                        message: '请选择地址！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form1.enterpriseAddr)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写详细地址！',
                        type: 'warning'
                    });
                } else {

                    // this.address是级联需要的数组格式  上传却需要分开的字段  所以这里做了分解
                    let obj = this.form1;
                    obj.belongProvince = this.address[0];
                    obj.belongCity = this.address[1];
                    obj.belongCounty = this.address[2];
                    this.$http.post('/api/customerEnterprise/saveEnterpriseInformation', this.qs.stringify(obj)).then(response => {
                        if(response.data.code===200){
                            this.activeNames='2';
                            this.edit.f1 = false;
                        }
                    }).catch(error => {
                    });
                }
            },

            /* ======================表单2========================== */
            form2_sub() {
                let form2 = this.form2;
                if (this.edit.f1) {
                    this.top();
                } else if (!this.$v.haveValue(form2.legalPersonName)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写法人代表姓名！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form2.legalPersonSex)) {
                    this.$notify({
                        title: '警告',
                        message: '请选择法人代表性别！',
                        type: 'warning'
                    });
                } else if (!this.$v.isPhoneNum(form2.legalPersonTelNo)) {
                    this.$notify({
                        title: '警告',
                        message: '请正确法人代表手机号！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form2.legalCertificatesType)) {
                    this.$notify({
                        title: '警告',
                        message: '请选择法人代表证件类型！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form2.legalCertificatesNo)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写法人代表证件号码！',
                        type: 'warning'
                    });
                } else {
                    this.$http.post('/api/customerEnterprise/saveLegalPerson', this.qs.stringify(this.form2)).then(response => {
                        if(response.data.code===200){
                            this.activeNames='3';
                            this.edit.f2 = false;
                        }
                    }).catch(error => {
                    });
                }
            },


            /* ======================表单3========================== */
            form3_sub() {
                let form3 = this.form3;
                if (this.edit.f1) {
                    this.top();
                } else if (!this.$v.haveValue(form3.contactName)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写紧急联系人姓名！',
                        type: 'warning'
                    });
                } else if (!this.$v.isPhoneNum(form3.contactMobile)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写紧急联系人手机号！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form3.contactType)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写紧急联系人类型！',
                        type: 'warning'
                    });
                } else {
                    this.$http.post('/api/customerEnterprise/saveUrgentContacts', this.qs.stringify(this.form3)).then(response => {
                        if (response.data.code === 200) {
                            this.$notify({
                                title: '成功',
                                message: '紧急联系人信息提交成功！',
                                type: 'success'
                            });
                            this.edit.f3 = false;
                            this.activeNames='4';
                        }
                    }).catch(error => {
                    });
                }
            },
            /* ======================表单4========================== */
            // 证件上传的下一步按钮事件 如果没有上传  就不能点击下一步
            form4_sub() {
                if(this.upload.filelist.length>0){
                    this.activeNames='5';
                    this.edit.f4 = false;
                }
            },
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
                this.$http.post('/api/customerEnterprise/imageList').then(response => {
                    if (response.data.code === 200) {
                        this.upload.filelist = response.data.data;
                        // 关闭上传窗口
                        this.upload.dialogVisible = false;
                        // 初始化类型选择
                        this.upload.item = '';
                    }
                }).catch(error => {
                });
            },
            upload_view(row) { // 新窗口查看  浏览器不支持pdf会自动下载
                window.open(row.filePath)
            },
            upload_remove(row) { // 删除某个文件
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.$http.post('/api/customerEnterprise/deleteImgById', this.qs.stringify({
                        enterpriseImgKey: row.enterpriseImgKey
                    })).then(response => {
                        // 删除成功
                        if (response.data.code === 200) {
                            // 获取已经上传文件列表
                            this.$http.post('/api/customerEnterprise/imageList').then(response => {
                                if (response.data.code === 200) {
                                    this.upload.filelist = response.data.data
                                }
                            }).catch(error => {
                            });
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        }
                    }).catch(error => {
                    });

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            /* ======================表单5========================== */
            /*
            * 表单提交
            * */
            form5_sub() {

                /******************************
                 *
                 * 表单验证采用手动判断的方法，因为elementUI中的红框我觉得太丑了 。。。。。
                 *
                 * */
                let form5 = this.form5;
                if (this.edit.f1) {
                    this.top();
                } else if (!this.$v.haveValue(form5.socialCreditCode)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写统一社会信用代码！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form5.orgNum)) {
                    this.$notify({
                        title: '警告',
                        message: '请填写组织机构代码！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form5.businessLicenseNo)) {
                    this.$notify({
                        title: '警告',
                        message: '工商营业执照号！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form5.revenueCertificate)) {
                    this.$notify({
                        title: '警告',
                        message: '税务登记证号！',
                        type: 'warning'
                    });
                } else if (!this.$v.haveValue(form5.operatorName)) {
                    this.$notify({
                        title: '警告',
                        message: '经办人姓名！',
                        type: 'warning'
                    });
                } else if (!this.$v.isIdCard(form5.operatorIdNo)) {
                    this.$notify({
                        title: '警告',
                        message: '经办人身份证号码填写错误！',
                        type: 'warning'
                    });
                } else if (!this.$v.isPhoneNum(form5.operatorMobile)) {
                    this.$notify({
                        title: '警告',
                        message: '经办人手机号码填写错误！',
                        type: 'warning'
                    });
                } else {
                    this.$http.post('/api/customerEnterprise/saveSignatures', this.qs.stringify(this.form5)).then(response => {
                        if (response.data.code === 200) {
                            this.$notify({
                                title: '成功',
                                message: '信息提交成功！',
                                type: 'success'
                            });
                            this.edit.f5 = false;
                        }
                    }).catch(error => {
                    });
                }
            }
        },
        created: function () {
            /*let getDistrictList = () => {
                return this.$http.post('/api/api/getDistrictList', this.qs.stringify());
            };*/
            let QYLX = () => {
                return this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                    typeNum: 'QYLX'
                }))
            };
            // 所属行业
            let SSHY = () => {
                return this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                    typeNum: 'SSHY'
                }))
            };
            // 企业规模
            let QYGM = () => {
                return this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                    typeNum: 'QYGM'
                }))
            };

            // 证件类型
            let ZJLX = () => {
                return this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                    typeNum: 'ZJLX'
                }))
            };

            // 紧急联系人类型
            let JJLXRLX = () => {
                return this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                    typeNum: 'JJLXRLX'
                }))
            };
            // 证件上传类型
            let KHYXWJ = () => {
                return this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                    typeNum: 'KHYXWJ'
                }))
            };

            let imageList = () => {
                return this.$http.post('/api/customerEnterprise/imageList')
            };

            this.$http.all([imageList(), QYLX(), SSHY(), QYGM(), ZJLX(), JJLXRLX(), KHYXWJ()])
                .then(this.$http.spread((res1, res2, res3, res4, res5, res6, res7) => {

                    //
                    if (res1.data.code === 200) {
                        this.upload.filelist = res1.data.data
                    }
                    // 企业类型
                    if (res2.data.code === 200) {
                        this.select.QYLX = res2.data.data;
                    }
                    // 所属行业
                    if (res3.data.code === 200) {
                        this.select.SSHY = res3.data.data;
                    }
                    // 企业规模
                    if (res4.data.code === 200) {
                        this.select.QYGM = res4.data.data;
                    }
                    // 证件类型
                    if (res5.data.code === 200) {
                        this.select.ZJLX = res5.data.data;
                    }

                    // 紧急联系人类型
                    if (res6.data.code === 200) {
                        this.select.JJLXRLX = res6.data.data;
                    }

                    // 证件上传类型
                    if (res7.data.code === 200) {
                        this.upload.list = res7.data.data
                    }
                    // 请求地址数据
                    let districtList = JSON.parse(sessionStorage.getItem("DistrictList"));
                    if (districtList) {
                        this.options = districtList;
                        this.loading = false;
                    } else {
                        this.$http.post('/api/api/getDistrictList', this.qs.stringify()).then(response => {
                            this.options = response.data.data;
                            sessionStorage.setItem("DistrictList", JSON.stringify(response.data.data));
                            this.loading = false;
                        }).catch(error => {
                        });
                    }
                }));


            /*
            // 企业类型
            this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                typeNum: 'QYLX'
            })).then(response => {
                if (response.data.code === 200) {
                    this.select.QYLX = response.data.data;
                }
            }).catch(error => {
            });

            // 所属行业
            this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                typeNum: 'SSHY'
            })).then(response => {
                if (response.data.code === 200) {
                    this.select.SSHY = response.data.data;
                }
            }).catch(error => {
            });

            //
            this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                typeNum: 'QYGM'
            })).then(response => {
                if (response.data.code === 200) {
                    this.select.QYGM = response.data.data;
                }
            }).catch(error => {
            });
            // 所属行业
            this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                typeNum: 'ZJLX'
            })).then(response => {
                if (response.data.code === 200) {
                    this.select.ZJLX = response.data.data;
                }
            }).catch(error => {
            });


            // 所属行业
            this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                typeNum: 'JJLXRLX'
            })).then(response => {
                if (response.data.code === 200) {
                    this.select.JJLXRLX = response.data.data;
                }
            }).catch(error => {
            });

            // 文件上传类型选择
            this.$http.post('/api/api/getSelMenu', this.qs.stringify({
                typeNum: 'KHYXWJ'
            })).then(response => {
                if (response.data.code === 200) {
                    this.upload.list = response.data.data
                }
            }).catch(error => {
            });

            // 获取已经上传文件列表
            this.$http.post('/api/customerEnterprise/imageList').then(response => {
                if (response.data.code === 200) {
                    this.upload.filelist = response.data.data
                }
            }).catch(error => {
            });

            */
        }
    }
</script>

<style lang="less">
    .certification {
        .address_disabled {
            input {
                border: none;
            }
            .el-input.is-disabled .el-input__inner {
                background-color: #ffffff;
                color: #333;
                font-size: 16px;
            }
            .el-cascader__label {
                color: #333 !important;
                font-size: 16px;
                margin-left: -16px;
            }
            .el-input__suffix {
                display: none;
            }
        }
    }
</style>
<style lang="less" scoped>
    .certification {
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left: 30px;
            font-size: 18px;
            line-height: 55px;
            color: #333;
        }
        .content {
            padding: 20px 30px 70px 30px;
            .title {
                font-size: 16px;
                color: #444;
                font-weight: 700;
                span {
                    font-weight: 300;
                    font-size: 12px;
                }
            }
            .address_disabled {
                input {
                    border: none !important;
                }
            }
        }
        .cf_content {
            .upload_alert {
                padding: 40px 0;
                text-align: center;
                color: #ccc;
            }
            padding-top: 20px;
            .form {
                padding-left: 30px;
                .el-form-item {
                    width: 600px;
                    .el-form-item__content {
                        .el-input, .el-select, .el-cascader {
                            width: 400px;
                        }
                        & > div, span {
                            display: block;
                            width: 100%;
                        }
                    }
                    .label {
                        span {
                            color: red;
                        }
                    }

                    div.info {
                        color: #333;
                        font-size: 16px;
                    }
                }
            }
        }
        .upload_content {
            text-align: center;
            & > div {
                margin: 5px;
            }
        }
    }
</style>
