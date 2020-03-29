import axios from 'axios';
axios.defaults.withCredentials = true;
const url = 'http://coach-easy-deploy.herokuapp.com';

export const strict = false

export const state = () => ({
  loggedIn: true,
  loading: false,
  userData: {
    "approved": true,
    "check_in": null,
    "coach_id": null,
    "email": "kwik@wisc.edu",
    "first_name": "Justin",
    "id": 10,
    "last_name": "Kwik",
		"role": "COACH"
  },
  currentClient: {},
  clientList: {}
  })

export const mutations = {
  logIn (state) {
    return state.loggedIn = !state.loggedIn;
  },
  isLoading (state) {
    return state.loading = !state.loading;
  },
  loaded (state) {
    return state.loading = false;
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
      // console.log(result.data.data)
      context.commit('setClientList', result.data)
    }).catch(error => {
      console.log(error)
    });
  },
  getCurrentClient(context, id){
    axios.get(`${url}/getUser?id=${id}`).then(result => {
      console.log(result)
      context.commit('setCurrentClient', result.data)
    }).catch(error => {
      console.log(error)
    });
  }
}