const path = require('path')

module.exports = {
    context: path.resolve(__dirname, '../'),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@Components': path.resolve(__dirname,'src/components'),
            '@Pages': path.resolve(__dirname,'src/pages'),
            '@Config': path.resolve(__dirname, 'src/config'),
            '@Utils': path.resolve(__dirname, 'src/utils')
        }
    }
}
