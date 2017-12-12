
const mutations = {
    /**
     * 登陆之后的用户状态
     * @param state
     * @param obj
     */
    info(state,obj){
        state.account.login=obj.login;
        state.account.id=obj.id;
        state.account.username=obj.username;
        sessionStorage.setItem('a',{
            a:1,
            b:2
        })
    },
    /**
     * 退出 初始化状态
     * @param state
     */
    quit(state){
        state.account.login=false;
        state.account.id='';
        state.account.username='';
    }
};
export default mutations;
