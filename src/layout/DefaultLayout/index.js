import classNames from 'classnames/bind';
import Header from '~/layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layout/components/Sidebar';
import Modebar from '~/layout/components/Modebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
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
