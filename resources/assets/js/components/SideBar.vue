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
  },

  data:function(){
    return{
       
     }
  },
 methods:{
    
     },

  }

</script>
<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
 <ul class="sidebar-menu">
      
        <li class="treeview">
          
          <a  href="#">
          
          <i class="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
        
         </a>

         </li>  


</ul>



    </section>
    <!-- /.sidebar -->
  </aside>

</template>
<style>

</style>