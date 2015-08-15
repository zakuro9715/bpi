module.exports = () => {
  var paths = {
    server: './server',
    client: './client',
  }
  paths.clientApp = [paths.client + '/app.js']
  paths.clientAppTriger = [paths.client + '/**/*.{vue,js}']
  paths.es6 = [paths.server + '/**/*.js']
  paths.bHtml = [paths.client + '/**/*.bhtml']
  return paths;
}()
