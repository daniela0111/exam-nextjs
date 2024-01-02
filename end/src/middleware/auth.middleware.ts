// auth.middleware.ts

export function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    // Zde můžete provést ověření uživatele podle tokenu
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}
