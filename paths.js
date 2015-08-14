module.exports = () => {
  var paths = {
    server: './server',
    client: './client',
  }
  paths.es6 = [paths.server + '/**/*.js']
  paths.bHtml = [paths.client + '/**/*.bhtml']
  return paths;
}()
