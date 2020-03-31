import axios from 'axios';
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

export const strict = false

export const state = () => ({
  loggedIn: false,
  loading: false,
  userData: {},
  currentClient: {},
  clientList: {}
  })

export const mutations = {
  logIn (state) {
    return state.loggedIn = true;
  },
  logOut (state) {
    return state.loggedIn = false;
  },
  isLoading (state) {
    return state.loading = !state.loading;
  },
  loaded (state) {
    return state.loading = false;
  },
  setUserData (state, data) {
    console.log(data)
    return state.userData = data;
  },
  setClientList (state, data) {
    return state.clientList=data;
  },
  setCurrentClient (state, data) {
    return state.currentClient = data;
  },
}

export const actions = {
  getClientList(context){
    axios.get(`${url}/clientList`).then(result => {
      console.log(result.data)
      context.commit('setClientList', result.data)
    }).catch(error => {
      console.log(error)
    });
  },
  getCurrentClient(context, id){
    axios.get(`${url}/getUser?id=${id}`)
    .then(result => {
      console.log('success')
      console.log(result)
      context.commit('setCurrentClient', result.data.user)
    }).catch(error => {
      console.log('current client error')
      console.log(error)
    });
  }
}