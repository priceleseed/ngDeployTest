
export default {
  basePath: '/ngDeployTest/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
