import { AiOutlineFieldTime, AiOutlineFire } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { CiViewTimeline } from "react-icons/ci";

export const data = [
  {
    id: 1,
    title: "Моя лента",
    icon: <CiViewTimeline size={20} />,
    href: "/feed",
  },
  {
    id: 2,
    title: "Популярное",
    icon: <AiOutlineFire size={20} />,
    href: "/popular",
  },
  {
    id: 3,
    title: "Свежее",
    icon: <AiOutlineFieldTime size={20} />,
    href: "/new",
  },
  {
    id: 4,
    title: "Закладки",
    icon: <BsBookmarkPlus />,
    href: "/favorites",
  },
];
