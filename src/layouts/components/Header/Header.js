import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/Images';

import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Logo" />
                </Link>

                <div className={cx('btn-menu')}>
                    <Link to={`/branch`}>
                        <Button text>CÁC TRUNG TÂM</Button>
                    </Link>
                    <Link to={`/hall`}>
                        <Button text>SẢNH CƯỚI</Button>
                    </Link>
                    <Link to={`/menu`}>
                        <Button text>THỰC ĐƠN</Button>
                    </Link>
                    <Link to={`/service`}>
                        <Button text>CÁC DỊCH VỤ</Button>
                    </Link>
                    <Link to={`/feedback`}>
                        <Button text>PHẢN HỒI</Button>
                    </Link>
                </div>

                <div className={cx('btn-register')}>
                    <Button primary>ĐĂNG KÝ</Button>
                    <Button primary>ĐĂNG NHẬP</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
