const path = require('path');

const baseURL = process.env.NEXT_PUBLIC_API_URL;

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    baseURL
  },
};
