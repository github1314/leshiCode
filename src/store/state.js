
let account = sessionStorage.getItem('account') || {
    // 登陆
    login: false,
    // 用户id
    id: '1',
    username: '',
    // 认证

    // 授信

};




const state = {
    account: account,
    // 账户
    bank: {

        /************账户开通************************/
        name: '',            // 开户人姓名
        number: '',          // 开户账号
        bank_name: '',       // 开户银行
        bank_address: '',    // 开户银行所在地

        /************账户查询************************/
        status: '',         //账户状态  1正常 or 2反常（我也不知道反常都有什么）
        money: '',           // 账户金额
        freeze: '',    // 冻结金额
    },
    s:sessionStorage.getItem('a')
};
export default state;
