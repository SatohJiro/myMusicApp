import classNames from 'classnames/bind';
import styles from './Modebar.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressCard, faFile, faGear, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';

// import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Modebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('actions-wrapper')}>
                {/* <ul>
                    <li>
                        <Link to="/">
                            <FontAwesomeIcon
                                icon={faHouse}
                                className={cx('action-icon')}
                                data-tip="Home"
                                data-place="right"
                                data-offset="{'right': 20}"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <FontAwesomeIcon
                                icon={faAddressCard}
                                className={cx('action-icon')}
                                data-tip="Profile"
                                data-place="right"
                                data-offset="{'right': 20}"
                            />
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faPhone}
                            className={cx('action-icon')}
                            data-tip="Contact"
                            data-place="right"
                            data-offset="{'right': 20}"
                        />
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faFile}
                            className={cx('action-icon')}
                            data-tip="Project"
                            data-place="right"
                            data-offset="{'right': 20}"
                        />
                    </li>
                </ul>
            </div>
            <div className={cx('actions-user-wrapper')}>
                <ul>
                    <li>
                        <FontAwesomeIcon
                            icon={faGear}
                            className={cx('action-icon')}
                            data-tip="Setting"
                            data-place="right"
                            data-offset="{'right': 20}"
                        ></FontAwesomeIcon>
                    </li>
                </ul> */}
            </div>
        </div>
    );
}

export default Modebar;
