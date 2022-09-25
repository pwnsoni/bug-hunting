
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
        alert(JSON.stringify(data))
    },

    resetSession(state){
        state.isActiveSession = false;
        state.activeUser = "";
    },
    validateAxiosResult(state, code){
        console.log(code)
        if (code.status !== 200){
            alert(`Error, Request failed with status code: ${code.status}`,);
            throw {message: `Error, Request failed with status code: ${code.status}`, status: code.status}
        }
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
    async INITIATE_SESSION({commit}, authInfo) {
        // make request
        // let authResult = await this.$axios.$get('/api/login');
        let authResult = await this.$axios.$post('/api/login', {authInfo});
        console.log(authResult)
        commit('validateAxiosResult', {status: authResult.status});
        commit('initiateSession', authResult.result);
    },

    RESET_SESSION({commit}) {
        commit('resetSession')
    },

    TOAST({commit}, data) {
        console.log(data)
        commit('toast', data);
    },
}

