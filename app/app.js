import Vue from 'nativescript-vue'

import App from './components/App'

new Vue({
  render: (h) => h('frame', [h(App)]),
}).$start()
