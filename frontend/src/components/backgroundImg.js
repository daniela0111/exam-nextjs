import React, { useState } from 'react';
import Image from 'next/image';

function Img() {
    const [loaded, setLoaded] = useState(false);

    const handleLoadingComplete = () => {
        setLoaded(true);
    };

    return (
        <div className={loaded ? 'img-container loaded' : 'img-container'}>
            <Image
                src="hotel.jpg"
                alt='background Picture'
                width={500}
                height={333}
                onLoad={handleLoadingComplete}
                className="lazy-loaded-image"
            />
        </div>
    )
}

export default Img;
