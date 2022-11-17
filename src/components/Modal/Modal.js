import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Modal({ onClickWrapper, onClickClose, onClickItemBg, dataBG }) {
    return (
        <div className={cx('modal-wrapper')} onClick={() => onClickWrapper(false)}>
            <div className={cx('modal-content')}>
                <div className={cx('modal-header')}>
                    <h3 className={cx('modal-title')}>Giao diện</h3>
                    <div className={cx('modal-close-wrapper')} onClick={() => onClickClose(false)}>
                        <FontAwesomeIcon icon={faClose} className={cx('modal-close-icon')}></FontAwesomeIcon>
                    </div>
                </div>
                <div className={cx('modal-field-wrapper')}>
                    <h4 className={cx('modal-field-title')}>Chủ đề</h4>
                    <div className={cx('modal-item-wrapper')}>
                        {dataBG.map((item, index) => {
                            return (
                                item.type === 'bg' && (
                                    <div
                                        className={cx('item')}
                                        key={index}
                                        onClick={() => {
                                            onClickItemBg(item);
                                        }}
                                    >
                                        <div
                                            className={cx('item-img')}
                                            style={{
                                                backgroundImage: item.url,
                                            }}
                                        >
                                            <img src={item.src} alt={item.title}></img>
                                        </div>
                                        <span className={cx('item-title')}>{item.title}</span>
                                    </div>
                                )
                            );
                        })}
                    </div>
                </div>
                <div className={cx('modal-field-wrapper')}>
                    <h4 className={cx('modal-field-title')}>Theme</h4>
                    <div className={cx('modal-item-wrapper')}>
                        {dataBG.map((item, index) => {
                            return (
                                item.type === 'theme' && (
                                    <div
                                        className={cx('item')}
                                        key={index}
                                        onClick={() => {
                                            onClickItemBg(item);
                                        }}
                                    >
                                        <div
                                            className={cx('item-img')}
                                            style={{
                                                backgroundImage: item.url,
                                            }}
                                        ></div>
                                        <span className={cx('item-title')}>{item.title}</span>
                                    </div>
                                )
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Modal);
