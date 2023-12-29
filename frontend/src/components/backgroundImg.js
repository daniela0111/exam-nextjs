//frontend/src/components/backgroundImg.js
import React, { useState } from 'react';
import Image from 'next/image';

function Img() {
    const [loaded, setLoaded] = useState(false);

    const handleLoadingComplete = () => {
        setLoaded(true);
    };

    return (
        <div className={loaded ? 'img-container loaded back' : 'img-container back'}>
            <Image
                src="hotel.jpg"
                alt='background Picture'
                width={500}
                height={500}
                onLoad={handleLoadingComplete}
                className="lazy-loaded-image"
                loaded="eager"

            />
        </div>
    )
}

export default Img;
