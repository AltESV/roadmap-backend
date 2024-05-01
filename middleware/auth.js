require('dotenv').config()
const basicAuth = require('express-basic-auth');


const users = {};
users[process.env.USER] = process.env.KEY;

const authMiddleware = basicAuth({
    users: users,
    unauthorizedResponse: req => ({ message: "Nice try" })
});


module.exports = authMiddleware;