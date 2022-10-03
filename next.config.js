// usamos `module.exports` en vez de `export default` ya que este archivo
// corre directo en Node.js y no pasa por Babel
module.exports = {
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  assetPrefix: './',
  images: {
    loader: 'akamai',
    path: '/',
  },
}
