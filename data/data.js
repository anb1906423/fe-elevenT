import { FaAngleDown } from 'react-icons/fa'

function removeAccentsAndLowerCase(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ô|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

export const menu = [
    {
        title: 'sản phẩm',
        href: '/san-pham',
        list: [
        ],
    },
    {
        title: 'Áo nam',
        icon: <FaAngleDown />,
        href: '/san-pham/ao-nam',
        list: [
            {
                title: 'Áo Dài Tay',
                href: '/san-pham/ao-nam/ao-dai-tay'
            },
            {
                title: 'Áo T-Shirt',
                href: '/san-pham/ao-nam/ao-t-shirt'
            },
            {
                title: 'Áo Sơ Mi',
                href: '/san-pham/ao-nam/ao-so-mi'
            },
            {
                title: 'Áo Thể Thao',
                href: '/san-pham/ao-nam/ao-the-thao'
            },
            {
                title: 'Áo In Hình',
                href: '/san-pham/ao-nam/ao-in-hinh'
            },
            {
                title: 'Áo Khoác',
                href: '/san-pham/ao-nam/ao-khoac'
            },
        ],
    },
    {
        title: 'Quần nam',
        icon: <FaAngleDown />,
        href: '/san-pham/quan-nam',
        list: [
            {
                title: 'Quần Shorts',
                href: '/san-pham/quan-nam/quan-shorts'
            },
            {
                title: 'Quần Jeans',
                href: '/san-pham/quan-nam/quan-jeans'
            },
            {
                title: 'Quần Dài',
                href: '/san-pham/quan-nam/quan-dai'
            },
        ],
    },
    {
        title: 'Quần lót nam',
        icon: <FaAngleDown />,
        href: '/san-pham/quan-lot-nam',
        list: [
            {
                title: 'Quần Brief (Tam giác)',
                href: '/san-pham/quan-lot-nam/quan-brief',
            },
            {
                title: 'Quần Trunk (Boxer)',
                href: '/san-pham/quan-lot-nam/quan-trunk',
            },
            {
                title: 'Quần Brief Boxer (Boxer Dài)',
                href: '/san-pham/quan-lot-nam/quan-brief-boxer',
            },
        ],
    },
    {
        title: 'Sale',
        href: '/sale',
    },
    {
        title: 'Liên hệ',
        href: '/lien-he',
    },
    {
        title: 'Giới thiệu',
        href: '/gioi-thieu',
    },
]