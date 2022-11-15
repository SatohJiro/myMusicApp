import classNames from 'classnames/bind';
import Header from '~/layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layout/components/Sidebar';
import Modebar from '~/layout/components/Modebar';
import Bg from '~/assets/image/10-3.jpg';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div
            className={cx('wrapper')}
            style={{
                backgroundImage: `url(${Bg})`,
            }}
        >
            <div className={cx('header-bar')}></div>
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                <Modebar></Modebar>
            </div>
            <Header />
        </div>
    );
}

export default DefaultLayout;
