import Vue from 'vue';
import iView from'iview';
import 'iview/dist/styles/iview.css';
import App from './App.vue'
import './assets/tailwind.css'
import router from './router/router'
import AbsPopup from './components/common/AbsPopup.vue'
import AbsTabs from './components/tabs/AbsTabs.vue'
import AbsTable from './components/tables/AbsTable.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faWindowClose} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faWindowClose);

Vue.config.productionTip = false;
Vue.component("AbsPopup", AbsPopup);
Vue.component("AbsTabs", AbsTabs);
Vue.component('AbsTable',AbsTable);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(iView);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
