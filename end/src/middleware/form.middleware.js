"use strict";
// form.middleware.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.formMiddleware = void 0;
function formMiddleware(req, res, next) {
    var _a = req.body, hotelChoice = _a.hotelChoice, name = _a.name, rooms = _a.rooms, checkin = _a.checkin, checkout = _a.checkout;
    // Zpracování dat formuláře nebo aplikování logiky
    // ...
    next();
}
exports.formMiddleware = formMiddleware;
