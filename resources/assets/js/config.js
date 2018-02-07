export const baseUrl='localhost:8000';
/*
export const edit_crop_family=baseUrl+''
*/
export const getHeader= function(){
	const tokenData= JSON.parse(window.localStorage.getItem('authUser'))
	const headers = 
	{
	 'Accept':'application/json',
	 'Authorization':'Bearer '+tokenData.access_token
	} 
return headers
}
  export const getUserMetaData = function(){
	var authUser=JSON.parse(window.localStorage.getItem('authUser'))
    this.$store.dispatch('setAuthUser',authUser)
   }
