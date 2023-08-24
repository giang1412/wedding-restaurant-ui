import React from 'react';
import classNames from 'classnames/bind';
import styles from './MenuHallItem.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function MenuHallItem({ hall, onItemClick }) {
    const handleClick = () => {
        onItemClick(hall);
    };
    return (
        // <li key={hall.id} className={cx('menu-item')} onClick={handleClick}>
        //     {hall.name}
        // </li>
        <Button rounded className={cx('menu-item')} onClick={handleClick}>
            {hall.name}
        </Button>
    );
}

export default MenuHallItem;
