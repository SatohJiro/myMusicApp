import classNames from 'classnames/bind';
import Header from '~/layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layout/components/Sidebar';
import Modebar from '~/layout/components/Modebar';
import imgaes from '~/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { useState, useRef } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const backgroundRef = useRef();
    const listBg = imgaes[imgaes.length - 1].listBg;
    const listTheme = [
        {
            title: 'theme1',
            first: '#7b4397',
            second: '#dc2430',
        },
        {
            title: 'theme2',
            first: '#43cea2',
            second: '#185a9d',
        },
        {
            title: 'theme3',
            first: '#ba5370',
            second: '#f5ba9b',
        },
        {
            title: 'theme4',
            first: '#4568dc',
            second: '#b06ab3',
        },
        {
            title: 'theme5',
            first: '#141e30',
            second: '#243b55',
        },
    ];

    const [isShowModal, setShowModal] = useState(false);
    const [currentBg, setCurrentBg] = useState(listBg[0]);
    // const [currentTheme, setCurrentTheme] = useState();

    const handleChangeTheme = (theme) => {
        backgroundRef.current.style.backgroundImage = `linear-gradient(to right, ${theme.first}, ${theme.second})`;
    };

    return (
        <div
            ref={backgroundRef}
            className={cx('wrapper')}
            style={{
                backgroundImage: `url(${currentBg.src})`,
            }}
        >
            <div className={cx('header-bar')}></div>
            <div className={cx('container')}>
                <Sidebar onClickModal={setShowModal} />
                <div className={cx('content')}>{children}</div>
                <Modebar></Modebar>
            </div>
            {isShowModal && (
                <div className={cx('modal-wrapper')} onClick={() => setShowModal(false)}>
                    <div className={cx('modal-content')}>
                        <div className={cx('modal-header')}>
                            <h3 className={cx('modal-title')}>Giao diện</h3>
                            <div className={cx('modal-close-wrapper')} onClick={() => setShowModal(false)}>
                                <FontAwesomeIcon icon={faClose} className={cx('modal-close-icon')}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={cx('modal-field-wrapper')}>
                            <h4 className={cx('modal-field-title')}>Theme</h4>
                            <div className={cx('modal-item-wrapper')}>
                                {listBg.map((item, index) => {
                                    return (
                                        <div
                                            className={cx('item')}
                                            key={index}
                                            onClick={() => {
                                                setCurrentBg(item);
                                            }}
                                        >
                                            <div className={cx('item-img')}>
                                                <img src={item.src} alt={item.title}></img>
                                            </div>
                                            <span className={cx('item-title')}>{item.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={cx('modal-field-wrapper')}>
                            <h4 className={cx('modal-field-title')}>Chủ đề</h4>
                            <div className={cx('modal-item-wrapper')}>
                                {listTheme.map((item, index) => {
                                    return (
                                        <div
                                            className={cx('item')}
                                            key={index}
                                            onClick={() => {
                                                handleChangeTheme(item);
                                            }}
                                        >
                                            <div
                                                className={cx('item-img')}
                                                style={{
                                                    backgroundImage: `linear-gradient(to right, ${item.first}, ${item.second})`,
                                                }}
                                            ></div>
                                            <span className={cx('item-title')}>{item.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Header />
        </div>
    );
}

export default DefaultLayout;
