import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import avatar from '../../assets/image/myAvatar1.png';

const cx = classNames.bind(styles);
function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-detail-wrapper')}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting
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
