import Image from 'next/image'
import React, { useState } from 'react';

function Img() {
    return (
        <Image
        src="hotel.jpg"
        alt='background Picture'
        width={500}
        />
    )
}

export default Img
