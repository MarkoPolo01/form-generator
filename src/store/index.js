import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        forms: []
    },
    getters: {},
    mutations: {
        fetchForms(state, forms) {
            state.forms = forms;
        },
        addForm(state, formAtributs) {
            state.forms.unshift(formAtributs)
        },

    },
    actions: {
        async fetchForms({commit}) {
            try {
                const response = await axios.get('/forms.json')
                commit("fetchForms", response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
    },
    modules: {}
})
