import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ImageHome.module.scss';

const cx = classNames.bind(styles);
function ImageHome({ src, alt }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} src={src} alt={alt} />
        </div>
    );
}
ImageHome.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};
export default ImageHome;
