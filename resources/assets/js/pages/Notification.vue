<script>

import {mapState} from 'vuex';

export default{
computed:{

         ...mapState({
          
          userStore: state => state.userStore
       
       })

      },

      mounted(){
         


          this.checkNotification()
          this.checkIfError()
          this.checkMessage()	

          this.checkObject()

        
      },
      data:function(){
      	return{
      		show:false,
      		is_error:false,
      		is_success:false,
          is_object:false
      	}
      },
      methods:{
         checkNotification(){
           if(this.userStore.notification.show==true){
          this.show=true
         }
         else{
          this.show=false
         }

         },
         checkIfError:function(){
        if(this.userStore.notification.is_error==true){
          this.is_error=true
          this.is_success=false
         }
         else{
          this.is_error=false
          this.is_success=true
           }
         },

         checkMessage:function(){
         	this.message=this.userStore.notification.message
         },
         clearNotification:function(){
         	this.$store.dispatch('clearNotification');
         },
         checkObject:function(){



                console.log(typeof this.message)
                console.log(typeof this.message)

               /* console.log("hey danson this is :",typeof this.userStore.notification.message)*/


         }
   }
}
	
</script>

<template>

	<div class="col-md-12">
 
 <!--          
    <div class="signup-errors" v-if="show">
          <div :class="{'alert':true, 'alert-success':is_success, 'alert-error':is_error}">
           
           <div class="col-md-1 su-errors-close pull-right">
              <i class="fa fa-close" @click="clearNotification"></i>
            </div>

            <ul>
              <li>{{message}}</li>
           </ul>
        </div>
    </div>
 -->
      
    <div class="col-md-12 signup-errors noty_div" v-show="userStore.notification.show">
    <div class="col-md-1"></div>
          <div :class="{'col-md-10 alert noty':true, 'alert-error':userStore.notification.is_error, 'alert-success':!userStore.notification.is_error}">
           
           <div class="col-md-1 su-errors-close pull-right">
              <i class="fa fa-close" @click="clearNotification"></i>
            </div>

            <ol>


              <li>{{userStore.notification.message}}</li>

              <!--<li v-for="message in userStore.notification.message">{{message}}</li>-->
           </ol>
        </div>
        <div class="col-md-1"></div>
    </div>

		
	</div>
</template>

<style>

.noty{

	padding: 5px;

  }
.noty_div{

	margin-top: 5px;

}

</style>