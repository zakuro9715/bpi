<template>
  <div class="b-editor__main">
    <textarea v-model='bHtml' class="b-editor__textarea"></textarea>
    <div class="b-editor__result"><pre>{{ html | formatHtml indentSize }}</pre></div>
  </div>
  <label>Indent size:<input type="number" v-model='indentSizeRaw'></label>
</template>

<style lang="stylus">
.b-editor__main
  display flex
  width 100%
.b-editor__textarea
  width 50%
.b-editor__result
  width 50%
</style>

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
