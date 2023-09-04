// import { useContext, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import cookie from 'react-cookies';
// import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
// import { MyUserContext } from '../App';
// import Apis, { authApi, endpoints } from '../configs/Apis';

// const Login = () => {
//     const [user, dispatch] = useContext(MyUserContext);
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();
//     const [q] = useSearchParams();

//     const login = (evt) => {
//         evt.preventDefault();

//         const process = async () => {
//             try {
//                 let res = await Apis.post(endpoints['login'], {
//                     username: username,
//                     password: password,
//                 });
//                 cookie.save('token', res.data);

//                 let { data } = await authApi().get(endpoints['current-user']);
//                 cookie.save('user', data);

//                 dispatch({
//                     type: 'login',
//                     payload: data,
//                 });
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         process();
//     };

//     if (user !== null) {
//         let next = q.get('next') || '/';
//         return <Navigate to={next} />;
//     }

//     return (
//         <>
//             <h1 className="text-center text-info">ĐĂNG NHẬP NGƯỜI DÙNG</h1>

//             <Form onSubmit={login}>
//                 <Form.Group
//                     className="mb-3"
//                     controlId="exampleForm.ControlInput1"
//                 >
//                     <Form.Label>Tên đăng nhập</Form.Label>
//                     <Form.Control
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         type="text"
//                         placeholder="Tên đăng nhập"
//                     />
//                 </Form.Group>
//                 <Form.Group
//                     className="mb-3"
//                     controlId="exampleForm.ControlInput1"
//                 >
//                     <Form.Label>Mật khẩu</Form.Label>
//                     <Form.Control
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         type="password"
//                         placeholder="Mật khẩu"
//                     />
//                 </Form.Group>
//                 <Form.Group
//                     className="mb-3"
//                     controlId="exampleForm.ControlInput1"
//                 >
//                     <Button variant="info" type="submit">
//                         Đăng nhập
//                     </Button>
//                 </Form.Group>
//             </Form>
//         </>
//     );
// };

// export default Login;

import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/Button';
import { useState } from 'react';
import Apis, { authApi, endpoints } from '~/utils/Apis';
import cookie from 'react-cookies';

const cx = classNames.bind(styles);

function Login() {
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
                console.info(res.data);
                let { data } = await authApi().get(endpoints['current-user']);
                cookie.save('user', data);

                // dispatch({
                //     "type": "login",
                //     "payload": data
                // });
            } catch (error) {
                console.error(error);
            }
        };

        process();
    };
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
