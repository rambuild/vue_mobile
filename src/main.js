// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import VuePreview from 'vue-preview';

import mintUI from 'mint-ui';
import moment from 'moment'

/*import CSS*/
import '../static/css/reset.css'
import 'mint-ui/lib/style.css'




/*Vue use*/
Vue.use(mintUI)
Vue.use(vueResource)
/*设置vue-resource的根路径*/
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.use(VuePreview);

Vue.config.productionTip = false

Vue.filter('dateFormat',function(datastr,pattern = "YYYY-MM-DD HH:mm:ss"){
	return moment(datastr).format(pattern);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
