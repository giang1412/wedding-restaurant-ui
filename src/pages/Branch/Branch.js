import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BranchItem from '~/components/BranchItem';
import Apis, { endpoints } from '~/utils/Apis';
import styles from './Branch.module.scss';
const cx = classNames.bind(styles);
function Branch() {
    const productsBranch = [
        {
            id: 1,
            image: 'https://theadora.vn/skin/front/adora/images/page-system/img-1.jpg',
            title: 'THE ADORA CENTER',
            address: '431 Hoàng Văn Thụ, Phường 4, Quận Tân Bình',
        },
        {
            id: 2,
            image: 'https://theadora.vn/skin/front/adora/images/page-system/img-1.jpg',
            title: 'THE ADORA CENTER',
            address: '431 Hoàng Văn Thụ, Phường 4, Quận Tân Bình',
        },
        {
            id: 3,
            image: 'https://theadora.vn/skin/front/adora/images/page-system/img-1.jpg',
            title: 'THE ADORA CENTER',
            address: '431 Hoàng Văn Thụ, Phường 4, Quận Tân Bình',
        },
        {
            id: 4,
            image: 'https://theadora.vn/skin/front/adora/images/page-system/img-1.jpg',
            title: 'THE ADORA CENTER',
            address: '431 Hoàng Văn Thụ, Phường 4, Quận Tân Bình',
        },
        {
            id: 5,
            image: 'https://theadora.vn/skin/front/adora/images/page-system/img-1.jpg',
            title: 'THE ADORA CENTER',
            address: '431 Hoàng Văn Thụ, Phường 4, Quận Tân Bình',
        },
        {
            id: 6,
            image: 'https://theadora.vn/skin/front/adora/images/page-system/img-1.jpg',
            title: 'THE ADORA CENTER',
            address: '431 Hoàng Văn Thụ, Phường 4, Quận Tân Bình',
        },
        {
            id: 7,
            image: 'https://theadora.vn/skin/front/adora/images/page-system/img-1.jpg',
            title: 'THE ADORA CENTER',
            address: '431 Hoàng Văn Thụ, Phường 4, Quận Tân Bình',
        },
    ];

    const [data, setData] = useState([]);
    const loadBranch = async () => {
        try {
            let res = await Apis.get(endpoints['branch']);
            setData(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        loadBranch();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2 className={cx('title')}>TRUNG TÂM TIỆC CƯỚI</h2>
                <Link to={`/menu`} className={cx('branch-item')}>
                    {data.map((value) => (
                        <BranchItem
                            key={value.branchID}
                            image={value.image}
                            title={value.branchName}
                            address={value.address}
                        />
                    ))}
                </Link>
            </div>
        </div>
    );
}

export default Branch;
