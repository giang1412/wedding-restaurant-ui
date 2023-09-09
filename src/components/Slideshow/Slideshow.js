import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('image')}
                src={images[currentImageIndex]}
                alt="Slideshow"
            />
        </div>
    );
}
Slideshow.propTypes = {
    images: PropTypes.array,
    interval: PropTypes.number,
};
export default Slideshow;
