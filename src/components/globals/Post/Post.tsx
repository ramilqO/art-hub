import { FC } from 'react'
import styles from './Post.module.scss'
import PostActions from './PostActions/PostActions'
import Link from 'next/link'

interface IPost {
    id?: number
    title?: string
    content?: string
    createdAt?: string
    author?: string
    likesCount?: number
    href?: string
}

const Post: FC<IPost> = ({
    id,
    title,
    content,
    createdAt,
    author,
    likesCount,
    href,
}) => {
    return (
        <Link href={String(id)} className={styles.post}>
            <div className={styles.post__wrapper}>
                <div className={styles.post__info}>
                    <div>{author}</div>
                    <div>{createdAt}</div>
                </div>
                <p className={styles.post__title}>{title}</p>
                <p className={styles.post__text}>{content}</p>
            </div>
            <PostActions />
        </Link>
    )
}

export default Post
