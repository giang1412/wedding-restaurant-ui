import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import MenuItem from '~/components/MenuItem';
import Apis, { endpoints } from '~/utils/Apis';
import styles from './RestaurantService.module.scss';
const cx = classNames.bind(styles);
function RestaurantService() {
    const listService = [
        {
            id: 1,
            name: 'NGHI THỨC KHAI TIỆC',
            image: 'https://grandpalace.com.vn/multidata/dsc_0052.jpg',
            price: 300000,
        },
        {
            id: 2,
            name: 'TƯỢNG ĐÁ HOA ĐĂNG',
            image: 'https://mipecpalace.vn/wp-content/uploads/2023/05/Thien-nga-bang-dang-1.jpg',
            price: 300000,
        },
        {
            id: 3,
            name: 'BÀN LỄ TÂN ĐẶC BIỆT',
            image: 'https://www.blissvn.com/Data/Sites/1/News/415/trang-tri-ban-gallery-tiec-cuoi-t%E1%BA%A1i-adora-luxury.png',
            price: 300000,
        },
        {
            id: 4,
            name: 'THIỆP CƯỚI',
            image: 'https://intietkiem.com/wp-content/uploads/2020/06/thiet-ke-thiep-cuoi-1200x900.jpg',
            price: 300000,
        },
        {
            id: 5,
            name: 'BACKGROUND ĐẶC BIỆT',
            image: 'https://banghieuviet.org/wp-content/uploads/2023/06/backdrop-dam-cuoi-la-gi.jpg',
            price: 300000,
        },
        {
            id: 6,
            name: 'CỔNG HOA TƯƠI',
            image: 'https://hoatuoi9x.com/wp-content/uploads/2022/01/cong-cuoi-dep-2021.jpg',
            price: 300000,
        },
    ];

    const [data, setData] = useState([]);
    const loadService = async () => {
        try {
            let res = await Apis.get(endpoints['service']);
            setData(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        loadService();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>DỊCH VỤ KHÁC</h1>
            <p className={cx('desc')}>
                Adora cùng đội ngũ nhân viên chuyên nghiệp và dịch vụ đa dạng sẽ
                đem đến sự hài lòng và trở thành địa điểm tổ chức tiệc cưới hoàn
                hảo cho các cặp đôi.
            </p>
            <div className={cx('list-item')}>
                {data.map((value) => (
                    <MenuItem
                        image={value.image}
                        name={value.serviceName}
                        price={value.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default RestaurantService;
