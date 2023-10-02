'use client'

import { FC } from 'react'
import styles from './Sidebar.module.scss'
import { data } from './data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar: FC = () => {
    const pathName = usePathname()

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__wrapper}>
                {data.map(({ icon, title, href }, index) => {
                    return (
                        <Link
                            key={index}
                            href={href}
                            className={
                                pathName === href
                                    ? styles.sidebar__item_active
                                    : styles.sidebar__item
                            }
                        >
                            {icon}
                            {title}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
