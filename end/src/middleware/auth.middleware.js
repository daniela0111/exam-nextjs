"use strict";
// auth.middleware.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
function authMiddleware(req, res, next) {
    var token = req.headers.authorization;
    if (token) {
        // Zde můžete provést ověření uživatele podle tokenu
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
}
exports.authMiddleware = authMiddleware;
