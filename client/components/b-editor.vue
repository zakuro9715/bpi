<template>
  <textarea v-model='bHtml'></textarea>
  <div>{{html}}</div>
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
  watch: {
    bHtml: 'compile',
  },
}
</script>
