var webpack = require('webpack');
module.exports = {

    //define an entry point

    entry: './js/main.js',

    //define output

    output: {

        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js/, loader: 'imports?define=>false' }
        ]
    },
    plugins: [
        
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })

    ]




};
