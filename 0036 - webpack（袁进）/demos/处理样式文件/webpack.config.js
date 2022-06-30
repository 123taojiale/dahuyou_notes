module.exports = {
    mode: "development",
    devtool: "source-map",
    watch: true,
    module: {
        rules: [{
            test: /index\.css$/,
            use: ['./loaders/style-loader.js']
        }]
    }
}