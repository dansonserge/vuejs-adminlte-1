<script>


import {mapState} from 'vuex';

import {getHeader} from '../config.js';


export default{
   
   computed:{

  ...mapState({
        userStore: state => state.userStore,
     })/*,
  this_asso_members: function () {
            return this.userStore.asso_members.filter(function (l) {
                return l.selected
            }).map(function (l) {
                 
            
                
                return l


            })
        }*/
   },

   mounted(){

   	 this.initSearch()

   	 this.asso_members=this.userStore.asso_members
    
   },
   data:function(){
      return{
      	search_type:"name",
      	search:"",
      	members:"",
      	selected:"",
      	asso_members:""
      }
   },

       methods:{
        searchMember(){
          if(this.search_type=="name"){
            var url= search_member+"?asso_id="+this.userStore.currentAssociation.id+"&name="+this.search

         }else if(this.search_type=="natid"){
           
            var url= search_member+"?asso_id="+this.userStore.currentAssociation.id+"&natid="+this.search

            }else if(this.search_type=="goid"){

            var url= search_member+"?asso_id="+this.userStore.currentAssociation.id+"&goid="+this.search

            }else if(this.search_type=="email"){

           var url= search_member+"?asso_id="+this.userStore.currentAssociation.id+"&email="+this.search
            }
    
            this.$http.get(url,{headers: getHeader()}
		          ).then((response) => {
		            /* this.members=response.body.members*/

		            /* console.log("members",response.body.members)*/

		             this.$store.dispatch('setAssoMembers',response.body.members)

		          },(response) => {
		          console.log("error",response)
		       });
       

             console.log("selected",this.selected)


		    },

		    initSearch(){
		    	var url= search_member+"?asso_id="+this.userStore.currentAssociation.id


		     this.$http.get(url,{headers: getHeader()}
		          ).then((response) => {
		            /* this.members=response.body.members*/

		             this.$store.dispatch('setAssoMembers',response.body.members)

		             console.log("members",response.body.members)
                  },(response) => {
		          console.log("error",response)
		       });
		    },
		    checkBx:function(e){
        	
        	

        	

        	this.$store.dispatch('setSelectedUser',e)

           }
        },
        
	}
</script>

<template>
<div>
   <div class="col-md-12">
   	
       <div class="row search">
<form> 
    <table>
		<tr>
			<td>
				<input type="text" v-model="search" @keyup="searchMember()" class="form-control" placeholder="Search for a farmer">

			</td>
			
			<td>
			   <select class="form-control " v-model="search_type">
		       	 		<option value="" selected disabled>Search</option>
		       	 		<option value="name" selected>Name</option>
		       	 		<option value="natid">National Id or Passport</option>
		       	 		<option value="goid">GO id</option>
		       	 		<option value="email">Email</option>
		       </select>
	        </td>
		  </tr>
	   </table> 	 	
 </form>

       </div>
       <div class="row selected-box">
	          <span class="selected col-md-2" v-for="member in userStore.selectedUser">
	       		{{member.user__first_name}} {{member.user__last_name}}
	          </span>
       </div>
       <div class="row members-table">
          <table class="table table-bordered table-responsive ">
                   <tr>
				      	
				        <th>Names</th>
				        <th>Telephone</th>
				        <th>Go id</th>
			       </tr>
			       
			      <tr v-for="member in userStore.asso_members" class="table_row" @click="checkBx(member)">
		                             
		                              
		                             <td class="clickable">
			                          {{member.user__first_name}} {{member.user__last_name}} 
			                         </td>
			                   
			                         <td class="clickable">
			                       	  {{member.phone}} 
			                         </td>
		                             
		                            <td class="clickable">
			                    	 {{member.go_id}} 
			                        </td>
                   </tr>
           <!--  <tr colspan="4" v-if="">
               	  <th>Not found</th>
               </tr> -->
           </table>
      </div>
</div>
</div>
</template>
<style>
.selected{
	background-color: #27ae60;
	color: #fff;
	padding: 10px;
	margin-right:8px;
	margin-top: 5px;
	margin-bottom: 5px;
	text-align: center;
}

.search{
	margin-top:5px;
	margin-bottom:5px;
 }
 
.members-table{
	margin-top: 10px;
}
.selected-box{
	margin-top:20px;
	margin-bottom:20px;
}

</style>