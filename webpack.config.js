var config = {
    entry: './main/index.tsx',
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
                test: /\.tsx?/,
                include: /main/,
                loaders: ["babel", 'ts-loader']
            }
        ]
    }
};

module.exports = config;