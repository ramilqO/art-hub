import PageLayout from '@/components/globals/PageLayout/PageLayout'
import Post from '@/components/globals/Post/Post'
import { NextPage } from 'next'

const New: NextPage = () => {
    return (
        <PageLayout showSidebar showSideComments>
            <Post />
        </PageLayout>
    )
}

export default New
