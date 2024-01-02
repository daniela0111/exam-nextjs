// auth.middleware.ts

import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
 const token = req.headers.authorization;

 if (token) {
    try {
      const decoded = jwt.verify(token, 'your-secret-key');
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).send('Invalid token');
    }
 } else {
    res.status(401).send('Unauthorized');
 }
}
