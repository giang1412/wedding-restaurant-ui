import classNames from 'classnames/bind';
import styles from './Branch.module.scss';
import BranchItem from '~/components/BranchItem';
import { Link } from 'react-router-dom';
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
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={`/hall`} className={cx('branch-item')}>
                    {productsBranch.map((product) => (
                        <BranchItem
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            address={product.address}
                        />
                    ))}
                </Link>
            </div>
        </div>
    );
}

export default Branch;
