
const loggerMiddleware = (req, res, next) => {

    console.log(`[${new Date().toISOString()}] Incoming Request: ${req.method} ${req.url}`);
    console.log(`Client IP: ${req.ip}`);
    console.log(`User Agent: ${req.headers['user-agent']}`);

    next();
};

module.exports = loggerMiddleware;