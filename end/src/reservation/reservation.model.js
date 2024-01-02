"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var reservationSchema = new mongoose_1.Schema({
    hotelChoice: { type: String, required: true },
    name: { type: String, required: true },
    rooms: { type: Number, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
});
var ReservationModel = (0, mongoose_1.model)('Reservation', reservationSchema);
exports.default = ReservationModel;
