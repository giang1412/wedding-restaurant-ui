/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import HallItem from '~/components/HallItem';
import MenuHall from '~/components/MenuHall';
import Apis, { endpoints } from '~/utils/Apis';
import styles from './Hall.module.scss';
const cx = classNames.bind(styles);

function Hall() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedHall, setSelectedHall] = useState(null);

    const loadHalls = async () => {
        try {
            let res = await Apis.get(endpoints['halls']);
            setData(res.data);
            setSelectedHall(res.data[0]);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadHalls();
    }, []);

    const handleHallClick = (hall) => {
        setSelectedHall(hall);
    };

    return (
        <div className={cx('wrapper')}>
            <MenuHall halls={data} onItemClick={handleHallClick} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                selectedHall && <HallItem hall={selectedHall} />
            )}
        </div>
    );
}

export default Hall;
