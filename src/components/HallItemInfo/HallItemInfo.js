import React from 'react';
import classNames from 'classnames/bind';
import styles from './HallItemInfo.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function HallItemInfo({ hall, onItemClick }) {
    const handleClick = () => {
        onItemClick(hall);
    };
    return (
        <Button rounded className={cx('menu-item')} onClick={handleClick}>
            {hall.hallName}
        </Button>
    );
}

export default HallItemInfo;
