import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slideshow from '~/components/Slideshow/Slideshow';
import PageWrap from '~/components/PageWrap/PageWrap';

const cx = classNames.bind(styles);

function Home() {
    const images = [
        'https://theadora.vn/media/images/1690772236347658.png',
        'https://theadora.vn/media/images/1690797490967731.jpg',
        'https://theadora.vn/media/images/1642478764864150.jpg',
        'https://theadora.vn/media/images/1642478820406687.jpg',
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Slideshow images={images} />
            </div>
            <PageWrap
                title="SẢNH TIỆC CƯỚI"
                content="Chúng tôi thấu hiểu bạn luôn mong muốn khoác lên không gian
                    tiệc cưới một màu sắc riêng của mình và người bạn đời. Âm
                    nhạc, hình ảnh, mọi diễn tiến trong ngày cưới của bạn..."
            />
            <PageWrap />
            <PageWrap />
        </div>
    );
}

export default Home;
