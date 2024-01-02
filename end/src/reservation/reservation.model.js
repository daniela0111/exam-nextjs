"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var reservationSchema = new mongoose_1.Schema({
    hotelChoice: { type: String, required: [true, 'Hotel choice is required'] },
    name: { type: String, required: [true, 'Guest name is required'] },
    rooms: { type: Number, required: [true, 'Number of rooms is required'] },
    checkIn: { type: Date, required: [true, 'Check-in date is required'] },
    checkOut: { type: Date, required: [true, 'Check-out date is required'] },
});
reservationSchema.pre('save', function (next) {
    var reservation = this;
    if (reservation.checkIn >= reservation.checkOut) {
        return next(new Error('Check-out date must be after check-in date'));
    }
    next();
});
var ReservationModel = (0, mongoose_1.model)('Reservation', reservationSchema);
exports.default = ReservationModel;
