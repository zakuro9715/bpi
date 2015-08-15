var html = require('html')

module.exports = function(value, indentSize) {
  return html.prettyPrint(value, {indent_size: indentSize})
}
