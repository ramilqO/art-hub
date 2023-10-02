import PageLayout from '@/components/globals/PageLayout/PageLayout'
import Post from '@/components/globals/Post/Post'
import { NextPage } from 'next'

const Page: NextPage = () => {
    return (
        <PageLayout showSideComments showSidebar>
            <Post />
            <Post />
            <Post />
            <Post />
        </PageLayout>
    )
}

export default Page
