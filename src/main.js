// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueLightbox from 'vue-lightbox'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/wmcl.css'
import Scrollactive from 'vue-scrollactive'

Vue.component('Lightbox', VueLightbox)
Vue.use(Scrollactive);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
