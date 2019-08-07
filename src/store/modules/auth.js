import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main'

const state = {
    token: window.localStorage.getItem('ingur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    //This commit right here is a function that is used to call the mutations
    //that we've defined down there
    logout: ({ commit }) => {
        //mutations.setToken //bad!
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    },
    finalizeLogin({ commit }, hash) {
        const query = qs.parse(hash.replace('#', ''));

        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token);
        router.push('/');
    },
    login: ({}) => {
        api.login();
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}