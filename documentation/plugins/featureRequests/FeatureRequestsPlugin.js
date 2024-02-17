const {normalizeUrl} = require("@docusaurus/utils");
/**
 * @param {import('@docusaurus/types').LoadContext} context
 * @returns {import('@docusaurus/types').Plugin}
 */
async function FeatureRequestsPlugin(context) {
  return {
    name: 'feature-requests-plugin',
    async contentLoaded({actions}) {
      const basePath = normalizeUrl([context.baseUrl, '/prepverse-community']);
      const paths = await actions.createData(
        'paths.json',
        JSON.stringify(basePath),
      );
      actions.addRoute({
        path: basePath,
        exact: false,
        component: '@site/plugins/featureRequests/FeatureRequestsPage',
        modules: {
          basePath: paths,
        },
      });
    },
  };
}

module.exports = {
    default: FeatureRequestsPlugin,
};