const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildDirectory = 'dist';
const outputDirectory = `${buildDirectory}/client`;
module.exports = {
    mode: 'production',
    entry: './src/client/index.tsx',
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@styles': path.resolve(process.cwd(), './src/client/styles'),
            '@ui': path.resolve(process.cwd(), './src/client/layout/ui'),
            '@pages': path.resolve(process.cwd(), './src/client/layout/pages'),
            '@components': path.resolve(process.cwd(), './src/client/layout/components'),
            '@store': path.resolve(process.cwd(), './src/client/state/store')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            { test: /\.(ts|tsx)?$/, loader: 'ts-loader' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, buildDirectory)]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
