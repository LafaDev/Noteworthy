const DotEnv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new DotEnv()
  ]
}
// require("dotenv").config();

// module.exports = {
//   env: {
//     API_URL = process.env.API_URL,
//   },
// };
