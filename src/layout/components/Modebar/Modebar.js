import classNames from 'classnames/bind';
import styles from './Modebar.module.scss';

const cx = classNames.bind(styles);
function Modebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('actions-wrapper')}></div>
        </div>
    );
}

export default Modebar;
