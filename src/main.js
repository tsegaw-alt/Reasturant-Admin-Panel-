import Trend from 'vuetrend'
import Toasted from 'vue-toasted'
import layoutMixin from './mixins/layout'
import VueSimpleAlert from "vue-simple-alert";
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import VueTouch from 'vue-touch'
import store from './store'
import router from './Routes'
import App from './App'
import Widget from './components/Widget/Widget'
import VueStepWizard from 'vue-step-wizard'
import 'vue-step-wizard/dist/vue-step-wizard.css'
import Vuetify from 'vuetify'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import ToggleButton from 'vue-js-toggle-button'
// import * as Keycloak from 'keycloak-js'

Vue.use(Trend)
Vue.mixin(layoutMixin)
Vue.use(Toasted, { duration: 10000 })
Vue.use(VueSimpleAlert)
Vue.use(VueTouch)
Vue.use(VueStepWizard)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('Widget', Widget)
Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.use(VueGoodTablePlugin)
Vue.use(ToggleButton)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('app')




// let kcOptions = {
//   url: 'http://localhost:8080/auth',
//   realm: 'delivery',
//   clientId: 'delivery',
//   onLoad: 'login-'

// }

// let keycloak = Keycloak(kcOptions)

// keycloak.init({onLoad: kcOptions.onLoad}).then(auth => {
//   if (!auth) {
//     // localStorage.setItem("vue-token", keycloak.token);
//     console.log("Not Autenticated")
//   } else {
//     localStorage.setItem("vue-token", keycloak.token);
//     console.log("Autenticated")
//   }
// }).catch(() => {
//   alert("login failure")
// })
// const Plugin = {
//   install(Vue) {
//     Vue.$keycloak = keycloak
//   }
// }

// Plugin.install = Vue => {
//   Vue.$keycloak = keycloak
//   Object.defineProperties(Vue.prototype, {
//     $keycloak: {
//       get() {
//         return keycloak
//       }
//     }
//   })
// }

// Vue.use(Plugin)

// export default Plugin



// Vue.prototype.$keycloak = keycloak