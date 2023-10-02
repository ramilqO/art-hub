'use client'

import { FC } from 'react'
import styles from './SidebarMobile.module.scss'
import { data } from './data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SidebarMobile: FC = () => {
    const pathName = usePathname()

    return (
        <div className={styles.sidebarMobile}>
            <div className={styles.sidebarMobile__wrapper}>
                {data.map(({ icon, href }, index) => {
                    return (
                        <Link
                            key={index}
                            href={href}
                            className={
                                pathName === href
                                    ? styles.sidebarMobile__item_active
                                    : styles.sidebarMobile__item
                            }
                        >
                            {icon}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default SidebarMobile
