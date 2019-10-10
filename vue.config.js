// vue.config.js
const merge = require('webpack-merge');

// modules
const commonModule = require('./config/vue.common.js');
const devModule = require('./config/vue.dev.js');
const prodModule = require('./config/vue.prod.js');
const zipModule = require('./config/vue.zip.js');

module.exports = (env, options) => {
    console.log("BUILD_TYPE : " + process.env.BUILD_TYPE);
    if(process.env.BUILD_TYPE === 'dev'){
        return merge(commonModule, devModule)
    }else if(process.env.BUILD_TYPE === 'prod') {
        return merge(commonModule, prodModule)
    }else if(process.env.BUILD_TYPE === 'zip') {
        return merge(commonModule, zipModule)
    } else {
        return {}
    }
};


