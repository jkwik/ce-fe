export const state = () => ({
  loggedIn: false,
  userData: {}
})

export const mutations = {
  logIn (state) {
    state.loggedIn = !state.loggedIn;
  },
}

export const actions = {

}