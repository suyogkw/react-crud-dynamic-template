const path = require('path')

module.exports={
    entry: './src/index.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
            loader: "babel-loader",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
          }
        ]
      }
}