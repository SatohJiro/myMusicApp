import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import avatar from '../../assets/image/myAvatar1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faLinkSlash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-detail-wrapper')}>
                <div className={cx('field-wrapper')}>
                    <div className={cx('field-tile')}>
                        <span className={cx('tile-icon')}>
                            <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                        </span>
                        STRENGTHS
                    </div>
                    <div className={cx('field-desc')}>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>Creativity </li>
                            <li className={cx('item')}>Flexibility </li>
                            <li className={cx('item')}>Dedication </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('field-wrapper')}>
                    <div className={cx('field-tile')}>
                        <span className={cx('tile-icon')}>
                            <FontAwesomeIcon icon={faLinkSlash}></FontAwesomeIcon>
                        </span>
                        WEEKNESSES
                    </div>
                    <div className={cx('field-desc')}>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>Emotive</li>
                            <li className={cx('item')}>Ambitious</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('info-overview-wrapper')}>
                <div className={cx('overview')}>
                    <h2>Satoh Jiro</h2>
                    <h4>Student of Nong Lam university</h4>
                    <h5>Information technology</h5>
                </div>
                <div className={cx('avatar')}>
                    <img src={avatar} alt="avatar"></img>
                </div>
            </div>
        </div>
    );
}

export default Profile;
