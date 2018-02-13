const config = {
    development: {
        api: "http://127.0.0.1:3001"
    },
    production: {
        api: "http://blog-client-api.lee-cloud.xyz"
    }
};
module.exports = config[process.env.NODE_ENV];
