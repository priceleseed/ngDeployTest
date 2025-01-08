
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ngDeployTest/ngDeploy/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 514, hash: '7fa9e87ffafeab5aec1435fee8e325a755217404478f77399bdbf36bf1810f3c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '8aac1756f3d9268af4c50b9e0fb06b8c079ae504a859dd9749be416344ff754c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
