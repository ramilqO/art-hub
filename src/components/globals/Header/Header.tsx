'use client'

import { FC, useState } from 'react'
import styles from './Header.module.scss'
import { SlMagnifier } from 'react-icons/sl'
import { AiOutlinePlus, AiOutlineMessage } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__group}>
                    <div className={styles.header__logo}>art.Hub</div>
                </div>
                <div className={styles.header__group}>
                    <input
                        type="text"
                        placeholder="Поиск"
                        className={styles.header__searchForm}
                    />
                    <Link href="/write" className={styles.header__button}>
                        <AiOutlinePlus />
                        Создать
                    </Link>
                </div>
                <div className={styles.header__group}>
                    <AiOutlineMessage size={30} />
                    <IoMdNotificationsOutline size={30} />
                    <Image
                        src="/favicon.ico"
                        width={40}
                        height={40}
                        alt="picrute"
                    />
                </div>
                <div className={styles.header__group_mobile}>
                    <button className={styles.header__button_mobile}>
                        <SlMagnifier />
                    </button>
                    <button className={styles.header__button_mobile}>
                        <Link href="write">
                            <AiOutlinePlus />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
