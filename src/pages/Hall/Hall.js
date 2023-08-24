/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import styles from './Hall.module.scss';
import MenuHall from '~/components/MenuHall';
import ItemHall from '~/components/ItemHall/ItemHall';
import { useState } from 'react';
//import ItemHall from '~/components/ItemHall/ItemHall';
const cx = classNames.bind(styles);
function Hall() {
    let listHall = [
        {
            id: 1,
            name: 'SẢNH PLATIN',
            desc: 'Sảnh Platin với kích thước 386 m2 được bày trí theo phong cách Châu Âu sang trọng sẽ thật sự phù hợp cho một hôn lễ ấm cúng với số lượng khách mời trong khoảng 20 đến 26 bàn tiệc. Diện tích sảnh có thể mở rộng linh hoạt với sức chứa lên đến 1500 khách (150 bàn) nhằm đáp ứng cho nhiều hình thức và nhu cầu đặt tiệc khác nhau.',
            image: 'https://grandpalace.com.vn/multidata/lnom1875_1.jpg',
        },
        {
            id: 2,
            name: 'SẢNH VENUS',
            desc: 'Sảnh Venus với kích thước sảnh 544 m2 được bày trí theo phong cách Châu Âu sang trọng có sức chứa từ 30 đến 40 bàn tiệc trên nền vàng ấn tượng. Diện tích sảnh có thể mở rộng linh hoạt với sức chứa lên đến 1500 khách (150 bàn) nhằm đáp ứng cho nhiều hình thức và nhu cầu đặt tiệc khác nhau.',
            image: 'https://grandpalace.com.vn/multidata/lnom1574_1-643.jpg',
        },
        {
            id: 3,
            name: 'SẢNH ELITE',
            desc: 'Sảnh Elite với kích thước sảnh 544 m2 được bày trí theo phong cách Châu Âu sang trọng có sức chứa từ 30 đến 40 bàn tiệc trên nền vàng ấn tượng. Diện tích sảnh có thể mở rộng linh hoạt với sức chứa lên đến 1500 khách (150 bàn) nhằm đáp ứng cho nhiều hình thức và nhu cầu đặt tiệc khác nhau.',
            image: 'https://grandpalace.com.vn/multidata/lnom1703_1.jpg',
        },
        {
            id: 4,
            name: 'SẢNH MERCURY',
            desc: 'Sảnh Mercury với kích thước sảnh 544 m2 được bày trí theo phong cách Châu Âu sang trọng có sức chứa từ 30 đến 40 bàn tiệc trên nền vàng ấn tượng. Diện tích sảnh có thể mở rộng linh hoạt với sức chứa lên đến 1500 khách (150 bàn) nhằm đáp ứng cho nhiều hình thức và nhu cầu đặt tiệc khác nhau.',
            image: 'https://grandpalace.com.vn/multidata/lnom1550.jpg',
        },
        {
            id: 5,
            name: 'SẢNH PAVILON',
            desc: 'Sảnh Pavilon với kích thước sảnh 544 m2 được bày trí theo phong cách Châu Âu sang trọng có sức chứa từ 30 đến 40 bàn tiệc trên nền xanh độc đáo. Diện tích sảnh có thể mở rộng linh hoạt với sức chứa lên đến 850 khách (85 bàn) nhằm đáp ứng cho nhiều hình thức và nhu cầu đặt tiệc khác nhau.',
            image: 'https://grandpalace.com.vn/multidata/lnom1807_1.jpg',
        },
    ];

    const [halls, setHalls] = useState(listHall);
    const [selectedHall, setSelectedHall] = useState(listHall[0]);

    const handleHallClick = (hall) => {
        setSelectedHall(hall);
    };
    return (
        <div className={cx('wrapper')}>
            <MenuHall halls={listHall} onItemClick={handleHallClick} />
            {selectedHall && <ItemHall hall={selectedHall} />}
        </div>
    );
}

export default Hall;
