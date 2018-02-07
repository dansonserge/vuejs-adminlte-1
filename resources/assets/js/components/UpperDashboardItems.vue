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
     }
  }
</script>
<template>
	<div>
		 <!-- Main content -->
    <section class="content">
      <!-- Info boxes -->
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-aqua"><i class="ion ion-ios-people"></i></span>

            <div class="info-box-content" >
              <span class="info-box-text">Item 1</span>
              <span class="info-box-number">
                
             12
              </span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-red"><i class="ion ion-android-contacts"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Parterners</span>
              <span class="info-box-number">20</span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->

        <!-- fix for small devices only -->
        <div class="clearfix visible-sm-block"></div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-green"><i class="ion ion-ios-cart"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Transactions</span>
              <span class="info-box-number">760</span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-yellow"><i class="fa fa-envelope"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">New Messages</span>
              <span class="info-box-number">20</span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

    </section>
	</div>
</template>
<style></style>