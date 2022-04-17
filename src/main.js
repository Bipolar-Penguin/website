import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from 'firebase/app';
import 'firebase/messaging'
import firebaseMessaging from './firebase'


// // Initialize Firebase
firebase.initializeApp({
  'messagingSenderId': '744798928283'
});

navigator.serviceWorker.register('firebase-messaging-sw.js', {scope: "firebase-cloud-messaging-push-scope"})
  .then((registration) => {
      const messaging = firebase.messaging();
      messaging.useServiceWorker(registration);

  }).catch(err => {
      console.log(err)
  })

Vue.config.productionTip = false

Vue.prototype.$messaging = firebaseMessaging

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
