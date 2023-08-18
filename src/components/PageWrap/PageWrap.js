/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import images from '~/assets/Images';
import classNames from 'classnames/bind';
import styles from './PageWrap.module.scss';

const cx = classNames.bind(styles);
function PageWrap({ title, content, ...props }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2 className={cx('title')}>{title}</h2>
                <p className={cx('content')}>{content}</p>
                <div className={cx('button')}>
                    <Link to={`/hall`}>
                        <Button primary>CHI TIẾT</Button>
                    </Link>
                </div>
            </div>
            <div className={cx('image')}>
                <img src={images.hall} alt="image" />
            </div>
        </div>
    );
}

export default PageWrap;
