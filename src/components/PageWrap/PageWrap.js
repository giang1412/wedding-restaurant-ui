/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PageWrap.module.scss';
import ImageHome from '~/components/ImageHome';
import ContentHome from '~/components/ContentHome';
const cx = classNames.bind(styles);
function PageWrap({ ...props }) {
    return (
        <div className={cx('wrapper')}>
            {props.id % 2 == 1 ? (
                <>
                    <ContentHome {...props} />
                    <ImageHome {...props} />
                </>
            ) : (
                <>
                    <ImageHome {...props} />
                    <ContentHome {...props} />
                </>
            )}
        </div>
    );
}
PageWrap.propTypes = {
    props: PropTypes.node,
};
export default PageWrap;
