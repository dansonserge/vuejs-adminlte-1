<script>
  
   import {mapState,mapGetters} from 'vuex'
   
   import {clientId, clientSecret } from './.env.js';
	
   
  export default{
    computed:{
    	...mapState({
        userStore: state => state.userStore,
     
       }) 
     },

	mounted:function (){
    var authUser=JSON.parse(window.localStorage.getItem('authUser'))
    this.$store.dispatch('setAuthUser',authUser)
   },

data:
  function(){
  return {
    
  };
},
     methods:{
        initialDataLoader:function(){},
       handleLogout:function(){
        window.localStorage.removeItem('authUser')
     		this.$store.dispatch('clearAuthUser')     
     		this.$router.push({name: 'home'})
     	}
     }
}
</script>
<template>
<div>
  <div class="contents">
    <vue-progress-bar></vue-progress-bar>
    <router-view>
  	</router-view>  
  </div>
</div>
</template>
<style>

</style>