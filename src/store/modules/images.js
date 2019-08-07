import api from '../../api/imgur';
import { router } from '../../main';


const state = {
    images: []
};

const getters = {
    /* allImages: state => {
        console.log("vai retornar images: ", state.images)
        return state.images
    }, */
    allImages: state => state.images,
}

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages();
        commit('setImages', response.data.data);
    },

    async uploadImages({ rootState }, images) {
        console.log("rootstate: ", rootState);
        //Get the access token
        const {token} = rootState.auth;
        //let token =  window.localStorage.getItem('imgur_token')
        
        // call our api module to do the upload
        await api.uploadImages(images, token);

        //redirect our user to imagelist component
        router.push('/')
    }
}

const mutations = {
    setImages: (state, images) => {
        console.log('all images: ', images.length)
        state.images = images;
    }
}

export default {
    state, 
    getters,
    actions,
    mutations
}