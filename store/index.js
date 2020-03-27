import axios from 'axios';
const url = 'asdf';

export const strict = false

export const state = () => ({
  loggedIn: false,
  userData: {
    "approved": true,
    "check_in": null,
    "coach_id": null,
    "email": "kwik@wisc.edu",
    "first_name": "Justin",
    "id": 14,
    "last_name": "Kwik",
		"role": "CLIENT"
  },
  currentClient: {

  },
  clientList: {
    "approvedClients": [
      {
        "approved": true,
        "check_in": null,
        "coach_id": 97,
        "email": "kwik@wisc.edu",
        "first_name": "Justin",
        "id": 95,
        "last_name": "Kwik",
        "reset_token": null,
        "role": "CLIENT",
        "verified": true
      },
      {
        "approved": true,
        "check_in": null,
        "coach_id": 97,
        "email": "solomonfett@wisc.edu",
        "first_name": "Nati",
        "id": 101,
        "last_name": "Solomon Fett",
        "reset_token": "1b97b9b0-6e10-11ea-bed2-acde48001122",
        "role": "CLIENT",
        "verified": true
      }
    ],
    "pastClients": [
      {
        "approved": null,
        "check_in": null,
        "coach_id": null,
        "email": "test@gmail.com",
        "first_name": "test",
        "id": 104,
        "last_name": "test_last",
        "reset_token": null,
        "role": "CLIENT",
        "verified": false
      }
    ],
    "unapprovedClients": [
      {
        "approved": false,
        "check_in": null,
        "coach_id": null,
        "email": "test_verify@gmail.com",
        "first_name": "test",
        "id": 103,
        "last_name": "Fett",
        "reset_token": null,
        "role": "CLIENT",
        "verified": false
      }
    ]
  }
})

export const mutations = {
  logIn (state) {
    state.loggedIn = !state.loggedIn;
  },
  emptyClientList (state) {
    state.clientList={};
  },
  setClientList (state, data) {
    axios.get(url + '/clientList')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    state.userData=data;
  },
  setUserData (state) {
    state.clientList;
  },
  setCurrentClient (state) {
    state.currentClient;
  },
}

export const actions = {

}