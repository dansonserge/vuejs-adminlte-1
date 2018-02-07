<script>
import {mapState} from 'vuex';

import {getHeader} from '../config.js';

export default{
  
  computed:{

  ...mapState({
        userStore: state => state.userStore,
     })

      },
       mounted(){

         var authUser=JSON.parse(window.localStorage.getItem('authUser'))
    
        this.$store.dispatch('setAuthUser',authUser)

        

  

      
     },

     data:function(){
      return{
        first_name:'',
        last_name:''
     }
  },
methods:{
handleLogout:function(){

       /*   window.localStorage.removeItem('authUser')
          window.localStorage.removeItem('current_assoc')
          this.$store.dispatch('clearAuthUser')
          
          this.$store.dispatch('clearCurrentAssociation')



          this.$router.push({name:'welcome'})*/
       
     },
     


  }
}
</script>
<template>
 <header class="main-header">
    <!-- Logo -->
    <a @click="redirectToWeb()" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">
        
      <img src="/images/agrigologo.png" alt="agrigo_logo" class="agrigo_logo_dashboard-mini">

      </span>
      <!-- logo for regular state and mobile devices -->
      <img src="/images/agrigologo.png" alt="agrigo_logo" class="agrigo_logo_dashboard logo-lg">
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>

      </a>
     
     
      
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">



          <!-- <li class="dropdown messages-menu">
          
         <router-link :to="{name:'  send-grp-message'}"  class="dropdown-toggle" data-toggle="dropdown">
          
        <i class="fa fa-envelope-o"></i>
        
         </router-link>

         </li>  -->
          <!-- <li class="dropdown messages-menu">
            <a @click="goToSend" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              
            </a>
          </li> -->
        <!-- 
          <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              
            </a>
          </li>
          
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
            </a>
            
          </li>
      
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              
            </a>
            send-grp-message
          </li> -->
       
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
             
           <span class="hidden-xs"> John Doe
            <i class="fa fa-angle-down" aria-hidden="true"></i> 
          </span>

            </a>
            <ul class="dropdown-menu">

              <li class="user-footer">
                
                 <a type="button"  class="btn btn-green"><b>Settings <i class="fa fa-cog"></i></b></a>
               

              </li>
          
              <li class="user-footer">
                
                   <a type="button"  class="btn btn-red"><b>Sign out <i class="fa fa-sign-out"></i></b></a>
           
             </li>
            </ul>
          </li>
         
         
        </ul>
      </div>
    <vue-progress-bar></vue-progress-bar>
    </nav>
  </header>
</template>
<style>
  
  .user{
    background-color: #4a4646;
    border-bottom: 3px solid #4a4646;
  }

  .coinfo{
position: absolute;
    padding-top: 15px;

    font-weight: bold;
  }

</style>