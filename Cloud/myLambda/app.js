const axios = require("axios");
exports.handler = async (event) => {
    try {
        const myIP = "37.232.40.202"
        const IPinfo = await axios.get(`http://ip-api.com/json/37.232.40.202`);
        return {
            statusCode: 200,
            body: JSON.stringify(IPinfo)
        }
    } catch (e) {
        return {
            statusCode: 400,
            body: JSON.stringify(e)
        }
    }
};

exports.handler
