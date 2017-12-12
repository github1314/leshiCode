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
            <el-form :label-position="'left'" label-width="110px" >
                <div class="content clearFix">
                    <div class="left">
                        <el-form-item>
                            <div class="label" slot="label">关联应收账单<span>*</span></div>
                            <!--<el-input v-model="account_receivable" placeholder="请输入"></el-input>-->
                            <el-select v-model="account_receivable" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">申请贷款金额<span>*</span></div>
                            <el-input v-model="loan_amount" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">担保方式</div>
                            <el-input v-model="guarantee_method" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">贷款用途</div>
                            <el-input v-model="purpose" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">贷款对象</div>
                            <el-input v-model="loan_object" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">还款方式<span>*</span></div>
                            <el-input v-model="repayment_method" placeholder="请输入"></el-input>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item>
                            <div class="label" slot="label">应收账单净值<span>*</span></div>
                            <el-input v-model="net_worth" disabled="" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">申请到账日<span>*</span></div>
                            <el-date-picker
                                v-model="application_to_account"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd"
                            >
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">贷款到账日<span>*</span></div>
                            <el-date-picker
                                v-model="loan_to_account"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd"
                            >
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">贷款投向</div>
                            <el-input v-model="loan_investment" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="label" slot="label">争议解决方式</div>
                            <el-input v-model="solution" placeholder="请输入"></el-input>
                        </el-form-item>
                    </div>
                    <div class="clearBoth clearFix"></div>
                    <el-form-item>
                        <div class="label" slot="label"></div>
                        <el-button type="primary" class="ss" @click="trial()">试算</el-button>
                    </el-form-item>
                </div>


            </el-form>

        </div>
        <shisuanResult :ssData="ssData" :hkData="hkData" v-if="ssShowHide" ></shisuanResult>
        <div style="text-align: center" v-if="ssShowHide"><el-button type="primary" @click="submit_btn()">提交申请</el-button></div>
    </div>
</template>

<script>
    import shisuanResult from '@/components/bao/financingManagement/shisuanResult'
    export default {
        name: 'financingApply_add',
        // 数据
        data() {
            return {
//                idCode:true,
                account_receivable: '1111111111',//关联应收账单
                loan_amount:'2222222',//贷款金额
                guarantee_method:'发票',//担保方式
                purpose:'周转',//用途
                loan_object:'乐视',//对象
                repayment_method:'一次性还本付息',//还款方式
                net_worth:'2222222222',//净值
                application_to_account:'2017-10-10',//申请到账
                loan_to_account:'2017-12-12',//贷款到账
                loan_investment:'天辰',//贷款投向
                solution:'发票',//解决方式
                //需要传到试算的数据
                ssData:{
                    predictAccount:'',
                    predictHandleFee:'',
                    predictInterest:'',
                    predictServiceFee:'',
                    predictSum:'',
                    procedureType:'',
                    servicePayType:'',
                    repaymentType:'',
                },
                hkData:[{
                    PFEE:'',
                    SFEE:'',
                    amortizedInterest:'',
                    amortizedPrincipal:'',
                    payer:'',
                    period:'',
                    periodMoney:'',
                    repayDate:''
                },{
                    PFEE:'',
                    SFEE:'',
                    amortizedInterest:'',
                    amortizedPrincipal:'',
                    payer:'',
                    period:'',
                    periodMoney:'',
                    repayDate:''
                }],
                //控制试算结果显示隐藏
                ssShowHide:false,
                //账单列表
                options: [{
                    value: '选项1',
                    label: '1111111111'
                }, {
                    value: '选项2',
                    label: '2222222222'
                }, {
                    value: '选项3',
                    label: '3333333333'
                }, {
                    value: '选项4',
                    label: '4444444444'
                }, {
                    value: '选项5',
                    label: '5555555555'
                }],
            }
        },

        // 计算属性
        computed: {

        },
        components:{
            shisuanResult
        },
        // 事件
        methods: {
            // 返回上一页
            backtrack() {
                this.$router.go(-1);
            },
            //试算请求
            trial(){
                let _this = this;
                if(this.account_receivable == ''){
                    this.$notify.error({
                        title: '错误',
                        message: '关联应收账单不能为空！'
                    });
                }else if(this.net_worth==''){
                    this.$message({
                        showClose: true,
                        message: '应收账单净值不能为空！',
                        type: 'error'
                    });
                }else if(this.loan_amount==''){
                    this.$notify.error({
                        title: '错误',
                        message: '申请贷款金额不能为空！'
                    });
                }else if(this.application_to_account == ''){
                    this.$notify.error({
                        title: '错误',
                        message: '申请到账日不能为空！'
                    });
                }else if(this.loan_to_account==''){
                    this.$notify.error({
                        title: '错误',
                        message: '贷款到账日不能为空！'
                    });
                }else if(this.repayment_method == ''){
                    this.$notify.error({
                        title: '错误',
                        message: '还款方式不能为空！'
                    });
                }else if(this.account_receivable && this.loan_amount && this.repayment_method && this.net_worth && this.application_to_account && this.loan_to_account){
//
                    if(Number(this.loan_amount) > Number(this.net_worth)){
                        this.$notify({
                            title: '警告',
                            message: '贷款金额不能超过账单净值！',
                            type: 'warning'
                        });
                    }else {
                        this.ssShowHide = true;
                        let applyData={
                            productTypeTwo:_this.account_receivable, //关联应收账单         基类编号
                            receivablesNum:_this.net_worth,          //应收账单净值           应收账单编号
                            applyAmount:_this.loan_amount,           //申请贷款金额
                            applyAccountTime:_this.application_to_account,//申请到账日
                            applyEndTime:_this.loan_to_account,           //贷款到账日
                            repaymentWayNo:_this.repayment_method        //还款方式
                        };
                        this.$http.post('/api/financing1/getTrialRepaymentPlan',this.qs.stringify(applyData)).then((res)=>{
                            this.ssData = res.data.data;
                            console.log(res.data);
                            this.ssData = res.data.data.trialResult;
                            this.hkData = res.data.data.periodSchedulesList;

                        }).catch((err)=>{
                            console.log(err);
                        });
                    }
                }else {
                    this.$notify({
                        title: '警告',
                        message: '请填写完整后在进行试算！',
                        type: 'warning'
                    });
                }
            },

            submit_btn(){
                let subData = {
                    productTypeTwo:this.account_receivable, //关联应收账单         基类编号
                    receivablesNum:this.net_worth,          //应收账单净值           应收账单编号
                    receivablesNetAmount:this.net_worth,       //应收账单净值
                    applyAmount:this.loan_amount,           //申请贷款金额
                    applyAccountTime:this.application_to_account,//申请到账日
                    applyEndTime:this.loan_to_account,           //贷款到账日
                    repaymentType:this.repayment_method,        //还款方式
                    assureMeans:this.guarantee_method,          //担保方式
                    loanPurpose:this.purpose,//贷款用途
                    loanFor:this.loan_investment,//贷款投向
                    industryTo:this.loan_object,//贷款对象
                    settlementType:this.solution,//争议解决方式
                    productTypeOne:'1111111',
                };
                this.$http.post('/api/financing/applicationSubmit',this.qs.stringify(subData)).then((res)=>{
//                    console.log(res);
                    if(res.data.code != 200){
                        this.$message({
                            showClose: true,
                            message: res.data.msg,
                            type: 'error'
                        });
                    }else if(res.data.code == 200){
                        console.log('请求成功');
                        this.$router.push({name:'financingApply'});
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            }

        },
        mounted:function () {

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
                    /*min-height: 100px;*/
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
