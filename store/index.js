export const state = () => ({
    isActiveSession: false,
    activeUser: "",

})

export const mutations = {
    initiateSession(state, data){
        state.isActiveSession = true;
        state.activeUser = data.userName;
    },

    resetSession(state){
        state.isActiveSession = false;
        state.activeUser = "";
    }

}

export const actions = {
    INITIATE_SESSION({commit}, authInfo) {
        // make request
        let x = commit('initiateSession', authInfo);
    },

    RESET_SESSION({commit}) {
        commit('resetSession')
    }
}

