"use strict";
// auth.middleware.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function authMiddleware(req, res, next) {
    var token = req.headers.authorization;
    if (token) {
        try {
            var decoded = jsonwebtoken_1.default.verify(token, 'your-secret-key');
            req.user = decoded;
            next();
        }
        catch (error) {
            res.status(401).send('Invalid token');
        }
    }
    else {
        res.status(401).send('Unauthorized');
    }
}
exports.authMiddleware = authMiddleware;
