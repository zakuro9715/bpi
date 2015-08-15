<template>
  <div>
    <div class="pure-g">
      <div class="pure-u-1-2">
        <textarea v-model='bHtml'></textarea>
      </div>
      <div class="pure-u-1-2">
        <textarea readonly>{{ html | formatHtml indentSize }}</textarea>
      </div>
    </div>
  <label>Indent size:<input type="number" v-model='indentSizeRaw'></label>
  </label
</template>

<style lang="stylus">

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
  watch: {
    bHtml: 'compile',
  },
}
</script>
