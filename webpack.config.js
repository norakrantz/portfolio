module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    devtool: 'source-maps',
    devServer: {
        contentBase: './dist',
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                name: 'images/[hash]-[name].[ext]',
                },
            }
        }
      ]
    }
  }