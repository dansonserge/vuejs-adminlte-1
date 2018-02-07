

import Vue from 'vue'

import VueRouter from 'vue-router';

    Vue.use(VueRouter)

//import pages components
    
    import WelcomePage from './pages/WelcomePage.vue';
    import DashboardPage from './pages/DashboardPage.vue';
   
    import PageNotFound from './pages/PageNotFound.vue';
    
    import NewPwd from './pages/NewPwd.vue';
   
    //routes
const routes=
    [
        {path:'/', component:WelcomePage, name:'hm'},
        {path: '*', component: PageNotFound },
        {path:'/app', component:WelcomePage, name:'home'},
        {path:'/app/welcome', component: WelcomePage, name:'welcome'},
        {path:'/app/dashboard', component: DashboardPage, name:'dashboard'},
        {path:'/app/newpwd',component: NewPwd,name:'newpwd',props:true},
    
   ];

const router=new VueRouter({
	mode:'history',
	routes
})

router.beforeEach((to, from, next) => {

if(to.meta.requiresAuth){
     
     const authUser=JSON.parse(window.localStorage.getItem('authUser'));

	  if(authUser && authUser.access_token){

         next()

      }
	  else{

       next({name:'welcome'})

	   }
     }

  next()
  
})

export default router





