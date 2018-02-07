import {addActivity,getHeader} from '../../config.js';
import store from '../../store'
//STATES
const state={
 authUser:null,
 user_type:null,
  notification:{},
}
//MUTATIONS
const mutations={
  SET_AUTH_USER (state,payload){
   state.authUser=payload
  },
	CLEAR_AUTH_USER(state){
      state.authUser=null
	},
	SET_USER_TYPE(state,payload){
		state.user_type=payload
	},
	CLEAR_USER_TYPE(state){
		state.user_type=null
	},

	SET_NOTIFICATION(state,payload){
    
    state.notification=payload

  },
  CLEAR_NOTIFICATION(state){
    state.notification={'show':false}
  },
}
//ACTIONS
const actions= {
  setAuthUser: ({commit},payload) => {
		commit('SET_AUTH_USER',payload)
	},
	clearAuthUser:({commit})=>{ 
		commit('CLEAR_AUTH_USER')
	},
  setUserType:({commit},payload)=>{
		commit('SET_USER_CATEGORIES',payload)
	},
	clearUserType:({commit})=>{
		commit('CLEAR_USER_CATEGORIES')
	},

	setNotification:({commit},payload)=>{
    commit('SET_NOTIFICATION',payload)
  },
  clearNotification:({commit},payload)=>{
      commit('CLEAR_NOTIFICATION')
   },
 }
export default {
 state, mutations, actions
}