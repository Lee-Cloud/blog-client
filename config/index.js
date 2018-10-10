const config = {
    development: {
        // api: "http://127.0.0.1:7001"
        api: "https://blog-api.lee-cloud.xyz"
    },
    production: {
        api: "https://blog-api.lee-cloud.xyz"
    }
};
module.exports = config[process.env.NODE_ENV];
