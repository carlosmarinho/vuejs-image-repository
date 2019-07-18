import api from '../../api/imgur';
import qs from 'qs';

const state= {
    token: null
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
    },
    finalizeLogin({ commit }, hash) {
        const query = qs.parse(hash.replace('#', ''));

        commit('setToken', query.access_token);
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
    getteres,
    actions,
    mutations
}