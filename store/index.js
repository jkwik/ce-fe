export const state = () => ({
  loggedIn: false,
  userData: {},
  })

export const mutations = {
  logIn (state) {
    return state.loggedIn = true;
  },
  logOut (state) {
    return state.loggedIn = false;
  },
  setUserData (state, data) {
    console.log(data)
    return state.userData = data;
  },
}
