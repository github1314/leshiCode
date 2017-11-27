import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'


import login from '@/components/account/login'
import registered from '@/components/account/registered'
import GetPassword from '@/components/account/getPassword'


import bao from '@/components/bao/bao'
//企业总览
import overview from '@/components/bao/detail/overview'
//常见问题
import commonproblem from '@/components/bao/commonproblem/common_Problem'
//账户管理
import accountQuery from '@/components/bao/accountAdministration/accountquery/accountquery'
import accountqueryHomepage from '@/components/bao/accountAdministration/accountquery/accountqueryHomepage'
import accountSetting from '@/components/bao/accountAdministration/accountSetting/accountSetting'
import certification from '@/components/bao/certification/certification'
import editAccount from '@/components/bao/accountAdministration/accountSetting/editAccount'
import accountOperation from '@/components/bao/accountAdministration/accountOperation/accountOperation'

//企业授信
import EnterpriseCredit from '@/components/bao/EnterpriseCredit/EnterpriseCredit'
import addEnterpriseCredit from '@/components/bao/EnterpriseCredit/addEnterpriseCredit'
import changeEnterpriseCredit from '@/components/bao/EnterpriseCredit/changeEnterpriseCredit'

//账单管理
import receivableBill from '@/components/bao/billManagement/receivableBill/receivableBill'
import BillsPayable from '@/components/bao/billManagement/BillsPayable/BillsPayable'
// 新增账单或者查看账单
import bill from '@/components/bao/billManagement/bill/bill'


//贷款管理
import loan from '@/components/bao/LoanManagement/loan'
import repayment from '@/components/bao/LoanManagement/repayment'
import lanDetails from '@/components/bao/LoanManagement/lanDetails'

//融资管理
import financingApply from '@/components/bao/financingManagement/financingApply'
import financingApply_add from '@/components/bao/financingManagement/financingApply_add'
import financingExamine from '@/components/bao/financingManagement/financingExamine'
import financingExamineDetails from '@/components/bao/financingManagement/financingExamineDetails'


Vue.use(Router);


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            meta: {
                title: '乐视金融首页'
            },
            components: {
                index
            },
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                title: '登陆'
            },
            components: {
                content: login
            }
        },
        {
            path: '/registered',
            name: 'registered',
            meta: {
                title: '注册'
            },
            components: {
                content: registered
            }
        },
        {
            path: '/getpassword',
            name: 'getpassword',
            meta: {
                title: '找回密码'
            },
            components: {
                content: GetPassword
            }
        },
        {
            path: '/bao',
            name: 'bao',
            meta: {
                title: '我的乐小宝'
            },
            components: {
                content: bao
            },
            children: [
                {
                    path: 'overview',
                    name: 'overview',
                    meta: {
                        list: 'overview',
                        title: '企业总览'
                    },
                    components: {
                        detail: overview
                    },
                },
                {
                    path: 'certification',
                    name: 'certification',
                    meta: {
                        list: 'certification',
                        title: '企业认证'
                    },
                    components: {
                        detail: certification
                    },
                },
                {
                    path: 'commonproblem',
                    name: 'commonproblem',
                    meta: {
                        list: 'commonproblem',
                        title: '常见问题'
                    },
                    components: {
                        detail: commonproblem
                    }
                },
                {
                    path: 'accountQuery',
                    name: 'accountQuery',
                    meta: {
                        list: 'accountqueryHomepage',
                        title: '账户查询'
                    },
                    components: {
                        detail: accountQuery
                    },
                },
                {
                    path: 'accountqueryHomepage',
                    name: 'accountqueryHomepage',
                    meta: {
                        list: 'accountqueryHomepage',
                        title: '账户查询首页'
                    },
                    components: {
                        detail: accountqueryHomepage
                    },
                },
                {
                    path: 'accountOperation',
                    name: 'accountOperation',
                    meta: {
                        list: 'accountOperation',
                        title: '账户操作'
                    },
                    components: {
                        detail: accountOperation
                    },
                },
                {
                    path: 'editAccount',
                    name: 'editAccount',
                    meta: {
                        list: 'editAccount',
                        title: '账户设置/修改'
                    },
                    components: {
                        detail: editAccount
                    },
                },
                {
                    path: 'EnterpriseCredit',
                    name: 'EnterpriseCredit',
                    meta: {
                        list: 'EnterpriseCredit',
                        title: '企业授信'
                    },
                    components: {
                        detail: EnterpriseCredit
                    },
                    children:[

                    ]
                },
                {
                    path: 'addEnterpriseCredit',
                    name: 'addEnterpriseCredit',
                    meta: {
                        list: 'EnterpriseCredit',
                        title: '新增企业授信'
                    },
                    components: {
                        detail: addEnterpriseCredit
                    }
                },
                {
                    path: 'changeEnterpriseCredit',
                    name: 'changeEnterpriseCredit',
                    meta: {
                        list: 'EnterpriseCredit',
                        title: '修改企业授信'
                    },
                    components: {
                        detail: changeEnterpriseCredit
                    }
                },
                {
                    path: "receivableBill",
                    name: "receivableBill",
                    meta: {
                        list: 'receivableBill',
                        title: "应收账单"
                    },
                    components: {
                        detail: receivableBill
                    }
                },{
                    path: 'bill/:type/:id',
                    name: 'bill',
                    meta: {
                        list: 'receivableBill',
                        title: '账单'
                    },
                    components: {
                        detaila: bill
                    },
                },
                {
                    path: "BillsPayable",
                    name: "BillsPayable",
                    meta: {
                        list: 'BillsPayable',
                        title: "应收账单"
                    },
                    components: {
                        detail: BillsPayable
                    }
                },
                {
                    path: "accountSetting",
                    name: "accountSetting",
                    meta: {
                        list: 'accountSetting',
                        title: "账单设置"
                    },
                    components: {
                        detail: accountSetting
                    }
                },
                {
                    path:"loan",
                    name:"loan",
                    meta:{
                        list:'loan',
                        title:"我的借款"
                    },
                    components:{
                        detail:loan
                    }
                },
                {
                    path:"repayment",
                    name:"repayment",
                    meta:{
                        list:"repayment",
                        title:"我的还款"
                    },
                    components:{
                        detail:repayment
                    }
                },
                {
                    path:"lanDetails/:type/:id",
                    name:"lanDetails",
                    meta:{
                        list:"repayment",
                        title:"我的借款/还款详情"
                    },
                    components:{
                        detail:lanDetails
                    }
                },
                {
                    path:"financingApply",
                    name:"financingApply",
                    meta:{
                        list:"financingApply",
                        title:"融资申请"
                    },
                    components:{
                        detail:financingApply
                    }
                },
                {
                    path:"financingApply_add",
                    name:"financingApply_add",
                    meta:{
                        list:"financingApply",
                        title:"新增融资申请"
                    },
                    components:{
                        detail:financingApply_add
                    }
                },
                {
                    path:"financingExamine",
                    name:"financingExamine",
                    meta:{
                        list:"financingExamine",
                        title:"融资申请审核"
                    },
                    components:{
                        detail:financingExamine
                    }
                },
                {
                    path:"financingExamineDetails/:type/:id",
                    name:"financingExamineDetails",
                    meta:{
                        list:"financingExamine",
                        title:"融资申请审核"
                    },
                    components:{
                        detail:financingExamineDetails
                    }
                },

            ]
        },

        {
            path: '*',
            name: 'NotFound',
            meta: {
                title: '您访问的页面找不到了'
            },
            components: {
                index
            }
        }
    ],
});


router.beforeEach((to, from, next) => {
    to.meta.title && (document.title = to.meta.title);
    next()
});

export default router;

