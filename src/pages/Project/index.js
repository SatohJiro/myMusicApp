import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import Card from '~/components/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import imgaes from '~/assets/image';
import { useState } from 'react';
import useWindowDimensions from '~/hooks/Window';

const projects = [];
imgaes[imgaes.length - 1].listBg.forEach((item) => {
    if (item.type === 'project') {
        projects.push(item);
    }
});

const cx = classNames.bind(styles);
function Project() {
    const { height, width } = useWindowDimensions();
    const slidesPerView = width > 700 ? 2 : 1;
    const [project, setProject] = useState(projects[0]);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Project</h3>
            <Swiper
                nothing={height}
                effect={'coverflow'}
                modules={[EffectCoverflow, Pagination]}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                centeredSlides={true}
                slidesPerView={slidesPerView}
                className={cx('wrapper-swiper')}
                spaceBetween={50}
                grabCursor={true}
            >
                {projects.map((item, index) => {
                    return (
                        item.type === 'project' && (
                            <SwiperSlide className={cx('swiper-slide')} key={index}>
                                <Card data={item} onActice={setProject}></Card>
                            </SwiperSlide>
                        )
                    );
                })}
            </Swiper>
            <div className={cx('desc-wrapper')}>
                <h4>{project.title}</h4>
                <span className={cx('desc-project')}>{project.descContent}</span>
            </div>
        </div>
    );
}

export default Project;
