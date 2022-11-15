import {
    faBackward,
    faCirclePlay,
    faForward,
    faList,
    faMicrophone,
    faRepeat,
    faShuffle,
    faVolumeHigh,
    faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Player.module.scss';

const cx = classNames.bind(styles);
const audios = [
    {
        src: XuanOiOLaiChoi,
        title: 'Xuân Ơi Ở Lại Chơi',
        artist: 'Tăng Nhật Tuệ - Hoàng Yến Chibi - Tino',
    },
    {
        src: NgayXuanLongPhungSumVay,
        title: 'Ngày Xuân Long Phụng Sum Vầy',
        artist: 'Bích Phương',
    },
    {
        src: DoanXuanCa,
        title: 'Đoản Xuân Ca',
        artist: 'Bích Phương',
    },
];
function Player() {
    return (
        <div className={cx('player-controls__container')}>
            <div className={cx('player-controls-left')}>
                <div className={cx('media')}>
                    <div className={cx('media-left')}>
                        <div className={cx('image-wrapper')}>
                            <img
                                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/d/b/9/2db9a78a4bb650f5f79a094d6a142bf6.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className={cx('media-content')}>
                        <div className={cx('song-info-wrapper')}>
                            <span className={cx('song-title-item')}>
                                <div className={cx('title-wrapper')}>
                                    <span className={cx('item-title', 'title')}>Tháng Mấy Em Nhớ Anh?</span>
                                </div>
                            </span>
                        </div>

                        <h3 className={cx('subtitle')}>
                            <a className={cx('is-ghost')} href="/Ha-Anh-Tuan">
                                Hà Anh Tuấn
                            </a>
                        </h3>
                    </div>
                </div>
            </div>

            <div className={cx('player-controls__player-bar')}>
                <div className={cx('actions-wrapper')}>
                    <div className={cx('actions')}>
                        <button className={cx('action-item')} tabIndex="0">
                            <FontAwesomeIcon className={cx('icon')} icon={faShuffle}></FontAwesomeIcon>
                        </button>
                        <button className={cx('action-item')} tabIndex="0">
                            <FontAwesomeIcon className={cx('icon')} icon={faBackward}></FontAwesomeIcon>
                        </button>
                        <button className={cx('action-item')} tabIndex="0">
                            <FontAwesomeIcon className={cx('icon')} icon={faCirclePlay}></FontAwesomeIcon>
                        </button>
                        <button className={cx('action-item')} tabIndex="0">
                            <FontAwesomeIcon className={cx('icon')} icon={faForward}></FontAwesomeIcon>
                        </button>
                        <button className={cx('action-item')} tabIndex="0">
                            <FontAwesomeIcon className={cx('icon')} icon={faRepeat}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>

                <div className={cx('time-wrapper')}>
                    <span className={cx('time', 'left')}>04:15</span>
                    <div className={cx('duration-bar')}>
                        <div className={cx('slider-bar')}>
                            <div
                                tabIndex="0"
                                aria-valuemax="300.042449"
                                aria-valuemin="0"
                                aria-valuenow="254.859324"
                                draggable="false"
                                role="slider"
                                className={cx('slider-handle')}
                            ></div>
                        </div>
                    </div>
                    <span className={cx('time', 'right')}>05:00</span>
                </div>
            </div>

            <div className={cx('player-controls-right')}>
                <button className={cx('action-right')} tabIndex="0">
                    <FontAwesomeIcon className={cx('icon')} icon={faMicrophone}></FontAwesomeIcon>
                </button>

                <button className={cx('action-right')} tabIndex="0">
                    <FontAwesomeIcon className={cx('icon')} icon={faWindowRestore}></FontAwesomeIcon>
                </button>

                <div className={cx('zm-player-volume')}>
                    <button className={cx('action-right')} tabIndex="0">
                        <FontAwesomeIcon className={cx('icon')} icon={faVolumeHigh}></FontAwesomeIcon>
                    </button>
                    <div className={cx('zm-duration-bar')}>
                        <div className={cx('zm-slider-bar')}>
                            <div
                                tabIndex="0"
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="100"
                                draggable="false"
                                role="slider"
                                className={cx('zm-slider-handle')}
                            ></div>
                        </div>
                    </div>
                </div>

                <span className={cx('divide')}></span>

                <button className={cx('action-right')} tabIndex="0">
                    <FontAwesomeIcon className={cx('icon')} icon={faList}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
}

export default Player;
