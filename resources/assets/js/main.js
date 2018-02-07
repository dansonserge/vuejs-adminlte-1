require('./bootstrap');

//Vue.http.options.root = "http://agrigo.rw:8081/";

/*Vue.http.options.root = "http://agrigo.rw:8081/";*/
Vue.http.options.root = "https://agrigo.rw:8081/";
require('./fastclick');
require('./adminltejs.min');
require('./jquery.sparkline.min');
require('./jvectormap');
require('./jquery-jvectormap-world-mill-en');
require('./jquery.slimscroll.min');
require('./datepicker');
require('./bootstrap-formhelpers');
require('./nprogress');


import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(39, 174, 96)',
  failedColor: 'red',
  height: '3px'
})


import Chart from './chart.min'

/*End of admin lte plugins*/

import router from './router'

import store from './store'
//Vue components
Vue.component('app', require('./App.vue'));
Vue.component('login', require('./components/Login.vue'));
Vue.component('intro-info', require('./components/IntroInfo.vue'));
Vue.component('top-nav', require('./components/TopNav.vue'));
Vue.component('side-bar', require('./components/SideBar.vue'));
Vue.component('page-footer', require('./components/Footer.vue'));
Vue.component('control-menu', require('./components/ControlMenu.vue'));
Vue.component('upper-dashboard-items', require('./components/UpperDashboardItems.vue'));
Vue.component('notification', require('./components/Notification.vue'));
Vue.component('user-search', require('./components/userSearch.vue'));
Vue.component('pagination', require('./components/Pagination.vue'));
Vue.component('new-pwd', require('./components/NewPwd.vue'));

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})


new Vue({

router,
store

}).$mount('#app')




