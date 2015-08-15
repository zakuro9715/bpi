<template>
  <textarea v-model='bHtml'></textarea>
  <div><pre>{{ html | formatHtml 2 }}</pre></div>
</template>

<script lang="es6">
module.exports = {
  data: function() {
    return {
      html: '',
      bHtml: '',
    }
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
  filters: {
    formatHtml: require('../filters/formatHtml'),
  },
  watch: {
    bHtml: 'compile',
  },
}
</script>
