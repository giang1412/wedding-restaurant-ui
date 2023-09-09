import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import MenuItem from '~/components/MenuItem';
import Apis, { endpoints } from '~/utils/Apis';
import styles from './RestaurantMenu.module.scss';
const cx = classNames.bind(styles);
function RestaurantMenu() {
    // const listMenu = [
    //     {
    //         id: 1,
    //         name: 'Vẹm xanh bơ tỏi',
    //         image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
    //         price: 300000,
    //     },
    //     {
    //         id: 2,
    //         name: 'Vẹm xanh bơ tỏi',
    //         image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
    //         price: 300000,
    //     },
    //     {
    //         id: 3,
    //         name: 'Vẹm xanh bơ tỏi',
    //         image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
    //         price: 300000,
    //     },
    //     {
    //         id: 4,
    //         name: 'Vẹm xanh bơ tỏi',
    //         image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
    //         price: 300000,
    //     },
    //     {
    //         id: 5,
    //         name: 'Vẹm xanh bơ tỏi',
    //         image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
    //         price: 300000,
    //     },
    //     {
    //         id: 6,
    //         name: 'Vẹm xanh bơ tỏi',
    //         image: 'https://riversidepalace.vn/resizemultidata/vem-xanh-phu-bo-toi.png',
    //         price: 300000,
    //     },
    // ];
    const [data, setData] = useState([]);
    const loadMenu = async () => {
        try {
            let res = await Apis.get(endpoints['menu']);
            setData(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        loadMenu();
    }, []);

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
                {data.map((value) => (
                    <MenuItem
                        key={value.menuID}
                        image={value.image}
                        name={value.menuName}
                        price={value.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;
