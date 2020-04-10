export const state = () => ({
  loggedIn: false,
  edit: false,
  userData: {},
  })
  
export const mutations = {
  logIn (state) {
    return state.loggedIn = true;
  },
  logOut (state) {
    return state.loggedIn = false;
  },
  editStatus (state) {
    return state.edit = !state.edit;
  },
  noEdit (state) {
    return state.edit = false;
  },
  setUserData (state, data) {
    console.log(data)
    return state.userData = data;
  },
}
