import React from 'react';
import classNames from 'classnames/bind';
import styles from './ItemHall.module.scss';
const cx = classNames.bind(styles);
function ItemHall({ hall }) {
    return (
        <div className={cx('inner')}>
            <div className={cx('title')}>{hall.name}</div>
            <div className={cx('desc')}>{hall.desc}</div>

            <div className={cx('image-block')}>
                <img
                    className={cx('image-hall')}
                    src={hall.image}
                    alt="hall-image"
                />
            </div>
        </div>
    );
}

export default ItemHall;
