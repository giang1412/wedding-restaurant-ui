import React from 'react';
import classNames from 'classnames/bind';
import styles from './BranchItem.module.scss';

const cx = classNames.bind(styles);
function BranchItem({ image, title, address }) {
    return (
        <div className={cx('product-item')}>
            <img src={image} alt={title} className={cx('product-image')} />
            <h3 className={cx('product-title')}>{title}</h3>
            <p className={cx('product-address')}>{address}</p>
        </div>
    );
}

export default BranchItem;
