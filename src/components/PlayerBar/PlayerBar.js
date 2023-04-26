import {
    faBackward,
    faCircleDown,
    faForward,
    faList,
    faMicrophone,
    faPause,
    faPlay,
    faRepeat,
    faShuffle,
    faVolumeHigh,
    faVolumeMute,
    faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './PlayerBar.module.scss';

import { useState, useRef, useEffect } from 'react';

import TimeSlider from 'react-input-slider';

import Audios from '~/assets/Music';

const cx = classNames.bind(styles);
const audios = Audios;

function Player({ setHideInfor, isHideInfor }) {
    const audioRef = useRef();
    const volumeBarRef = useRef();

    const [audioIndex, setAudioIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [isShowVolumeBar, setShowVolumeBar] = useState(false);
    const [isPlay, setPlay] = useState(false);
    const [isPlayRandom, setPlayRadom] = useState(false);
    const [isPlayLoop, setPlayLoop] = useState(false);

    useEffect(() => {
        if (isShowVolumeBar) {
            setTimeout(() => {
                setShowVolumeBar(!isShowVolumeBar);
            }, 4000);
        }
    }, [isShowVolumeBar]);

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (isPlay) audioRef.current.play();
    };
    const formatTime = (seconds) => {
        let minutes = Math.floor(seconds / 60);
        minutes = minutes >= 10 ? minutes : '0' + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = seconds >= 10 ? seconds : '0' + seconds;
        return minutes + ':' + seconds;
    };

    const handlePrevSong = () => {
        setAudioIndex(audioIndex === 0 ? audios.length - 1 : audioIndex - 1);
    };

    const handleNextSong = () => {
        setAudioIndex((audioIndex + 1) % audios.length);
    };
    const handleAutoNextSong = () => {
        if (isPlayLoop) {
            audioRef.current.currentTime = 0;
            setCurrentTime(0);
            audioRef.current.play();
        } else if (isPlayRandom) {
            setAudioIndex(Math.floor(Math.random() * audios.length));
        } else handleNextSong();
    };
    const handlePausePlayClick = () => {
        if (isPlay) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay(!isPlay);
    };

    const handleTimeSliderChange = ({ x }) => {
        audioRef.current.currentTime = x;
        setCurrentTime(x);

        if (!isPlay) {
            setPlay(true);
            audioRef.current.play();
        }
    };
    const handleVolumeChange = ({ y }) => {
        audioRef.current.volume = y;
        setVolume(y);
    };
    const handleShowVolumeBar = () => {
        setShowVolumeBar(!isShowVolumeBar);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('music-infor')}>
                <div className={cx('img-wrapper')}>
                    <img src={audios[audioIndex].img} alt="IMGAGE" loading="lazy" />
                </div>
                <div className={cx('title-wrapper')}>
                    <span className={cx('item-title', 'title')}>{audios[audioIndex].title}</span>
                    <div className={cx('author')} href="/Ha-Anh-Tuan">
                        {audios[audioIndex].artist}
                    </div>
                </div>
                <div
                    className={cx('hide-wrapper', isHideInfor ? 'up' : 'down')}
                    onClick={() => {
                        setHideInfor(!isHideInfor);
                    }}
                >
                    <FontAwesomeIcon icon={faCircleDown} className={cx('hide-icon')}></FontAwesomeIcon>
                </div>
            </div>

            <div className={cx('player-controls__container')}>
                <div className={cx('player-controls-left')}>
                    <div className={cx('media')}>
                        <div className={cx('media-left')}>
                            <div className={cx('image-wrapper')}>
                                <img src={audios[audioIndex].img} alt="" />
                            </div>
                        </div>
                        <div className={cx('media-content')}>
                            <div className={cx('song-info-wrapper')}>
                                <span className={cx('song-title-item')}>
                                    <div className={cx('title-wrapper')}>
                                        <span className={cx('item-title', 'title')}>{audios[audioIndex].title}</span>
                                    </div>
                                </span>
                            </div>

                            <div className={cx('subtitle')}>
                                <div className={cx('is-ghost')} href="/Ha-Anh-Tuan">
                                    {audios[audioIndex].artist}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('player-controls__player-bar')}>
                    <div className={cx('actions-wrapper')}>
                        <div className={cx('actions')}>
                            <button
                                className={cx('action-item', isPlayRandom && !isPlayLoop ? 'active' : null)}
                                tabIndex="0"
                                onClick={() => setPlayRadom(!isPlayRandom)}
                            >
                                <FontAwesomeIcon className={cx('icon')} icon={faShuffle}></FontAwesomeIcon>
                            </button>
                            <button className={cx('action-item')} tabIndex="0" onClick={handlePrevSong}>
                                <FontAwesomeIcon className={cx('icon')} icon={faBackward}></FontAwesomeIcon>
                            </button>
                            <button className={cx('action-item')} tabIndex="0" onClick={handlePausePlayClick}>
                                {isPlay ? (
                                    <FontAwesomeIcon className={cx('icon')} icon={faPause}></FontAwesomeIcon>
                                ) : (
                                    <FontAwesomeIcon className={cx('icon')} icon={faPlay}></FontAwesomeIcon>
                                )}
                            </button>
                            <button className={cx('action-item')} tabIndex="0" onClick={handleNextSong}>
                                <FontAwesomeIcon className={cx('icon')} icon={faForward}></FontAwesomeIcon>
                            </button>
                            <button
                                className={cx('action-item', isPlayLoop ? 'active' : null)}
                                tabIndex="0"
                                onClick={() => setPlayLoop(!isPlayLoop)}
                            >
                                <FontAwesomeIcon className={cx('icon')} icon={faRepeat}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>

                    <div className={cx('time-wrapper')}>
                        <span className={cx('time', 'left')}>{formatTime(currentTime)}</span>
                        <div className={cx('duration-bar')}>
                            <TimeSlider
                                className={cx('slider-bar')}
                                axis="x"
                                xmax={duration}
                                x={currentTime}
                                onChange={handleTimeSliderChange}
                                styles={{
                                    track: {
                                        backgroundColor: 'rgba(255,255,255,0.4)',
                                        height: '5px',
                                    },
                                    active: {
                                        backgroundColor: 'rgba(255,255,255,0.7)',
                                        height: '5px',
                                    },
                                    thumb: {
                                        marginTop: '1px',
                                        width: '10px',
                                        height: '10px',
                                        // backgroundColor: 'rgba(255,255,255,1)',
                                        backgroundImage: 'url(~/assets/image/cherry.png)',
                                        borderRadius: '5px',
                                    },
                                }}
                            />
                            <audio
                                ref={audioRef}
                                src={audios[audioIndex].src}
                                onLoadedData={handleLoadedData}
                                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                                onEnded={handleAutoNextSong}
                            />
                        </div>
                        <span className={cx('time', 'right')}>{formatTime(duration)}</span>
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
                        <button className={cx('action-right', 'action-volumn')} tabIndex="0">
                            {volume === 0 ? (
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faVolumeMute}
                                    onClick={handleShowVolumeBar}
                                ></FontAwesomeIcon>
                            ) : (
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faVolumeHigh}
                                    onClick={handleShowVolumeBar}
                                ></FontAwesomeIcon>
                            )}
                        </button>
                        <div ref={volumeBarRef} className={cx('wrapper-volumn-bar')}>
                            <TimeSlider
                                className={cx('slider-volumn-bar', isShowVolumeBar ? 'active-volume-bar' : null)}
                                axis="y"
                                ymax={1}
                                ymin={0}
                                y={volume}
                                ystep={0.1}
                                yreverse
                                onChange={handleVolumeChange}
                                styles={{
                                    track: {
                                        backgroundColor: 'rgba(255,255,255,0.4)',
                                        height: '5px',
                                    },
                                    active: {
                                        backgroundColor: 'rgba(255,255,255,0.7)',
                                        height: '5px',
                                    },
                                    thumb: {
                                        marginTop: '1px',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '5px',
                                    },
                                }}
                            />
                        </div>
                    </div>

                    <span className={cx('divide')}></span>

                    <button className={cx('action-right')} tabIndex="0">
                        <FontAwesomeIcon className={cx('icon')} icon={faList}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Player;
