var Vue = require('vue')
Vue.use(require('vue-resource'));

var vm = new Vue({
  el: '#app',
  data: {
    html: '',
    bHtml: '',
  },
  methods: {
    compile: function(html) {
      var data = {'b-html': this.bHtml }
      this.$http.post('/compile', data, (data, status) => {
        this.html = data.html
      }).error((data, status, req) => {
        this.html = 'Error!'
      })
    }
  },
  watch: {
    bHtml: 'compile',
  },
})
