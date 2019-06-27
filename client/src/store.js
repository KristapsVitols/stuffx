import Vue from 'vue';
import Vuex from 'vuex';
import auth from './vuex/authorization/auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
    // Global
    state: {},
    mutations: {},
    actions: {},
    // Modules
    modules: {
        auth,
    }
})
