import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Slideshow.module.scss';

const cx = classNames.bind(styles);
function Slideshow({ images, interval = 3000 }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const slideshowInterval = setInterval(nextImage, interval);

        return () => {
            clearInterval(slideshowInterval);
        };
    }, [interval]);
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length,
        );
    };

    return (
        <div>
            {/* <button onClick={previousImage}>Previous</button> */}
            <img
                className={cx('image')}
                src={images[currentImageIndex]}
                alt="Slideshow"
            />
            {/* <button onClick={nextImage}>Next</button> */}
        </div>
    );
}

export default Slideshow;
