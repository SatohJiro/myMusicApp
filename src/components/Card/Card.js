import { FaGithub } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';

import { BiUser } from 'react-icons/bi';
import { BsPen } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Card({ data }) {
    const numMember = [];
    for (let i = 0; i < data.numMem; i++) {
        numMember.push('1');
    }
    return (
        <div className={cx('card-wrapper')}>
            <div className={cx('info-overview-wrapper')}>
                <div className={cx('img')}>
                    <img src={data.src} alt="img"></img>
                </div>
                <h4 className={cx('title')}>{data.title}</h4>
                <div className={cx('overview')}>
                    <span className={cx('num-member')}>
                        <span>Member:</span>
                        <span className={cx('member-icon')}>
                            {numMember.map((item, index) => {
                                return <BiUser key={index} />;
                            })}
                        </span>
                    </span>
                    <span>Role: {data.role}</span>
                    <span className={cx('tool')}>
                        Tool: <span className={cx('tool-icon')}>{data.tool}</span>
                    </span>
                </div>
            </div>
            <div className={cx('status-wrapper')}>
                <BsPen className={cx('status-icon')} />
                <span>{data.descTitle}</span>
            </div>
            <div className={cx('contact-wrapper')}>
                <a href={data.git} target="_blank" rel="noreferrer">
                    <FaGithub className={cx('contact-icon')}></FaGithub>
                </a>
            </div>
        </div>
    );
}

export default Card;
