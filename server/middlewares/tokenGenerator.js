const jwt = require('jsonwebtoken');

module.exports = {
    generate(data) {
        return jwt.sign(data, process.env.SECRET);
    }
};
