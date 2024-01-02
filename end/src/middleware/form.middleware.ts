// form.middleware.ts

export function formMiddleware(req, res, next) {
  const { hotelChoice, name, rooms, checkin, checkout } = req.body;
  // Zpracování dat formuláře nebo aplikování logiky
  // ...
  next();
}
