const path = require('path');

const FIRST_URL = process.env.NEXT_PUBLIC_FIRST_URL;
const SEARCH_URL = process.env.NEXT_PUBLIC_SEARCH_URL;
const FIND_URL = process.env.NEXT_PUBLIC_FIND_URL;

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    FIRST_URL,
    SEARCH_URL,
    FIND_URL
  },
};
