import PageLayout from '@/components/globals/PageLayout/PageLayout'
import Post from '@/components/globals/Post/Post'
import { NextPage } from 'next'

const Popular: NextPage = () => {
    return (
        <PageLayout showSidebar showSideComments>
            <Post />
        </PageLayout>
    )
}

export default Popular
