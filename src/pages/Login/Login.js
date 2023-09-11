import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import cookie from 'react-cookies';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyUserContext } from '~/App';
import Button from '~/components/Button';
import Apis, { authApi, endpoints } from '~/utils/Apis';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

function Login() {
    const [user, dispatch] = useContext(MyUserContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const login = (evt) => {
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
                toast.error('Sai thông tin đăng nhập');
            }
        };
        process();
    };

    if (user !== null) return <Navigate to={'/'} />;

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>ĐĂNG NHẬP</h1>
            <form className={cx('form-login')} onSubmit={handleSubmit(login)}>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control', {
                            'is-invalid': errors.username,
                        })}
                        type="text"
                        placeholder="Enter username..."
                        value={username}
                        {...register('username', { required: true })}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && (
                        <span className={cx('error')}>
                            Vui lòng nhập username.
                        </span>
                    )}
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control', {
                            'is-invalid': errors.password,
                        })}
                        type="password"
                        placeholder="Enter password..."
                        value={password}
                        {...register('password', { required: true })}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <span className={cx('error')}>
                            Vui lòng nhập mật khẩu.
                        </span>
                    )}
                </div>

                <div className={cx('btn-login')}>
                    <Button type="submit" primary>
                        ĐĂNG NHẬP
                    </Button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Login;
