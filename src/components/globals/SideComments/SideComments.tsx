import { FC } from 'react'
import styles from './SideComments.module.scss'
import SideComment from './SideComment/SideComment'

const SideComments: FC = () => {
    return (
        <div className={styles.sideComments}>
            <div className={styles.sideComments__wrapper}>
                <h3>Комментарии</h3>
                <SideComment />
                <SideComment />
                <SideComment />
                <SideComment />
                <SideComment />
                <SideComment />
                <SideComment />
            </div>
        </div>
    )
}

export default SideComments
