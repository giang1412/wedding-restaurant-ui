import React from 'react';
import classNames from 'classnames/bind';
import styles from './MenuHall.module.scss';
import HallIemInfo from '~/components/HallItemInfo';

const cx = classNames.bind(styles);
function MenuHall({ halls, onItemClick }) {
    return (
        <div className={cx('menu-wrapper')}>
            <ul className={cx('menu-hall')}>
                {halls.map((hall) => (
                    <HallIemInfo
                        key={hall.hallID}
                        hall={hall}
                        onItemClick={onItemClick}
                    />
                ))}
            </ul>
        </div>
    );
}

export default MenuHall;
