import React from 'react';
import classNames from 'classnames/bind';
import styles from './RestaurantMenu.module.scss';
import MenuItem from '~/components/MenuItem';
const cx = classNames.bind(styles);
function RestaurantMenu() {
    const listMenu = [
        {
            id: 1,
            name: 'Vẹm xanh bơ tỏi',
            image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
            price: 300000,
        },
        {
            id: 2,
            name: 'Vẹm xanh bơ tỏi',
            image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
            price: 300000,
        },
        {
            id: 3,
            name: 'Vẹm xanh bơ tỏi',
            image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
            price: 300000,
        },
        {
            id: 4,
            name: 'Vẹm xanh bơ tỏi',
            image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
            price: 300000,
        },
        {
            id: 5,
            name: 'Vẹm xanh bơ tỏi',
            image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
            price: 300000,
        },
        {
            id: 6,
            name: 'Vẹm xanh bơ tỏi',
            image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
            price: 300000,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>THỰC ĐƠN TỰ CHỌN</h2>
            <p className={cx('desc')}>
                Được các chuyên gia ẩm thực giàu kinh nghiệm của Grand Palace
                chế biến, thực đơn của chúng tôi luôn được đầu tư và đổi mới
                liên tục sẽ mang đến cho thực khách những món ăn đa dạng và có
                sự dung hoà giữa văn hoá ẩm thực Á - Âu, đáp ứng tất cả các nhu
                cầu của quý khách.
            </p>
            <div className={cx('list-item')}>
                {listMenu.map((value) => (
                    <MenuItem
                        key={value.id}
                        image={value.image}
                        name={value.name}
                        price={value.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;
