import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);
function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contact-title-wrapper')}>
                <h2>Contact me</h2>
            </div>
            <div className={cx('contact-content')}>
                <div className={cx('contact-infor-wrapper')}>
                    <span className={cx('contact-desc')}>
                        I am currently living and living in dormitory B Dai Hoc Quoc Gia, Thanh Pho Ho Chi Minh. If you
                        are interested in me, you can contact, I will reply as soon as possible. Hope we can help each
                        other in the future.
                    </span>
                    <div className={cx('contact-list')}>
                        <div className={cx('contact-item')}>
                            <span>Email</span>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('contact-icon')} />
                                trananhq2345@gmail.com
                            </span>
                        </div>
                        <div className={cx('contact-item')}>
                            <span>Phone</span>
                            <span>
                                <FontAwesomeIcon icon={faPhone} className={cx('contact-icon')} />
                                (+84) 098 970 2459
                            </span>
                        </div>
                        <div className={cx('contact-item')}>
                            <span>Follow me</span>
                            <span className={cx('contacts-social')}>
                                <FaFacebook className={cx('contact-icon')} />
                                <FaInstagram className={cx('contact-icon')} />
                                <FaLinkedin className={cx('contact-icon')} />
                                <FaGithub className={cx('contact-icon')} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('map-wrapper')}>
                    <iframe
                        className={cx('map')}
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0730521258847!2d106.7803902143277!3d10.882048360211956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d89aad780e49%3A0x54542761d4c22175!2zS8O9IHTDumMgeMOhIEtodSBCIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1669388087502!5m2!1svi!2s"
                        style={{
                            style: 'border:0',
                            allowFullScreen: '',
                            referrerPolicy: 'no-referrer-when-downgrade',
                        }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
