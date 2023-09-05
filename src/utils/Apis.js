import axios from 'axios';
import cookie from 'react-cookies';
const SERVER_CONTEXT = '/QL_TiecCuoi';
const SERVER = 'http://localhost:8080';

export const endpoints = {
    halls: `${SERVER_CONTEXT}/api/halls/`,
    login: `${SERVER_CONTEXT}/api/login/`,
    'current-user': `${SERVER_CONTEXT}/api/current-user/`,
    register: `${SERVER_CONTEXT}/api/users/`,
    menu: `${SERVER_CONTEXT}/api/menu/`,
    // pay: `${SERVER_CONTEXT}/api/pay/`,
    // details: (productId) => `${SERVER_CONTEXT}/api/products/${productId}/`,
    // comments: (productId) =>
    //     `${SERVER_CONTEXT}/api/products/${productId}/comments/`,
    // 'add-comment': `${SERVER_CONTEXT}/api/comments/`,
};

export const authApi = () => {
    return axios.create({
        baseURL: SERVER,
        headers: {
            Authorization: cookie.load('token'),
        },
    });
};

export default axios.create({
    baseURL: SERVER,
});
//http://localhost:8080/QL_TiecCuoi/api/halls/
