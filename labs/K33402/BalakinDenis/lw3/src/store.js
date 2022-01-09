import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tickets: [],
        profile: false,
        userTicket: []
    },
    mutations: {
        setTickets (state, payload) {
            state.tickets = payload
        },
        setProfile (state, payload) {
            state.profile = payload
        },
        setUserTicket (state, payload) {
            state.userTicket = payload
        }
    },
    actions: {
        onBuy (store, payload) {
            fetch(`http://localhost:3000/userTicket/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({username: payload.user, ticket: payload.ticket})
            })
                .then( () =>
                    this.dispatch('getUserTicket', payload.user)
                )

        },
        onSubmit ({commit}, payload) {
            fetch(`http://localhost:3000/profile/${payload}`, {
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(res => res.json())
                .then(res => {
                    commit('setProfile', res)
                    router.push('/profile')
                })

        },
        onRegister (store, payload) {
            fetch(`http://localhost:3000/profile/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    id: payload,
                    username: payload,
                    balance: 0,
                    bonus: 0,
                    count: 0
                })
            })
                .then(() => {
                    this.dispatch('onSubmit', payload)
                })

        },
        onDel (store, payload) {
            fetch(`http://localhost:3000/userTicket/${payload.id}` , {
                method: 'delete',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then( () =>
                    this.dispatch('getUserTicket', payload.user)
                )
        },
        getProfile ({commit}, payload) {
            fetch(`http://localhost:3000/profile/${payload}`, {
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(res => res.json())
                .then(res => {
                    commit('setProfile', res)
                })
        },
        getUserTicket ({commit}, payload) {
            fetch(`http://localhost:3000/userTicket/`, {
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(res => res.json())
                .then(res => {
                    commit('setUserTicket', res.filter(el => el.username === payload))
                })
        },
        getTickets ({commit}) {
            fetch(`http://localhost:3000/ticket/`, {
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(res => res.json())
                .then(res => {
                    commit('setTickets', res)
                })
        }
    },
    getters: {
        tickets: state => {return state.tickets},
        profile: state => {return state.profile},
        userTicket: state => {return state.userTicket}

    }
})
export default store;
