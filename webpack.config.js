var config = {
    entry: './main/index.jsx',
    output: {
        filename: 'bundle.js',
        path: './build/'
    },
    devServer: {
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: /main/,
                loader: "babel"
            }
        ]
    }
};

module.exports = config;