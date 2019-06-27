import login from './login/login.module';
import register from './register/register.module';
import * as types from './mutation.types';

export default {
    namespaced: true,
    state: {
        isLogin: true,
    },
    mutations: {
        [types.SET_IS_LOGIN](state, isLogin) {
            state.isLogin = isLogin;
        }
    },
    actions: {
        setIsLogin(store, isLogin) {
            store.commit(types.SET_IS_LOGIN, isLogin);
        },
    },
    getters: {
        isLogin: state => state.isLogin,
    },
    modules: {
        login,
        register,
    }
}