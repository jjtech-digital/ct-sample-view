/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'Ct Sample View',
  cloudIdentifier: 'gcp-au',
  env: {
    development: {
      initialProjectKey: 'product-feed-app',
    },
    production: {
      customViewId: 'TODO',
      url: 'https://my-custom-view.com',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: ['products.product_details.general'],
};

export default config;
