import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ image, name, price }) {
    return (
        <div className={cx('wrap-item')}>
            <div className={cx('item')}>
                <div className={cx('image-wrap')}>
                    <img
                        className={cx('image-item')}
                        src={image}
                        alt="mon an"
                    />
                    <h3 className={cx('name')}>{name}</h3>
                    <p className={cx('price')}>{price}</p>
                </div>
            </div>
        </div>
    );
}

MenuItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
};
export default MenuItem;
