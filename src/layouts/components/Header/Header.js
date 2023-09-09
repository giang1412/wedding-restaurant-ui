import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/Images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { useContext } from 'react';
import { MyUserContext } from '~/App';
const cx = classNames.bind(styles);
function Header() {
    const [user, dispatch] = useContext(MyUserContext);
    const logout = () => {
        dispatch({
            type: 'logout',
        });
    };
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
                    {/* <Link to={`/feedback`}>
                        <Button text>PHẢN HỒI</Button>
                    </Link> */}
                </div>

                <div className={cx('btn-register')}>
                    {user ? (
                        <>
                            <Image
                                src={user.profileImage}
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                            <Link className={cx('user-name')} to={`/`}>
                                {user.lastName}
                            </Link>
                            <Link to={`/`}>
                                <Button outline onClick={logout} small>
                                    ĐĂNG XUẤT
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link className={cx('btn-action')} to={`/register`}>
                                <Button primary small>
                                    {' '}
                                    ĐĂNG KÝ{' '}
                                </Button>
                            </Link>
                            <Link className={cx('btn-action')} to={`/login`}>
                                <Button primary small>
                                    ĐĂNG NHẬP
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
