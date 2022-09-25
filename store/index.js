
export const state = () => ({
    isActiveSession: false,
    activeUser: "",
    projects: [{title: "IGI 2", description: "This is my first game, Target is to make bug free"}, 
                {title: "NFS Dev Ops", description: "It shall live forever, But you should follow traffic rules"}],
    issues: [{id: "igi100", summary: "first issue of IGI"}, {id: "igi102", summary: "Second issue of IGI"},
                {id: "igi103", summary: "third issue of IGI"}, {id: "igi104", summary: "fourth issue of IGI"}],
    loginForm: [{fieldName: "username", inputType: "text", key: "userName"}, {fieldName: "password", inputType: "text", key: "password"}],
    projectForm: [{fieldName: "Project Name", inputType: "text"}, {fieldName: "Project Id", inputType: "text"}, {fieldName: "description", inputType: "text-area"}],
    issueForm: [{fieldName: "summary", inputType: "text"}, {fieldName: "description", inputType: "text-area"}],


})

export const mutations = {
    initiateSession(state, data){
        state.isActiveSession = true;
        state.activeUser = data.userName;
        return "success"
    },

    resetSession(state){
        state.isActiveSession = false;
        state.activeUser = "";
    },
    toast(state, data){
        this._vm.$bvToast.toast(`${data.body}`, {
            title: data.purpose,
            autoHideDelay: data.delay || 3000,
            appendToast: data.append || false
        })
    }

}

export const actions = {
    INITIATE_SESSION({commit}, authInfo) {
        // make request
        let x = commit('initiateSession', authInfo);
        return x
    },

    RESET_SESSION({commit}) {
        commit('resetSession')
    },

    TOAST({commit}, data) {
        console.log(data)
        commit('toast', data);
    },
}

