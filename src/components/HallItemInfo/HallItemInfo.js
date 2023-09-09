import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HallItemInfo.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function HallItemInfo({ hall, onItemClick }) {
    const handleClick = () => {
        onItemClick(hall);
    };
    return (
        <Button rounded className={cx('menu-item')} onClick={handleClick}>
            {hall.hallName}
        </Button>
    );
}
HallItemInfo.propTypes = {
    hall: PropTypes.object,
    onItemClick: PropTypes.func,
};
export default HallItemInfo;
