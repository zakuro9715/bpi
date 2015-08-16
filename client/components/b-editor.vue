<template>
  <div class="b-editor">
    <div class="b-editor__input">
      <textarea class="b-editor__textarea" v-model='bHtml'></textarea>
    </div>
    <div class="b-editor__preview">
      <textarea class="b-editor__textarea" readonly>{{ html | formatHtml 2 }}</textarea>
    </div>
  </div>
</template>

<style lang="stylus">
.b-editor
  display flex
  justify-content space-between
.b-editor__input,
.b-editor__preview
  width 40%
  box-sizing border-box
.b-editor__textarea
  width 100%
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
