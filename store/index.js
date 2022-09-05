export const state = () => ({
    isActiveSession: false,
    activeUser: "",
    projects: [{title: "IGI 2", description: "This is my first game, Target is to make bug free"}, 
                {title: "NFS Dev Ops", description: "It shall live forever, But you should follow traffic rules"}],
    issues: [{id: "igi100", summary: "first issue of IGI"}, {id: "igi102", summary: "Second issue of IGI"},
                {id: "igi103", summary: "third issue of IGI"}, {id: "igi104", summary: "fourth issue of IGI"}]

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
