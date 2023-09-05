import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '~/components/Button';
import { useRef, useState } from 'react';
import Apis, { endpoints } from '~/utils/Apis';

const cx = classNames.bind(styles);

function Register() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        confirmPass: '',
    });
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);
    const avatar = useRef();

    const register = (evt) => {
        evt.preventDefault();

        const process = async () => {
            let form = new FormData();

            for (let field in user)
                if (field !== 'confirmPass') form.append(field, user[field]);

            form.append('avatar', avatar.current.files[0]);

            setLoading(true);
            let res = await Apis.post(endpoints['register'], form);
            if (res.status === 201) {
                //nav("/login");
            } else setErr('Hệ thống bị lỗi!');
        };

        if (user.password === user.confirmPass) process();
        else {
            setErr('Mật khẩu KHÔNG khớp!');
        }
    };
    const change = (evt, field) => {
        // setUser({...user, [field]: evt.target.value})
        setUser((current) => {
            return { ...current, [field]: evt.target.value };
        });
    };
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>ĐĂNG KÝ</h1>
            <form className={cx('form-login')} onSubmit={register}>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        type="text"
                        placeholder="Enter first name..."
                        onChange={(e) => change(e, 'firstName')}
                    />
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        type="text"
                        placeholder="Enter last name..."
                        onChange={(e) => change(e, 'lastName')}
                    />
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        type="email"
                        placeholder="Enter email..."
                        onChange={(e) => change(e, 'email')}
                    />
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        type="text"
                        placeholder="Enter username..."
                        onChange={(e) => change(e, 'username')}
                    />
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        type="password"
                        placeholder="Enter password..."
                        onChange={(e) => change(e, 'password')}
                    />
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        type="password"
                        placeholder="Enter confirm password..."
                        onChange={(e) => change(e, 'confirmPass')}
                    />
                </div>
                <div className={cx('btn-login')}>
                    <Button type="submit" primary>
                        ĐĂNG KÝ
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Register;
