export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.isActiveSession) {
      store.dispatch('TOAST', {body: `You must login first!`, purpose: "!! -- Warning -- !!"})
      return redirect('/login')
    }
  }