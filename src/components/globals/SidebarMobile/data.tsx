import { AiOutlineFieldTime, AiOutlineFire } from 'react-icons/ai'
import { BsBookmarkPlus } from 'react-icons/bs'
import { CiViewTimeline } from 'react-icons/ci'

export const data = [
    {
        id: 1,
        title: 'Популярное',
        icon: <AiOutlineFire size={30} />,
        href: '/popular',
    },
    {
        id: 2,
        title: 'Свежее',
        icon: <AiOutlineFieldTime size={30} />,
        href: '/new',
    },
    {
        id: 3,
        title: 'Моя лента',
        icon: <CiViewTimeline size={30} />,
        href: '/feed',
    },
    {
        id: 4,
        title: 'Закладки',
        icon: <BsBookmarkPlus size={30} />,
        href: '/favorites',
    },
]
