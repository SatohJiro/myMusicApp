import NECD from './abc.mp3';
import Suzume from './Nanoka-Hara.mp3';
import images from '~/assets/image';
import HTCA from './HayTraoChoAnh.mp3';
import GLAL from './GacLaiAuLo.mp3';
import NNCA from './NoiNayCoAnh.mp3';

const audios = [
    {
        src: NECD,
        title: 'Người Em Cố Đô',
        artist: 'Tăng Nhật Tuệ',
        img: images[0].src,
    },
    {
        src: Suzume,
        title: 'Suzume',
        artist: 'Nanoka Hara',
        img: images[1].src,
    },
    {
        src: HTCA,
        title: 'Hãy trao cho anh',
        artist: 'Sơn Tùng MTP',
        img: images[2].src,
    },
    {
        src: GLAL,
        title: 'Gác lại âu lo',
        artist: 'Miu Lê',
        img: images[3].src,
    },
    {
        src: NNCA,
        title: 'Nơi Này Có Anh',
        artist: 'Sơn Tùng MTP',
        img: images[4].src,
    },
];
export default audios;
