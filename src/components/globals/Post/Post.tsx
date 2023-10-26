import { FC } from "react";
import styles from "./Post.module.scss";
import PostActions from "./PostActions/PostActions";
import Link from "next/link";

const Post: FC<TPost> = ({ id, title, content, authorId, category }) => {
  return (
    <Link href={`${category}/${String(id)}`} className={styles.post}>
      <div className={styles.post__wrapper}>
        <div className={styles.post__info}>
          <div>{authorId}</div>
          <div>1 час назад</div>
        </div>
        <p className={styles.post__title}>{title}</p>
        <p className={styles.post__text}>{content}</p>
      </div>
      <PostActions />
    </Link>
  );
};

export default Post;
