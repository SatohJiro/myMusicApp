import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFile, faGear, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

const cx = classNames.bind(styles);
function Sidebar({ onClickModal }) {
    const tabs = [{ name: 'Home' }, { name: 'Profile' }, { name: 'Contact' }, { name: 'Project' }];
    const [activeTab, setActiveTab] = useState(0);
    const handleClick = (name) => {
        setActiveTab(name);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('actions-wrapper')}>
                <ul>
                    <Link to="/">
                        <li
                            key={tabs[0].name}
                            onClick={() => handleClick(tabs[0].name)}
                            className={cx(tabs[0].name === activeTab ? 'active' : null)}
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
                            className={cx(tabs[1].name === activeTab ? 'active' : null)}
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
                            className={cx(tabs[2].name === activeTab ? 'active' : null)}
                        >
                            <FontAwesomeIcon
                                icon={faPhone}
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
                            className={cx(tabs[3].name === activeTab ? 'active' : null)}
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
