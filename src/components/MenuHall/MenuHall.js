import React from 'react';
import classNames from 'classnames/bind';
import styles from './MenuHall.module.scss';
import MenuHallItem from '~/components/MenuHallItem';

const cx = classNames.bind(styles);
function MenuHall({ halls, onItemClick }) {
    //const { data } = props;
    return (
        <div className={cx('menu-wrapper')}>
            <ul className={cx('menu-hall')}>
                {halls.map((hall) => (
                    <MenuHallItem
                        key={hall.id}
                        hall={hall}
                        onItemClick={onItemClick}
                    />
                ))}
            </ul>
        </div>
    );
}

export default MenuHall;
