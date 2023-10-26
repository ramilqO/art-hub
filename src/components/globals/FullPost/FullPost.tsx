import { FC } from "react";
import styles from "./FullPost.module.scss";
import Image from "next/image";

const Fullpost: FC<TPost> = ({ id, title, content, authorId }) => {
  return (
    <div className={styles.fullpost}>
      <div className={styles.fullpost__wrapper}>
        <div className={styles.fullpost__author}>
          <Image src="/favicon.ico" width={20} height={20} alt="picture" />
          Андрей Петров
          <span>1 час</span>
        </div>
        <div className={styles.fullpost__title}>{title}</div>
        <div className={styles.fullpost__text}>{content}</div>
      </div>
    </div>
  );
};

export default Fullpost;
