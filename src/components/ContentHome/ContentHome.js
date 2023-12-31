import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContentHome.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function ContentHome({ to, title, content }) {
    return (
        <div className={cx('inner')}>
            <h2 className={cx('title')}>{title}</h2>
            <p className={cx('content')}>{content}</p>
            <div className={cx('button')}>
                <Link to={to}>
                    <Button primary>CHI TIẾT</Button>
                </Link>
            </div>
        </div>
    );
}
ContentHome.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
};
export default ContentHome;
