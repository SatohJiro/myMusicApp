import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PlayerBar from '~/components/PlayerBar';

const cx = classNames.bind(styles);
// const avatar = true;

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <PlayerBar></PlayerBar>
            </div>
        </header>
    );
}

export default Header;
