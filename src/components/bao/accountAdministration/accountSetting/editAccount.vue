<template>
    <div class="editAccount">
        <header class="clearFix"><span>账户管理</span><span v-if="!edit_show" class="editAccount_r" @click="editAccount_tab"><i class="el-icon-edit-outline"></i>修改</span></header>
        <div class="editAccount_c">
            <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                <el-form-item>
                    <div slot="label" class="editAccount_label">
                        <span>客户名称<span class="editAccount_x">*</span></span>
                    </div>
                    <el-input class="editAccount_input" v-model="formLabelAlign.name" v-if="edit_show"></el-input>
                    <span v-if="!edit_show" >{{formLabelAlign.name}}</span>
                </el-form-item>
                <el-form-item>
                    <div slot="label" class="editAccount_label">
                        <span>账号<span class="editAccount_x">*</span></span>
                    </div>
                    <el-input class="editAccount_input" v-model="formLabelAlign.name" v-if="edit_show"></el-input>
                    <span v-if="!edit_show" class="editAccount_n">{{formLabelAlign.name}}</span>
                </el-form-item>
                <el-form-item>
                    <div slot="label" class="editAccount_label">
                        <span>开户行<span class="editAccount_x">*</span></span>
                    </div>
                    <el-input class="editAccount_input" v-model="formLabelAlign.name" v-if="edit_show"></el-input>
                    <span v-if="!edit_show" >{{formLabelAlign.name}}</span>
                </el-form-item>
                <el-form-item>
                    <div slot="label" class="editAccount_label">
                        <span>开户行所在地<span class="editAccount_x">*</span></span>
                    </div>
                    <el-input class="editAccount_input" v-model="formLabelAlign.name" v-if="edit_show"></el-input>
                    <span v-if="!edit_show" >{{formLabelAlign.name}}</span>
                </el-form-item>
                <el-form-item>
                    <div slot="label" class="editAccount_label"></div>
                    <el-button type="primary" class="editAccount_btn" v-if="edit_show" @click="preservation">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script>

    export default {
        name: 'editAccount',
        data() {
            return {
                labelPosition: 'left',
                formLabelAlign: {
                    name: '乐小宝',
                    region: '',
                    type: ''
                },
                edit_show:false
            }
        },
        components: {},
        methods: {
            editAccount_tab(){
                this.edit_show=!this.edit_show;
            },
            preservation(){
                this.edit_show=!this.edit_show;
            }
        }
    }
</script>

<style lang="less" scoped>
    .editAccount{
        &>header{
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left:30px;
            font-size: 18px;
            line-height: 55px;
            color:#333;
            &>.editAccount_r{
                float: right;
                margin-right: 50px;
                font-size: 16px;
                color: #3993FF;
                letter-spacing: 0;
                cursor: pointer;
            }
        }
        .editAccount_c{
            padding:30px 30px 30px 80px;
            .editAccount_input{
                width: 240px;
                height:40px;
            }
            .editAccount_label{
                /*width: 140px;*/
                &>span{
                    font-size: 16px;
                    color: #666666;
                    letter-spacing: 0;
                    .editAccount_x{
                        color: red;
                    }
                }
            }
            .editAccount_btn{
                width: 220px;
                height:40px;
            }

        }
    }

</style>
