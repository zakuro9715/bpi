var Vue = require('vue')
Vue.use(require('vue-resource'));

var vm = new Vue({
  el: '#app',
  components: {
    'b-editor': require('./components/b-editor.vue'),
  },
})
