import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import PlayerBar from '~/components/PlayerBar';

import useWindowDimensions from '~/hooks/Window';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Header() {
    const { height, width } = useWindowDimensions();
    const [isHideInfor, setHideInfor] = useState(false);
    return (
        <header
            className={cx('wrapper', isHideInfor ? 'hide' : 'non-hide')}
            style={{
                position: width < 1210 ? 'fixed' : null,
                height: width < 1210 ? '100px' : null,
                top: width < 1210 ? `${height - 100}px` : null,
            }}
        >
            <div className={cx('inner')}>
                <PlayerBar setHideInfor={setHideInfor} isHideInfor={isHideInfor}></PlayerBar>
            </div>
        </header>
    );
}

export default Header;
