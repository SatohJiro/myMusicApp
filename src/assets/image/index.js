import NECD from './NECD.jpg';
import Suzume from './suzune.jpg';
import HTCA from './HayTraoChoAnh.jpg';
import GLAL from './GacLaiAuLo.jpg';
import NNCA from './NoiNayCoAnh.jpg';
import BDTNR from './BuongDoiTayNhauRa.jpg';
import ECNHQ from './EmCuaNgayHomQua.jpg';
import KB from './KhongBang.jpg';
import KMDT from './KhuonMatDangThuong.jpg';
import NDT from './NgayDauTien.jpg';
import ADQVCD from './AnhDaQuenVoiCoDon.jpg';
import Playah from './Playah.jpg';
import VLDD from './VaiLanDonDua.jpg';
import Yoru from './YoruNiKakeru.jpg';
import Yourname from './yourname.jpg';

import bg from './bg.jpg';
import bg1 from './bg1.jpg';
import bg2 from './bg2.jpg';
import bg3 from './bg3.jpg';
import bg4 from './bg4.jpg';
import bg5 from './bg5.jpg';
import bg6 from './bg6.jpg';

import LTDT from './LTDT.jpg';
import AI from './AI.jpg';
import NLD from './nld.jpg';
import FE from './FE.jpg';

import { FaJava } from 'react-icons/fa';
import { SiAngularjs, SiJavascript } from 'react-icons/si';

const imgaes = [
    {
        src: NECD,
        title: 'Người Em Cố Đô',
    },
    {
        src: Suzume,
        title: 'Nanoka Hara',
    },
    {
        src: HTCA,
        title: 'Sơn Tùng MTP',
    },
    {
        src: GLAL,
        title: 'Miu Lê',
    },
    {
        src: NNCA,
        title: 'Sơn Tùng MTP',
    },
    {
        src: BDTNR,
        title: 'Sơn Tùng MTP',
    },
    {
        src: ECNHQ,
        title: 'Sơn Tùng MTP',
    },
    {
        src: KB,
        title: 'Rin',
    },
    {
        src: KMDT,
        title: 'Sơn Tùng MTP',
    },
    {
        src: NDT,
        title: 'Đức Phúc',
    },
    {
        src: ADQVCD,
        title: 'Sobin Hoàng Sơn',
    },
    {
        src: Playah,
        title: 'Sobin Hoàng Sơn',
    },
    {
        src: VLDD,
        title: 'Sobin Hoàng Sơn',
    },
    {
        src: Yoru,
        title: 'Yoasobi',
    },
    {
        src: Yourname,
        title: 'none',
    },
    {
        name: 'bg',
        listBg: [
            {
                title: 'bg',
                type: 'bg',
                url: `url(${bg})`,
                src: bg,
            },
            {
                title: 'bg1',
                type: 'bg',
                url: `url(${bg1})`,
                src: bg1,
            },
            {
                title: 'bg2',
                type: 'bg',
                url: `url(${bg2})`,
                src: bg2,
            },
            {
                title: 'bg3',
                type: 'bg',
                url: `url(${bg3})`,
                src: bg3,
            },
            {
                title: 'bg4',
                type: 'bg',
                url: `url(${bg4})`,
                src: bg4,
            },
            {
                title: 'bg5',
                type: 'bg',
                url: `url(${bg5})`,
                src: bg5,
            },
            {
                title: 'bg6',
                type: 'bg',
                url: `url(${bg6})`,
                src: bg6,
            },
            {
                title: 'theme1',
                type: 'theme',
                url: `linear-gradient(to right, #7b4397, #dc2430)`,
            },
            {
                title: 'theme2',
                type: 'theme',
                url: `linear-gradient(to right,  #A14ED9, #1D0259)`,
            },
            {
                title: 'theme3',
                type: 'theme',
                url: `linear-gradient(to right, #BF41B7,#F20C8B )`,
            },
            {
                title: 'theme4',
                type: 'theme',
                url: `linear-gradient(to right, #4568dc, #b06ab3)`,
            },
            {
                title: 'theme5',
                type: 'theme',
                url: `linear-gradient(to right, #141e30, #243b55)`,
            },

            {
                title: 'Graph theory',
                type: 'project',
                src: LTDT,
                numMem: 2,
                role: 'Leader, dev, design UI',
                descTitle: 'Implement DFS, BFS, Dijkstra algorithms and represent them on the interface',
                git: 'https://github.com/SatohJiro/DFS-BFS-Dijkstra_Algorithm_Demo',
                tool: <FaJava />,
                descContent:
                    'In this subject, we learn about basic concepts of graphs, build and process graphs on computers, special types of graphs (Euler, Hamilton, Tree,...), Real-life problems are solved graphically',
            },

            {
                title: 'Introduce to artificial intelligence',
                type: 'project',
                src: AI,
                numMem: 2,
                role: 'Leader, dev, design UI',
                descTitle: 'Coding sudoku game, implement genetic algorithms for AI to solve game',
                git: 'https://github.com/SatohJiro/Genetic_algorithm_SudokuGame',
                tool: <FaJava />,
                descContent:
                    "Artificial intelligence is one of the fields that I really love, this subject has brought me a lot of new and useful knowledge. In this project I chose to apply genetic algorithm to generate the 'genes' then 'cross-breeding' them to give the answer of the sudoku game.",
            },

            {
                title: 'Front-end programming',
                type: 'project',
                src: FE,
                numMem: 1,
                role: 'dev, design UI',
                descTitle: 'Coding game brick-breaker',
                git: 'https://github.com/SatohJiro/FE_Game_Brick_Breaker',
                tool: <SiJavascript />,
                descContent:
                    'This is the subject that we first exposed to the front-end, Learn the basic concepts and how to use html, css, javascript to make a website. This project is the midterm topic where I had to use javascript to build a game with 6 levels of increasing difficulty.',
            },
            {
                title: 'Front-end programming',
                type: 'project',
                src: NLD,
                numMem: 3,
                role: 'Leader, dev, design UI',
                descTitle: 'Crawl data from website nld.com.vn and display them',
                git: 'https://github.com/SatohJiro/Nhom24-AppTinTuc_FE_Thu2Ca4_2022',
                tool: <SiAngularjs />,
                descContent:
                    'After the brick-breaker game, this is the final project where i have to get acquainted with a very unique framework, Angular. I learned how to modularize functions, break UI into components and analyze data flow',
            },
        ],
    },
];
export default imgaes;
