<template>
    <div class="certification">
        <header>企业认证</header>
        <el-alert
            v-if="!certification"
            title="您还未进行企业认证，马上申请吧～"
            type="warning"
            show-icon>
        </el-alert>
        <div class="content">
            <el-collapse v-model="activeNames">
                <el-collapse-item title="" name="1">
                    <template slot="title">
                        <div class="title">1、企业认证信息</div>
                    </template>
                    <div class="cf_content">
                        <el-form class="form" ref="form" :model="form1" label-position="left" label-width="150px">
                            <el-form-item>
                                <div class="label" slot="label">企业工商注册名称<span v-if="edit.f1">*</span></div>
                                <el-input v-if="edit.f1" v-model="form1.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form1.name}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">固定电话<span v-if="edit.f1">*</span></div>
                                <el-input v-if="edit.f1" v-model="form1.phone" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form1.phone}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">企业规模<span v-if="edit.f1">*</span></div>
                                <el-select v-if="edit.f1" v-model="form1.scale">
                                    <el-option label="规模1" value="规模1"></el-option>
                                    <el-option label="规模2" value="规模2"></el-option>
                                </el-select>
                                <div class="info" v-else>{{form1.scale}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">企业类型<span v-if="edit.f1">*</span></div>
                                <el-select v-if="edit.f1" v-model="form1.type">
                                    <el-option label="类型1" value="类型1"></el-option>
                                    <el-option label="类型2" value="类型2"></el-option>
                                </el-select>
                                <div class="info" v-else>{{form1.type}}</div>
                            </el-form-item>

                            <el-form-item>
                                <div class="label" slot="label">营业地址<span v-if="edit.f1">*</span></div>
                                <el-cascader
                                    v-if="edit.f1"
                                    :options="options"
                                    v-model="form1.address"
                                    @change="">
                                </el-cascader>
                                <el-input
                                    v-if="edit.f1"
                                    v-model="form1.address_info"
                                    placeholder="请输入详细地址"></el-input>
                                <div class="info" v-else>{{`${form1.address} ${form1.address_info}`}}</div>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">下一步</el-button>
                                <el-button plain @click="form1edit" icon="el-icon-edit">编辑</el-button>
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
                                <el-input v-if="edit.f2" v-model="form2.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form2.name}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">法人代表手机号<span v-if="edit.f2">*</span></div>
                                <el-input v-if="edit.f2" v-model="form2.phone" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form2.phone}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">法人代表证件类型<span v-if="edit.f2">*</span></div>
                                <el-select v-if="edit.f2" v-model="form2.type">
                                    <el-option label="类型1" value="类型1"></el-option>
                                    <el-option label="类型2" value="类型2"></el-option>
                                </el-select>
                                <div class="info" v-else>{{form2.type}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">法人代表证件号<span v-if="edit.f2">*</span></div>
                                <el-input v-if="edit.f2" v-model="form2.num" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form2.num}}</div>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">下一步</el-button>
                                <el-button plain @click="form2edit" icon="el-icon-edit">编辑</el-button>
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
                                <div class="label" slot="label">法人代表姓名<span v-if="edit.f3">*</span></div>
                                <el-input v-if="edit.f3" v-model="form3.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form3.name}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">法人代表手机号<span v-if="edit.f3">*</span></div>
                                <el-input v-if="edit.f3" v-model="form3.phone" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form3.phone}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">法人代表证件类型<span v-if="edit.f3">*</span></div>
                                <el-select v-if="edit.f3" v-model="form3.type">
                                    <el-option label="类型1" value="类型1"></el-option>
                                    <el-option label="类型2" value="类型2"></el-option>
                                </el-select>
                                <div class="info" v-else>{{form3.type}}</div>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">下一步</el-button>
                                <el-button plain @click="form3edit" icon="el-icon-edit">编辑</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="4">
                    <template slot="title">
                        <div class="title">
                            4、证件上传 <span>(仅支持jpg、png、gif格式图片，图片大小不超过2M。)</span>
                        </div>
                    </template>

                    <div class="cf_content">
                        <el-form class="form" ref="form" :model="form4" label-position="left" label-width="150px">
                            <el-form-item>
                                <div class="label" slot="label">企业类型<span v-if="edit.f4">*</span></div>
                                <el-select v-if="edit.f4" v-model="form4.type">
                                    <el-option label="类型1" value="类型1"></el-option>
                                    <el-option label="类型2" value="类型2"></el-option>
                                </el-select>
                                <div class="info" v-else>{{form4.type}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">企业证件类型<span v-if="edit.f4">*</span></div>
                                <el-select v-if="edit.f4" v-model="form4.num_type">
                                    <el-option label="" value="类型1"></el-option>
                                    <el-option label="类型2" value="类型2"></el-option>
                                </el-select>
                                <div class="info" v-else>{{form4.num_type}}</div>
                            </el-form-item>

                            <el-form-item>
                                <div class="label" slot="label">证件图片<span v-if="edit.f4">*</span></div>
                                <el-button plain
                                           icon="el-icon-picture-outline"
                                           @click="upload.dialogVisible=true">
                                    {{edit.f4?'开始上传':'查看图片'}}
                                </el-button>

                                <template>
                                    <el-table
                                        :data="upload.filelist"
                                        style="width: 100%">
                                        <el-table-column
                                            prop="type"
                                            label="类型"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="edit"
                                            label="操作">
                                            <template slot-scope="scope">
                                                <el-button @click="upload_view(scope.row)" size="mini" plain>查看</el-button>
                                                <el-button
                                                    @click="upload_view(scope.row)"
                                                    size="mini"
                                                    type="danger"
                                                    plain
                                                    v-if="edit.f4">删除</el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </template>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">下一步</el-button>
                                <el-button plain @click="form4edit" icon="el-icon-edit">编辑</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="5">
                    <template slot="title">
                        <div class="title">5、电子签章</div>
                    </template>
                    <div class="cf_content">
                        <el-form class="form" ref="form" :model="form5" label-position="left" label-width="150px">
                            <el-form-item>
                                <div class="label" slot="label">机构名称<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.name}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">统一社会信用代码<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.name}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">阻止机构代码<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.name}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">工商营业执照号<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.name}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">法人代表姓名<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.name}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">经办人姓名<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.name}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">经办人身份证号码<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.name}}</div>
                            </el-form-item>
                            <el-form-item>
                                <div class="label" slot="label">经办人手机号<span v-if="edit.f5">*</span></div>
                                <el-input v-if="edit.f5" v-model="form5.name" placeholder="请输入"></el-input>
                                <div class="info" v-else>{{form5.name}}</div>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">完成</el-button>
                                <el-button plain @click="form5edit" icon="el-icon-edit">编辑</el-button>
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
                            :key="item.value"
                            :label="item.value"
                            :value="item.value">
                        </el-option>
                    </el-select>
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
        name: 'certification',
        // 数据
        data() {
            return {
                certification: false,
                activeNames: ['4'],
                edit: {
                    f1: true,
                    f2: true,
                    f3: true,
                    f4: true,
                    f5: true,
                },
                form1: {
                    name: '',
                    phone: '',
                    scale: '',
                    type: '',
                    address: [],
                    address_info: '',
                },
                form2: {
                    name: '',
                    phone: '',
                    type: '',
                    num: '',
                },
                form3: {
                    name: '',
                    phone: '',
                    type: '',
                    num: '',
                },
                form4: {
                    type: '',
                    num_type: '',
                },
                form5: {
                    name: '',
                },
                upload:{
                    dialogVisible:false,
                    action:'https://jsonplaceholder.typicode.com/posts/',
                    list:[{
                        value: '企业营业执照',
                    }, {
                        value: '组织机构代码证',
                    }, {
                        value: '税务登记证',
                    }, {
                        value: '开户许可证',
                    }, {
                        value: '法人证件照（正面）',
                    }, {
                        value: '法人证件照（反面）',
                    }],
                    item:'',
                    filelist:[
                        {
                            type:'营业执照',
                            edit:'1111',
                        }
                    ]
                },


                options: [
                    {
                        value: 'zhinan',
                        label: '指南',
                        children: [{
                            value: 'shejiyuanze',
                            label: '设计原则',
                            children: [{
                                value: 'yizhi',
                                label: '一致'
                            }, {
                                value: 'fankui',
                                label: '反馈'
                            }, {
                                value: 'xiaolv',
                                label: '效率'
                            }, {
                                value: 'kekong',
                                label: '可控'
                            }]
                        }, {
                            value: 'daohang',
                            label: '导航',
                            children: [{
                                value: 'cexiangdaohang',
                                label: '侧向导航'
                            }, {
                                value: 'dingbudaohang',
                                label: '顶部导航'
                            }]
                        }]
                    }, {
                        value: 'zujian',
                        label: '组件',
                        children: [{
                            value: 'basic',
                            label: 'Basic',
                            children: [{
                                value: 'layout',
                                label: 'Layout 布局'
                            }, {
                                value: 'color',
                                label: 'Color 色彩'
                            }, {
                                value: 'typography',
                                label: 'Typography 字体'
                            }, {
                                value: 'icon',
                                label: 'Icon 图标'
                            }, {
                                value: 'button',
                                label: 'Button 按钮'
                            }]
                        }, {
                            value: 'form',
                            label: 'Form',
                            children: [{
                                value: 'radio',
                                label: 'Radio 单选框'
                            }, {
                                value: 'checkbox',
                                label: 'Checkbox 多选框'
                            }, {
                                value: 'input',
                                label: 'Input 输入框'
                            }, {
                                value: 'input-number',
                                label: 'InputNumber 计数器'
                            }, {
                                value: 'select',
                                label: 'Select 选择器'
                            }, {
                                value: 'cascader',
                                label: 'Cascader 级联选择器'
                            }, {
                                value: 'switch',
                                label: 'Switch 开关'
                            }, {
                                value: 'slider',
                                label: 'Slider 滑块'
                            }, {
                                value: 'time-picker',
                                label: 'TimePicker 时间选择器'
                            }, {
                                value: 'date-picker',
                                label: 'DatePicker 日期选择器'
                            }, {
                                value: 'datetime-picker',
                                label: 'DateTimePicker 日期时间选择器'
                            }, {
                                value: 'upload',
                                label: 'Upload 上传'
                            }, {
                                value: 'rate',
                                label: 'Rate 评分'
                            }, {
                                value: 'form',
                                label: 'Form 表单'
                            }]
                        }, {
                            value: 'data',
                            label: 'Data',
                            children: [{
                                value: 'table',
                                label: 'Table 表格'
                            }, {
                                value: 'tag',
                                label: 'Tag 标签'
                            }, {
                                value: 'progress',
                                label: 'Progress 进度条'
                            }, {
                                value: 'tree',
                                label: 'Tree 树形控件'
                            }, {
                                value: 'pagination',
                                label: 'Pagination 分页'
                            }, {
                                value: 'badge',
                                label: 'Badge 标记'
                            }]
                        }, {
                            value: 'notice',
                            label: 'Notice',
                            children: [{
                                value: 'alert',
                                label: 'Alert 警告'
                            }, {
                                value: 'loading',
                                label: 'Loading 加载'
                            }, {
                                value: 'message',
                                label: 'Message 消息提示'
                            }, {
                                value: 'message-box',
                                label: 'MessageBox 弹框'
                            }, {
                                value: 'notification',
                                label: 'Notification 通知'
                            }]
                        }, {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [{
                                value: 'menu',
                                label: 'NavMenu 导航菜单'
                            }, {
                                value: 'tabs',
                                label: 'Tabs 标签页'
                            }, {
                                value: 'breadcrumb',
                                label: 'Breadcrumb 面包屑'
                            }, {
                                value: 'dropdown',
                                label: 'Dropdown 下拉菜单'
                            }, {
                                value: 'steps',
                                label: 'Steps 步骤条'
                            }]
                        }, {
                            value: 'others',
                            label: 'Others',
                            children: [{
                                value: 'dialog',
                                label: 'Dialog 对话框'
                            }, {
                                value: 'tooltip',
                                label: 'Tooltip 文字提示'
                            }, {
                                value: 'popover',
                                label: 'Popover 弹出框'
                            }, {
                                value: 'card',
                                label: 'Card 卡片'
                            }, {
                                value: 'carousel',
                                label: 'Carousel 走马灯'
                            }, {
                                value: 'collapse',
                                label: 'Collapse 折叠面板'
                            }]
                        }]
                    }, {
                        value: 'ziyuan',
                        label: '资源',
                        children: [{
                            value: 'axure',
                            label: 'Axure Components'
                        }, {
                            value: 'sketch',
                            label: 'Sketch Templates'
                        }, {
                            value: 'jiaohu',
                            label: '组件交互文档'
                        }]
                    }],
                selectedOptions: [],
            }
        },

        // 计算属性
        computed: {},

        // 事件
        methods: {
            onSubmit() {
                console.log(this.form1);
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
            handleClick(row) {
                console.log(row);
            },
            upload_view(row){ // 查看
                console.log(row);

            }
        },
        created: function () {

        }
    }
</script>

<style lang="less" scoped>
    .certification {
        & > header {
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left:30px;
            font-size: 18px;
            line-height: 55px;
            color:#333;
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
        }
        .cf_content {
            padding-top: 20px;
            .form {
                padding-left: 30px;
                .el-form-item {
                    width: 600px;
                    .el-form-item__content {
                        .el-input,.el-select,.el-cascader{
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
        .upload_content{
            text-align: center;
            &>div{
                margin:5px ;
            }
        }
    }
</style>
