const path = require('path');

const makeConfig = require('./webpack.makeConfig.js');

module.exports = makeConfig({
    name: 'main',
    useReact: true,
    babelPaths: [
        path.resolve(__dirname, 'src', 'main')
    ]
});
