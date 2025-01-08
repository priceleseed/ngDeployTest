
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ngDeployTest/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 505, hash: '4beab0637bed59302d3c7bee2a28403af9994fdccd4513246223af48be7d5d63', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '5cf954d9f79c16fb18f36d3d1fba8a6e4604fe48bf7fe6dff44fdc9277d36b64', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
