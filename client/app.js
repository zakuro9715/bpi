var Vue = require('vue')

var vm = new Vue({
  el: '#app',
  data: {
    html: '',
    bHtml: '',
  },
  methods: {
    compile: function(html) {
      var req = new XMLHttpRequest()
      var self = this;
      req.onreadystatechange = () => {
        if(req.readyState != 4)
          return  // haven't completed
        if(req.status == 200)
          this.html = JSON.parse(req.response).html
        else
          this.html = 'Error!'
      }
      req.open('POST', '/compile')
      req.setRequestHeader('Content-Type', 'application/json')
      req.send(JSON.stringify({'b-html': this.bHtml}))
    }
  },
  watch: {
    bHtml: 'compile',
  },
})
