const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new webpack.DefinePlugin({
      'process.env.RAPIDAPI_API_KEY': JSON.stringify(process.env.RAPIDAPI_API_KEY)
    })
  ],
}