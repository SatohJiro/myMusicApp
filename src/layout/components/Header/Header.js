import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Player from '~/components/Player';

const cx = classNames.bind(styles);
const avatar = true;

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* <div className={cx('logo')}>
                    <img src={require('../../../assets/image/logo.png')} alt="logo"></img>
                </div> */}

                {/* <div className={cx('search')}>
                    <input placeholder="Seach Music" spellCheck={false}></input>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div> */}

                <Player></Player>

                {/* <div className={cx('avatar-wrapper')}>
                    {avatar ? (
                        <img
                            src={require('../../../assets/image/download.jpg')}
                            className={cx('avatar-img')}
                            alt="avatar"
                        ></img>
                    ) : (
                        <FontAwesomeIcon icon={faUser} className={cx('avatar-img')}></FontAwesomeIcon>
                    )}
                </div> */}
            </div>
        </header>
    );
}

export default Header;
