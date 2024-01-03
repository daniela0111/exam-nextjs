// BookingForm.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import BookingFormStyle from './BookingFormStyle.module.css';
import { createReservation, getAllReservations } from '../lib/api.js';

const BookingForm = ({ locations }) => {
  const backgroundImage = '/hotel.jpg';

  const [formData, setFormData] = useState({
    name: '',
    rooms: '',
    checkin: '',
    checkout: '',
  });

  const [reservations, setReservations] = useState([]);

  const [selectedHotel, setSelectedHotel] = useState('');

  useEffect(() => {
    async function fetchReservations() {
      try {
        const data = await getAllReservations();
        setReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
        // Handle the error as needed
      }
    }

    fetchReservations();
  }, []); // Fetch reservations on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send reservation data to the server
      const createdReservation = await createReservation(formData);

      // Handle the created reservation as needed
      console.log('Reservation created:', createdReservation);

      // Update the list of reservations
      const updatedReservations = await getAllReservations();
      setReservations(updatedReservations);

      // Optionally, you can update the UI or navigate to a different page
    } catch (error) {
      console.error('Error creating reservation:', error);
      // Handle the error as needed
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Update the selected hotel when the "name" field changes
    if (name === 'name') {
      setSelectedHotel(value);
    }
  };

  return (
    <div className={`${BookingFormStyle['booking-form-container']} ${BookingFormStyle['background-image']}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Check in at Comwell and discover Denmark</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Hotel:</label>
        <select id="name" name="name" value={formData.name} onChange={handleInputChange} required>
          <option value="" disabled>Select a hotel</option>
          {locations && locations.length > 0 && locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        {/* Conditionally render the location drawer based on the selected hotel */}
        {selectedHotel && (
          <Navbar locations={locations} />
        )}

        <label htmlFor="rooms">Rooms:</label>
        <input type="number" id="rooms" name="rooms" value={formData.rooms} onChange={handleInputChange} required />

        <label htmlFor="checkin">Check In:</label>
        <input type="date" id="checkin" name="checkin" value={formData.checkin} onChange={handleInputChange} required />

        <label htmlFor="checkout">Check Out:</label>
        <input type="date" id="checkout" name="checkout" value={formData.checkout} onChange={handleInputChange} required />

        <button type="submit">Submit</button>

        {/* Display reservations */}
        <div>
          <h3>Reservations:</h3>
          {reservations.map((reservation) => (
            <div key={reservation.id}>{/* Display reservation details */}</div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
