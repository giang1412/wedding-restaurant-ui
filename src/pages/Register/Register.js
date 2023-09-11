import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '~/components/Button';
import { useRef, useState } from 'react';
import Apis, { endpoints } from '~/utils/Apis';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
const cx = classNames.bind(styles);

function Register() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        confirmPass: '',
    });
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const profileImage = useRef();
    const nav = useNavigate();

    const submitRegister = (data) => {
        const process = async () => {
            let form = new FormData();

            for (let field in user)
                if (field !== 'confirmPass') form.append(field, user[field]);

            form.append('profileImage', profileImage.current.files[0]);

            if (!profileImage.current || !profileImage.current.files[0]) {
                toast.error('Hình ảnh không được để trống');
                return;
            }
            setLoading(true);

            let res = await Apis.post(endpoints['register'], form);
            if (res.status === 201) {
                nav('/login');
            }
        };
        if (user.password === user.confirmPass) process();
        else {
            toast.error('Mật khẩu không khớp');
        }
    };
    const change = (evt, field) => {
        setUser((current) => {
            return { ...current, [field]: evt.target.value };
        });
    };
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>ĐĂNG KÝ</h1>
            {/* {err === null ? '' : alert(err)} */}
            <form
                className={cx('form-login')}
                onSubmit={handleSubmit(submitRegister)}
            >
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control', {
                            'is-invalid': errors.firstName,
                        })}
                        type="text"
                        placeholder="Enter first name..."
                        {...register('firstName', { required: true })}
                        onChange={(e) => change(e, 'firstName')}
                    />
                    {errors.firstName && (
                        <span className={cx('error')}>
                            Vui lòng nhập firstName.
                        </span>
                    )}
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control', {
                            'is-invalid': errors.lastName,
                        })}
                        type="text"
                        placeholder="Enter last name..."
                        {...register('lastName', { required: true })}
                        onChange={(e) => change(e, 'lastName')}
                    />
                    {errors.lastName && (
                        <span className={cx('error')}>
                            Vui lòng nhập lastName.
                        </span>
                    )}
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control', {
                            'is-invalid': errors.email,
                        })}
                        type="email"
                        placeholder="Enter email..."
                        {...register('email', { required: true })}
                        onChange={(e) => change(e, 'email')}
                    />
                    {errors.email && (
                        <span className={cx('error')}>
                            Vui lòng nhập email.
                        </span>
                    )}
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control', {
                            'is-invalid': errors.phoneNumber,
                        })}
                        type="text"
                        placeholder="Enter phone..."
                        {...register('phoneNumber', { required: true })}
                        onChange={(e) => change(e, 'phoneNumber')}
                    />
                    {errors.phoneNumber && (
                        <span className={cx('error')}>
                            Vui lòng nhập phone.
                        </span>
                    )}
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control', {
                            'is-invalid': errors.username,
                        })}
                        type="text"
                        placeholder="Enter username..."
                        value={user.username}
                        {...register('username', { required: true })}
                        onChange={(e) => change(e, 'username')}
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
                        value={user.password}
                        {...register('password', {
                            required: true,
                            minLength: 6,
                        })}
                        onChange={(e) => change(e, 'password')}
                    />
                    {errors.password && errors.password.type === 'required' && (
                        <span className={cx('error')}>
                            Vui lòng nhập mật khẩu.
                        </span>
                    )}

                    {errors.password &&
                        errors.password.type === 'minLength' && (
                            <span className={cx('error')}>
                                Mật khẩu phải có ít nhất 6 ký tự.
                            </span>
                        )}
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control', {
                            'is-invalid': errors.confirmPass,
                        })}
                        type="password"
                        value={user.confirmPass}
                        placeholder="Enter confirm password..."
                        {...register('confirmPass', { required: true })}
                        onChange={(e) => change(e, 'confirmPass')}
                    />
                    {errors.confirmPass && (
                        <span className={cx('error')}>
                            Vui lòng nhập lại password.
                        </span>
                    )}
                </div>
                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control', {
                            'is-invalid': errors.profileImage,
                        })}
                        type="file"
                        ref={profileImage}
                    />
                    {errors.profileImage && (
                        <span className={cx('error')}>
                            {errors.profileImage.message}
                        </span>
                    )}
                </div>
                <div className={cx('btn-login')}>
                    {loading === true ? (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    ) : (
                        <Button type="submit" primary>
                            ĐĂNG KÝ
                        </Button>
                    )}
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Register;
