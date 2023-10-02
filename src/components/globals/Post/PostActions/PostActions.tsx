import { FC } from 'react'
import styles from './PostActions.module.scss'
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'

const PostActions: FC = () => {
    return (
        <div className={styles.postActions}>
            <div className={styles.postActions__wrapper}>
                <div className={styles.postActions__group}>
                    <div className={styles.postActions__item}>
                        <AiOutlineLike size={20} /> <AiTwotoneLike size={20} />
                    </div>
                    <div className={styles.postActions__item}>
                        <BsBookmarkStar size={20} />
                        <BsBookmarkStarFill size={20} />
                    </div>
                </div>

                <div className={styles.postActions__item}>
                    <FiMoreHorizontal size={20} />
                </div>
            </div>
        </div>
    )
}

export default PostActions
