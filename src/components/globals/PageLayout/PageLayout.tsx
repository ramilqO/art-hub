import React, { FC, ReactNode } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './PageLayout.module.scss'
import SideComments from '../SideComments/SideComments'
import SidebarMobile from '../SidebarMobile/SidebarMobile'

interface IPageLayout {
    children: ReactNode
    showSidebar?: boolean
    showSideComments?: boolean
}

const PageLayout: FC<IPageLayout> = ({
    children,
    showSidebar,
    showSideComments,
}) => {
    return (
        <>
            <Header />
            <div className={styles.pageLayout__wrapper}>
                <div className={styles.pageLayout__staticBlock}>
                    {showSidebar ? <Sidebar /> : ''}
                </div>
                <div className={styles.pageLayout__sidebarMobile}>
                    <SidebarMobile />
                </div>
                <div className={styles.pageLayout__pageContent}>{children}</div>
                <div className={styles.pageLayout__staticBlock}>
                    {showSideComments ? <SideComments /> : ''}
                </div>
            </div>
        </>
    )
}

export default PageLayout
