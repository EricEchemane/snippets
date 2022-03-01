const jwt = require('jsonwebtoken');

// authToken middleware
export function authToken(req, res, next) {
    /**
     * shape of Authorization header:
     * Bearer <token>
     */
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        req.user = decoded;
        next();
    });
}