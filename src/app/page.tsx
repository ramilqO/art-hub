'use client'

import PageLayout from '@/components/globals/PageLayout/PageLayout'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
    const router = useRouter()
    const pathName = usePathname()

    useEffect(() => {
        if (pathName === '/') {
            router.push('/feed')
        }
    }, [])

    return (
        <PageLayout showSidebar showSideComments>
            <h1>Main</h1>
        </PageLayout>
    )
}
