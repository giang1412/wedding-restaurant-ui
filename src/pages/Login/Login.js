import { Navigate, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/Button';
import { useContext, useState } from 'react';
import Apis, { authApi, endpoints } from '~/utils/Apis';
import cookie from 'react-cookies';
import { MyUserContext } from '~/App';

const cx = classNames.bind(styles);

function Login() {
    const [user, dispatch] = useContext(MyUserContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const login = (evt) => {
        evt.preventDefault();

        const process = async () => {
            try {
                let res = await Apis.post(endpoints['login'], {
                    username: username,
                    password: password,
                });
                cookie.save('token', res.data);
                let { data } = await authApi().get(endpoints['current-user']);
                cookie.save('user', data);
                dispatch({
                    type: 'login',
                    payload: data,
                });
            } catch (error) {
                alert('Sai thong tin dang nhap');
            }
        };
        process();
    };

    if (user !== null) return <Navigate to={'/'} />;
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>ĐĂNG NHẬP</h1>
            <form className={cx('form-login')} onSubmit={login}>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        type="text"
                        placeholder="Enter username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        type="password"
                        placeholder="Enter password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={cx('btn-login')}>
                    <Button type="submit" primary>
                        ĐĂNG NHẬP
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Login;
