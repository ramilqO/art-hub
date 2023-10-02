import { FC } from 'react'
import styles from './SideComment.module.scss'
import Image from 'next/image'

const SideComment: FC = () => {
    return (
        <div className={styles.sideComment}>
            <div className={styles.sideComment__wrapper}>
                <div className={styles.sideComment__author}>
                    <Image
                        src="/favicon.ico"
                        width={20}
                        height={20}
                        alt="picture"
                    />
                    <p className={styles.sideComment__author_name}>
                        Андрей Петров
                    </p>
                </div>
                <div className={styles.sideComment__text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloremque tempore culpa dolor voluptates sequi dolores
                    accusamus, vel dignissimos quis similique totam,
                    necessitatibus magni cupiditate, maiores natus ex minima
                    nemo suscipit?
                </div>
            </div>
        </div>
    )
}

export default SideComment
