import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBars, faFile, faGear, faHouse, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

const cx = classNames.bind(styles);
function Sidebar({ onClickModal, onClickMenu, isShowMenu }) {
    const tabs = [{ name: 'home' }, { name: 'profile' }, { name: 'contact' }, { name: 'project' }];
    const handleTabActiveReload = (url) => {
        let indexDelim = url.lastIndexOf('/');
        if (indexDelim === url.length - 1) return tabs[0].name;
        let path = url.substring(indexDelim + 1);
        return path;
    };

    const [activeTab, setActiveTab] = useState(handleTabActiveReload(window.location.href));
    const handleClick = (name) => {
        setActiveTab(name);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('actions-wrapper')}>
                <div className={cx('menu-wrapper')}>
                    <div
                        className={cx('action-btn')}
                        onClick={() => {
                            onClickMenu(!isShowMenu);
                        }}
                    >
                        <FontAwesomeIcon icon={faBars} className={cx('action-icon')}></FontAwesomeIcon>
                    </div>
                </div>
                <ul className={cx('list-action')}>
                    <Link to="/">
                        <li
                            key={tabs[0].name}
                            onClick={() => handleClick(tabs[0].name)}
                            className={cx('action-btn', tabs[0].name === activeTab ? 'active' : null)}
                        >
                            <FontAwesomeIcon
                                icon={faHouse}
                                className={cx('action-icon')}
                                data-tip="Home"
                                data-place="right"
                                data-offset="{'right': 20}"
                            />
                        </li>
                    </Link>
                    <Link to="/profile">
                        <li
                            key={tabs[1].name}
                            onClick={() => handleClick(tabs[1].name)}
                            className={cx('action-btn', cx(tabs[1].name === activeTab ? 'active' : null))}
                        >
                            <FontAwesomeIcon
                                icon={faAddressCard}
                                className={cx('action-icon')}
                                data-tip="Profile"
                                data-place="right"
                                data-offset="{'right': 20}"
                            />
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li
                            key={tabs[2].name}
                            onClick={() => handleClick(tabs[2].name)}
                            className={cx('action-btn', cx(tabs[2].name === activeTab ? 'active' : null))}
                        >
                            <FontAwesomeIcon
                                icon={faMapLocationDot}
                                className={cx('action-icon')}
                                data-tip="Contact"
                                data-place="right"
                                data-offset="{'right': 20}"
                            />
                        </li>
                    </Link>
                    <Link to="/project">
                        <li
                            key={tabs[tabs[3].name]}
                            onClick={() => handleClick(tabs[3].name)}
                            className={cx('action-btn', cx(tabs[3].name === activeTab ? 'active' : null))}
                        >
                            <FontAwesomeIcon
                                icon={faFile}
                                className={cx('action-icon')}
                                data-tip="Project"
                                data-place="right"
                                data-offset="{'right': 20}"
                            />
                        </li>
                    </Link>
                </ul>
            </div>
            <div className={cx('actions-user-wrapper')}>
                <ul>
                    <li
                        onClick={() => {
                            onClickModal(true);
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faGear}
                            className={cx('action-icon', 'action-setting')}
                            data-tip="Setting"
                            data-place="right"
                            data-offset="{'right': 20}"
                        ></FontAwesomeIcon>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default React.memo(Sidebar);
