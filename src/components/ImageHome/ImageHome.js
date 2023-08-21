import React from 'react';
import classNames from 'classnames/bind';
import styles from './ImageHome.module.scss';

const cx = classNames.bind(styles);
function ImageHome({ src, alt }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} src={src} alt={alt} />
        </div>
    );
}

export default ImageHome;
