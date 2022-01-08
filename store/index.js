export const state = () => ({
    works: null
});

export const mutations = {
    setWorks(state, payload) {
        state.works = payload
    }
}
export const actions = {
    setWorks({ commit }, payload) {
        commit('setWorks', payload)
    }
}
