
export default {
  basePath: '/ngDeployTest/ngDeploy/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
