import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireBurner, faHome } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Footer = () => {
    return (
        <footer className={cx('footer')}>
            <div className={cx('container')}>
                <div className={cx('footer-content')}>
                    <div className={cx('footer-column')}>
                        <h3 className={cx('footer-column-title')}>
                            Về chúng tôi
                        </h3>
                        <p className={cx('footer-column-text')}>
                            Trung tâm tiệc cưới Adora tập trung vào việc tổ chức
                            các buổi tiệc cưới đáng nhớ và không quên cho khách
                            hàng.
                        </p>
                    </div>
                    <div className={cx('footer-column')}>
                        <h3 className={cx('footer-column-title')}>Liên hệ</h3>
                        <p className={cx('footer-column-text')}>
                            Địa chỉ: 371 Đường Nguyễn Kiệm, Thành phố Hồ Chí
                            Minh
                        </p>
                        <p className={cx('footer-column-text')}>
                            Email: info@weddingcenter.com
                        </p>
                        <p className={cx('footer-column-text')}>
                            Điện thoại: 0123456789
                        </p>
                    </div>
                    {/* <div className={cx('footer-column')}>
                        <h3 className={cx('footer-column-title')}>
                            Kết nối với chúng tôi
                        </h3>
                        <div className={cx('footer-social-icons')}>
                            <Link to="/" className={cx('footer-social-icon')}>
                                <FontAwesomeIcon icon={faFireBurner} />
                            </Link>
                            <Link to="/" className={cx('footer-social-icon')}>
                                <FontAwesomeIcon icon={faFireBurner} />
                            </Link>
                            <Link to="/" className={cx('footer-social-icon')}>
                                <FontAwesomeIcon icon={faFireBurner} />
                            </Link>
                        </div>
                    </div> */}
                </div>
                <div className={cx('footer-bottom')}>
                    <p className={cx('footer-bottom-text')}>
                        &copy; {new Date().getFullYear()} Trung tâm tiệc cưới
                        XYZ. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
