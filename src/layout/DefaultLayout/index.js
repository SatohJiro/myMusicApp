import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/layout/components/Header';
import Sidebar from '~/layout/components/Sidebar';
import Modebar from '~/layout/components/Modebar';
import Modal from '~/components/Modal';
import Menu from '~/components/Menu';

import imgaes from '~/assets/image';

import { useState, useRef } from 'react';

const cx = classNames.bind(styles);
const listBg = imgaes[imgaes.length - 1].listBg;
function DefaultLayout({ children }) {
    const backgroundRef = useRef();

    const [isShowMenu, setShowMenu] = useState(false);
    const [isShowModal, setShowModal] = useState(false);
    const [currentBg, setCurrentBg] = useState(listBg[5]);

    return (
        <div
            ref={backgroundRef}
            className={cx('wrapper')}
            style={{
                backgroundImage: currentBg.url,
            }}
        >
            <div className={cx('header-bar')}></div>
            <div className={cx('container')}>
                <Sidebar onClickModal={setShowModal} onClickMenu={setShowMenu} isShowMenu={isShowMenu} />
                <div className={cx('content')}>{children}</div>
                <Modebar></Modebar>
            </div>
            {isShowModal && (
                <Modal
                    onClickWrapper={setShowModal}
                    onClickClose={setShowModal}
                    onClickItemBg={setCurrentBg}
                    dataBG={listBg}
                ></Modal>
            )}
            {isShowMenu && <Menu onClickWrapper={setShowMenu}></Menu>}
            <Header className={cx('playbar')} />
        </div>
    );
}

export default DefaultLayout;
