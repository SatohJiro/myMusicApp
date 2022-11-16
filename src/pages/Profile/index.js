import classNames from 'classnames/bind';
import ProfilePanel from '~/components/Profile';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);
function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile-wrapper')}>
                <ProfilePanel></ProfilePanel>
            </div>
            <div className={cx('profile-detail')}>
                <span>
                    My name is Nguyen Tran Anh and I'm a Vietnamese. I am twenty-one years old. I live in Ho Chi Minh
                    city in the south of Vietnam. I'm a generous and easy-going person but when it comes to work I'm a
                    competitive perfectionist. I'm also an optimistic and outgoing person so I have many friends and
                    other social relationships. I enjoy reading Manga, a style of Japanese comic books and graphic
                    novels, I also love listening to music. I decided to become a Developer because have always been
                    fascinated by technology and logic problems. My future goals is an opportunity to go abroad to make
                    a difference in the community. Five years from now, I want to become a project manager of a
                    Software, As a project manager, my primary goals are managing people, set budgets, and making
                    decisions of all kinds. I also want to speak English fluently so I can work with people from
                    different countries.
                </span>
            </div>
        </div>
    );
}

export default Profile;
