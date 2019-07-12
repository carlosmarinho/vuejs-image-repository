import api from '../../api/imgur';

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