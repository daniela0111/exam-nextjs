import React, { useState } from 'react';
import Navbar from './Navbar';
import BookingFormStyle from './BookingFormStyle.module.css';

const BookingForm = ({ locations }) => {
  const backgroundImage = '/hotel  .jpg';
  console.log(locations);
  const [formData, setFormData] = useState({
    name: '',
    rooms: '',
    checkin: '',
    checkout: '',
  });

  const [selectedHotel, setSelectedHotel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
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
      </form>
    </div>
  );
};

export default BookingForm;
