var Vue = require('vue')
Vue.use(require('vue-resource'));

var vm = new Vue({
  el: '#app',
  components: {
    'b-editor': require('./components/b-editor.vue'),
    'b-header': require('./components/b-header.vue'),
  },
  filters: {
    formatHtml: require('./filters/formatHtml'),
  },
})
