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
  margin 64px 0
  display flex
  justify-content space-between
.b-editor__input,
.b-editor__preview
  width 50%
.b-editor__input
  padding-right: 12px
.b-editor__preview
  padding-left: 12px
.b-editor__textarea
  width 100%
  height 400px
  resize none
  border solid 1px lighten(#0077CF, 30%)
</style>

<script lang="es6">
module.exports = {
  data: function() {
    return {
      html: '',
      bHtml:
        '<!doctype html\n' +
        '<html\n' +
        '  @lang en\n' +
        '  <head\n' +
        '    </meta\n' +
        '      @charset utf-8\n' +
        '    <title\n' +
        '      TITLE\n' +
        '  <body\n' +
        '    <!--comment\n' +
        '    <h1\n' +
        '      @class title\n' +
        '      HEADLINE\n' +
        '    <p\n' +
        '      Hello, b-html!\n' +
        '      >@bouzuya\n' +
        '      </img\n' +
        '        @alt sample image\n' +
        '        @src /images/sample.png\n',
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
  ready: function() { this.compile() },
  watch: {
    bHtml: 'compile',
  },
}
</script>
