const path = require('path');

const API_URL = process.env.NEXT_PUBLIC_API_URL;

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    API_URL
  },
};
