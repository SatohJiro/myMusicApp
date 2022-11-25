import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import avatar from '~/assets/image/myAvatar1.png';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaJava } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { DiJavascript1, DiDatabase } from 'react-icons/di';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiSpring, SiAngularjs, SiReact, SiMongodb, SiFigma, SiAdobe } from 'react-icons/si';
import { BiCodeBlock, BiDesktop } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import { TiLightbulb } from 'react-icons/ti';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card-wrapper')}>
                <div className={cx('info-overview-wrapper')}>
                    <div className={cx('avatar')}>
                        <img src={avatar} alt="avatar"></img>
                    </div>
                    <div className={cx('overview')}>
                        <h2>Satoh Jiro</h2>
                        <h4>Student of Nong Lam university</h4>
                        <h5>Information technology</h5>
                    </div>
                </div>
                <div className={cx('status-wrapper')}>
                    <h4>Looking for a place to practice</h4>
                </div>
                <div className={cx('contact-wrapper')}>
                    <ul className={cx('contact-list')}>
                        <li className={cx('contact-item')}>
                            <FaFacebook className={cx('contact-icon')} />
                        </li>
                        <li className={cx('contact-item')}>
                            <FaInstagram className={cx('contact-icon')} />
                        </li>
                        <li className={cx('contact-item')}>
                            <FaLinkedin className={cx('contact-icon')} />
                        </li>
                        <li className={cx('contact-item')}>
                            <FaGithub className={cx('contact-icon')} />
                        </li>
                    </ul>
                </div>
                <div className={cx('Maxim-wrapper')}>
                    <h5>Music is the silence between the notes</h5>
                </div>
            </div>
            <div className={cx('infor-wrappper')}>
                <div className={cx('infor-desc')}>
                    <h3 className={cx('title-desc')}>
                        <TiLightbulb className={cx('icon-desc')} /> <span>What i do?</span>
                    </h3>
                    <span>
                        I am currently a final year student of Nong Lam university , looking for a place to improve my
                        knowledge.
                    </span>
                </div>
                <div className={cx('list-skill-wrapper')}>
                    {/* Language */}
                    <div className={cx('skill-wrapper')}>
                        <div className={cx('skill-title-wrapper')}>
                            <BiCodeAlt className={cx('icon')} />
                            <span className={cx('title')}>Language</span>
                        </div>
                        <div className={cx('skill-desc-wrapper')}>
                            <div className={cx('skill-item')}>
                                <span className={cx('icon-wrapper')}>
                                    <AiOutlineHtml5 className={cx('icon')} />
                                </span>
                                <span className={cx('title')}>HTML5</span>
                            </div>
                            <div className={cx('skill-item')}>
                                <span className={cx('icon-wrapper')}>
                                    <DiJavascript1 className={cx('icon')} />
                                </span>
                                <span className={cx('title')}>Javascript</span>
                            </div>
                            <div className={cx('skill-item')}>
                                <span className={cx('icon-wrapper')}>
                                    <FaJava className={cx('icon')} />
                                </span>
                                <span className={cx('title')}>Java</span>
                            </div>
                        </div>
                    </div>
                    {/* Framework */}
                    <div className={cx('skill-wrapper')}>
                        <div className={cx('skill-title-wrapper')}>
                            <BiCodeBlock className={cx('icon')} />
                            <span className={cx('title')}>Framework</span>
                        </div>
                        <div className={cx('skill-desc-wrapper')}>
                            <div className={cx('skill-item')}>
                                <span className={cx('icon-wrapper')}>
                                    <SiAngularjs className={cx('icon')} />
                                </span>
                                <span className={cx('title')}>AngularJS</span>
                            </div>
                            <div className={cx('skill-item')}>
                                <span className={cx('icon-wrapper')}>
                                    <SiReact className={cx('icon')} />
                                </span>
                                <span className={cx('title')}>ReactJS</span>
                            </div>
                            <div className={cx('skill-item')}>
                                <span className={cx('icon-wrapper')}>
                                    <SiSpring className={cx('icon')} />
                                </span>
                                <span className={cx('title')}>Spring</span>
                            </div>
                        </div>
                    </div>
                    {/* DATABASE */}
                    <div className={cx('skill-wrapper')}>
                        <div className={cx('skill-title-wrapper')}>
                            <DiDatabase className={cx('icon')} />
                            <span className={cx('title')}>Database</span>
                        </div>
                        <div className={cx('skill-desc-wrapper')}>
                            <div className={cx('skill-item')}>
                                <span className={cx('icon-wrapper')}>
                                    <GrMysql className={cx('icon')} />
                                </span>
                                <span className={cx('title')}>MySQL</span>
                            </div>
                            <div className={cx('skill-item')}>
                                <span className={cx('icon-wrapper')}>
                                    <SiMongodb className={cx('icon')} />
                                </span>
                                <span className={cx('title')}>MongoDB</span>
                            </div>
                        </div>
                    </div>
                    {/* UX/UI */}
                    <div className={cx('skill-wrapper')}>
                        <div className={cx('skill-title-wrapper')}>
                            <BiDesktop className={cx('icon')} />
                            <span className={cx('title')}>UX/UI</span>
                        </div>
                        <div className={cx('skill-desc-wrapper')}>
                            <div className={cx('skill-item')}>
                                <span className={cx('icon-wrapper')}>
                                    <SiAdobe className={cx('icon')} />
                                </span>
                                <span className={cx('title')}>Adobe XD</span>
                            </div>
                            <div className={cx('skill-item')}>
                                <span className={cx('icon-wrapper')}>
                                    <SiFigma className={cx('icon')} />
                                </span>
                                <span className={cx('title')}>Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
