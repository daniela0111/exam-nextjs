import { Schema, model, Document } from 'mongoose';

interface Reservation extends Document {
  hotelChoice: string;
  name: string;
  rooms: number;
  checkIn: Date;
  checkOut: Date;
}

const reservationSchema = new Schema<Reservation>({
  hotelChoice: { type: String, required: true },
  name: { type: String, required: true },
  rooms: { type: Number, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
});

const ReservationModel = model<Reservation>('Reservation', reservationSchema);

export default ReservationModel;
