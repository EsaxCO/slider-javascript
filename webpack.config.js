const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: 'slider.js',
    target: 'web',
    output: {
        filename: 'vm-slider-js.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'sliderJS',
        libraryExport: 'default',
        libraryTarget: 'this',
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src')],
        extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-class-properties'],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
}
