import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFile, faHouse, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Menu({ onClickWrapper }) {
    return (
        <div className={cx('wrapper')} onClick={() => onClickWrapper(false)}>
            <ul className={cx('wrapper-actions')}>
                <li>
                    <Link to={'/'}>
                        <div className={cx('action-item')}>
                            <FontAwesomeIcon icon={faHouse} />
                            <span className={cx('action-title')}>Home</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/profile'}>
                        <div className={cx('action-item')}>
                            <FontAwesomeIcon icon={faAddressCard} />
                            <span className={cx('action-title')}>Profile</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'}>
                        <div className={cx('action-item')}>
                            <FontAwesomeIcon icon={faMapLocationDot} />
                            <span className={cx('action-title')}>Contact</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/project'}>
                        <div className={cx('action-item')}>
                            <FontAwesomeIcon icon={faFile} />
                            <span className={cx('action-title')}>Project</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
