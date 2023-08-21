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
    const listData = [
        {
            id: 1,
            title: 'TRUNG TÂM TIỆC CƯỚI',
            content:
                'Các cặp đôi luôn chia sẻ với chúng tôi về điều mà họ thích nhất tại Adora, chính là gu thẩm mĩ tinh tế, thanh lịch. Với thế mạnh sẵn có và mong muốn tất cả các sự kiện...',
            img: 'https://riversidepalace.vn/multidata/unnamed.jpg',
            to: `/branch`,
        },
        {
            id: 2,
            title: 'SẢNH TIỆC CƯỚI',
            content:
                'Chúng tôi thấu hiểu bạn luôn mong muốn khoác lên không gian tiệc cưới một màu sắc riêng của mình và người bạn đời. Âm nhạc, hình ảnh, mọi diễn tiến trong ngày cưới của bạn...',
            img: 'https://riversidepalace.vn/multidata/75282264_3217889488240281_8876203907559194624_o.jpg',
            to: `/hall`,
        },
        {
            id: 3,
            title: 'THỰC ĐƠN TIỆC CƯỚI',
            content:
                'Một buổi tiệc chiêu đãi hoàn hảo trong ngày cưới sẽ thể hiện lòng mến khách của gia đình cũng như tương lai thịnh vượng cho đôi bạn trẻ. Thấu hiểu mối quan tâm hàng đầu của các...',
            img: 'https://riversidepalace.vn/multidata/img_2204.jpg',
            to: `/menu`,
        },
        {
            id: 4,
            title: 'DỊCH VỤ',
            content:
                'Dịch vụ tổ chức tiệc cưới trọn gói ngày nay được biết đến và trở thành một trong những lựa chọn hàng đầu của cô dâu chú rể. Vì sao dịch vụ này được yêu thích và những lợi ích khi sử dụng là gì?',
            img: 'https://riversidepalace.vn/multidata/dsc_0099.jpg',
            to: `/service`,
        },
    ];
    const listItem = listData.map((value, index) => ( 
        <PageWrap
            key={value.id}
            id={value.id}
            title={value.title}
            content={value.content}
            src={value.img}
            to={value.to}
        />
    ));

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Slideshow images={images} />
                {listItem}
            </div>
        </div>
    );
}

export default Home;
