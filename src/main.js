// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import VuePreview from 'vue-preview';
Vue.config.productionTip = false

import mintUI from 'mint-ui';


/*import CSS*/
import '../static/css/reset.css'
import 'mint-ui/lib/style.css'




/*Vue use*/
Vue.use(mintUI)
Vue.use(vueResource)
Vue.use(VuePreview);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
