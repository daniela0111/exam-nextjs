import { Schema, model, Document } from 'mongoose';

interface Reservation extends Document {
 hotelChoice: string;
 name: string;
 rooms: number;
 checkIn: Date;
 checkOut: Date;
}

const reservationSchema = new Schema<Reservation>({
 hotelChoice: { type: String, required: [true, 'Hotel choice is required'] },
 name: { type: String, required: [true, 'Guest name is required'] },
 rooms: { type: Number, required: [true, 'Number of rooms is required'] },
 checkIn: { type: Date, required: [true, 'Check-in date is required'] },
 checkOut: { type: Date, required: [true, 'Check-out date is required'] },
});

reservationSchema.pre('save', function (next) {
 const reservation = this as Reservation;
 if (reservation.checkIn >= reservation.checkOut) {
    return next(new Error('Check-out date must be after check-in date'));
 }
 next();
});

const ReservationModel = model<Reservation>('Reservation', reservationSchema);

export default ReservationModel;
