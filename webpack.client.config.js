const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildDirectory = 'dist';
const outputDirectory = `${buildDirectory}/client`;
module.exports = {
    mode: 'development',
    entry: './src/client/index.tsx',
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@styles': path.resolve(process.cwd(), './src/client/styles'),
            '@ui': path.resolve(process.cwd(), './src/client/layout/ui'),
            '@pages': path.resolve(process.cwd(), './src/client/layout/pages'),
            '@components': path.resolve(process.cwd(), './src/client/layout/components'),
            '@store': path.resolve(process.cwd(), './src/client/state/store'),
            '@sb': path.resolve(process.cwd(), './src/client/sb'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: ['/node_modules/', '/supabase/'],
                use: ['babel-loader'],
            },
            { test: /\.(ts|tsx)?$/, exclude: ['/node_modules/', '/supabase/'], loader: 'ts-loader' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        port: 3001,
        open: true,
        static: path.resolve(__dirname, './dist'),
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, buildDirectory)],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
