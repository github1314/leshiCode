<template>
    <div class="repaymentPage">
        <header>还款详情<span @click="back_list()">返回列表</span></header>
        <div class="repaymentPage_header">
            <span>状态:已放款</span>
        </div>
        <div class="financingExamineDetails_c clearFix">
            <div class="financingExamineDetails_c_l">
                <ul>
                    <li>
                        <span>贷款编号</span>
                        <span>{{loanData1.applyNum}}</span>
                    </li>
                    <li>
                        <span>贷款金额</span>
                        <span>{{loanData1.loanAmount | currency('') }}元</span>
                    </li>
                    <li>
                        <span>合计利率</span>
                        <span>{{loanData1.totalRate}}%</span>
                    </li>
                    <li>
                        <span>贷款合同</span>
                        <span class="ht_details" @click="ht_details(loanData1.reserveContractNum)">{{loanData1.reserveContractNum}}</span>
                        <!--<span>预览合同</span>-->
                    </li>
                    <li>
                        <span>服务费</span>
                        <span>{{loanData1.serverFee}}%</span>
                    </li>
                    <li>
                        <span>选择还款日期</span>
                        <el-date-picker
                            v-model="valueData"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd"
                            :editable="false"
                        >
                        </el-date-picker>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>产品名称</span>
                        <span>{{loanData1.productName}}</span>
                    </li>
                    <li>
                        <span>贷款到账日</span>
                        <span>{{loanData1.applyAccountTime}}</span>
                    </li>
                    <li>
                        <span>贷款到期日</span>
                        <span>{{loanData1.endTime}}</span>
                    </li>
                    <li>
                        <span>申请时间</span>
                        <span>{{loanData1.creatTime}}</span>
                    </li>
                    <li>
                        <span>手续费</span>
                        <span>{{loanData1.counterFee}}%</span>
                    </li>
                    <li>
                        <span>还款方式</span>
                        <el-select v-model="hkval" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    </li>
                </ul>
            </div>
        </div>
        <div class="financingExamineDetails_c clearFix">
            <div class="financingExamineDetails_c_l">
                <ul>

                    <li>
                        <span style="font-weight:bold;">应还总额</span>
                        <span>{{loanData1.periodMoney | currency('') }}元</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span style="font-weight:bold;">实还总额</span>
                        <span style="padding-left: 0px;">
                            <el-input v-model="totalAmount" placeholder="请输入内容"></el-input>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="financingExamineDetails_h">
            <span>贷款明细</span>
        </div>
        <div class="financingExamineDetails_c clearFix" style="border-bottom: none">
            <div class="financingExamineDetails_c_l">
                <ul>
                    <li>
                        <span>费用总计</span>
                        <span>{{loanData1.periodMoney | currency('')}}元</span>
                    </li>
                    <li>
                        <span>利息</span>
                        <span>{{loanData1.interest | currency('')}}元</span>
                    </li>
                    <li>
                        <span>服务费</span>
                        <span>{{loanData1.serverFee | currency('')}}元</span>
                    </li>
                    <li>
                        <span>手续费</span>
                        <span>{{loanData1.counterFee | currency('')}}元</span>
                    </li>
                </ul>
            </div>
            <div class="financingExamineDetails_c_r">
                <ul>
                    <li>
                        <span>预计到账金额</span>
                        <span>{{loanData1.recvMoney | currency('')}}元</span>
                    </li>
                    <li>
                        <span>还款方式</span>
                        <span>{{loanData1.repaymentType}}</span>
                    </li>
                    <li>
                        <span>服务费收取方式</span>
                        <span>{{loanData1.servicePayType}}</span>
                    </li>
                    <li>
                        <span>手续费收取方式</span>
                        <span>{{loanData1.procedureType}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div style="clear: both;"></div>
        <div class="clearFix">
            <p style="float: left;padding-left: 30px;margin-top: 5px">上传付款凭证</p>
            <el-upload style="display: inline-block;margin-left: 68px"
                class="upload-demo"
                ref="upload"
                action="/api/customerEnterprise/upLoadFileToServer"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                <el-button
                    slot="trigger"
                    size="small"
                    icon="el-icon-picture-outline"
                >选取图片</el-button>
                <p style="font-size:12px;color: red;display: inline-block;padding-left: 20px">如果您已线下还款，请上上传付款凭证</p>
            </el-upload>
        </div>
        <div style="text-align: center">
            <el-button style="width: 200px;margin-top: 40px" type="primary" @click="hk_btn">确认还款</el-button>
        </div>
    </div>
</template>

<script>

    export default {
        name: '',
        data() {
            return {
                valueData:'',
                //实还总额
                totalAmount:'',
//                repaymentData:{}
                data:'',
                options: [{
                    value: '1',
                    label: '线上'
                }, {
                    value: '0',
                    label: '线下'
                }],
                hkval:'',
                loanData1:'',
                fileList: []
            }
        },
        components: {},
        methods: {
            ht_details(val){
                this.$http('/api/loan1/getContract',this.qs.stringify({limitKey:val})).then((res)=>{
                    if(res.data.code==200){
                        window.open(res.data.data.contrackURL);
                    }else {
                        this.$notify.error({
                            title: '错误',
                            message: res.data.msg
                        });
                    }
                }).catch((err)=>{

                });
            },
            back_list(){
                this.$router.go(-1);
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log();
                window.open(file.url);
            },
            hk_btn(){
                let _this = this;
                let repaymentData = {
                    contractNum:this.loanData1.reserveContractNum,//贷款合同编号
                    enterpriseNum:this.loanData1.applyNum,//企业编号
                    repaymentAmount:this.loanData1.periodMoney,//应还金额
                    actualPayAmount:this.totalAmount,//实还金额
                    repaymentType:this.hkval,//还款方式    0:线下还款     1:线上还款
                    repaymentTime:this.valueData,//还款日期
                };
                console.log(repaymentData);

                if(!this.hkval){
                    this.$notify({
                        title: '警告',
                        message: '还款方式不能为空！！！',
                        type: 'warning'
                    });
                }else if(!this.totalAmount){
                    this.$notify({
                        title: '警告',
                        message: '实还金额不能为空！！！',
                        type: 'warning'
                    });
                }else{
                    this.$http.post('/api/repayment/loanRepayment',this.qs.stringify(repaymentData)).then((res)=>{
                        if(res.data.code == 200){
                            this.$notify({
                                title: '成功',
                                message: res.data.msg,
                                type: 'success'
                            });
                            _this.$route.push({name:'loan'});
                        }else if(res.data.code != 200){
                            this.$notify.error({
                                title: '错误',
                                message: res.data.msg
                            });
                        }
                        console.log(res);
                    }).catch((err)=>{
                        console.log(err);
                    });
                }
            }
        },
        computed:{

        },
        created:function () {
            let _this = this;
            //路由传过来的数据
            this.data = this.$route.params.id;
//            console.log(this.data);
            //贷款详情的谁请求
            this.$http.post('/api/loan1/loanDetail',this.qs.stringify({applyNum:this.data})).then((res)=>{
                _this.loanData1 = res.data.data.detail;
            }).catch((err)=>{
                console.log(err);
            });
        }
    }
</script>

<style lang="less" scoped>
    .repaymentPage{
        &>header{
            height: 55px;
            border-bottom: 1px solid #f0f0f0;
            padding-left:30px;
            font-size: 18px;
            line-height: 55px;
            color:#333;
            position: relative;
            &>span{
                position: absolute;
                top:0px;
                right:61px;
                font-size: 16px;
                color: #3993FF;
                letter-spacing: 0;
                cursor: pointer;
            }
        }
        .repaymentPage_header{
            height:60px;
            border-bottom: 1px solid #F0F0F0;
            line-height:60px;
            margin-left: 30px;
            &>span:first-child{
                font-size: 20px;
                color: #000000;
                letter-spacing: 0;
            }
        }
        &>.financingExamineDetails_c{
            padding: 15px 0 15px 0;
            margin-left: 30px;
            border-bottom: 1px solid #F0F0F0;
            &>.financingExamineDetails_c_l{
                float: left;
                width: 50%;
                &>ul{
                    &>li{
                        height:45px;
                        line-height:45px;
                        &>span.ht_details{
                            font-size: 16px;
                            color: #3993FF !important;
                            letter-spacing: 0;
                            padding-left: 20px;
                            text-decoration: underline;
                            cursor: pointer;
                        }
                        &>span:first-child{
                            display: inline-block;
                            width: 150px;
                            font-size: 16px;
                            color: #666666;
                            letter-spacing: 0;
                        }
                        &>span:nth-child(2){
                            display: inline-block;
                            font-size: 16px;
                            color: #333333;
                            letter-spacing: 0;
                            padding-left: 15px;
                        }
                    }
                }
            }
            &>.financingExamineDetails_c_r{
                float: left;
                width: 50%;
                &>ul{
                    &>li{
                        height:45px;
                        line-height:45px;
                        &>span:first-child{
                            display: inline-block;
                            width: 150px;
                            font-size: 16px;
                            color: #666666;
                            letter-spacing: 0;
                        }
                        &>span:last-child{
                            display: inline-block;
                            font-size: 16px;
                            color: #333333;
                            letter-spacing: 0;
                            padding-left: 15px;
                        }
                    }
                }
            }
        }
        &>.financingExamineDetails_h{
            height:60px;
            border-bottom: 1px solid #F0F0F0;
            line-height:60px;
            margin-left: 30px;
            &>span{
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
            }
            &>a{
                color: #3993FF;
                font-size:14px;
                margin-left: 20px;
            }
        }
    }
</style>
