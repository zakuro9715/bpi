<template>
  <textarea v-model='bHtml'></textarea>
  <label>Indent size:<input type="number" v-model='indentSizeRaw'></label>
  <div><pre>{{ html | formatHtml indentSize }}</pre></div>
</template>

<script lang="es6">
module.exports = {
  data: function() {
    return {
      html: '',
      bHtml: '',
      indentSizeRaw: null,
    }
  },
  computed: {
    indentSize: function() {
      return this.indentSizeRaw || 2;
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
