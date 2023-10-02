import { GetServerSideProps, NextPage } from 'next'
import PageLayout from '@/components/globals/PageLayout/PageLayout'

const Page: NextPage = ({ post }: any) => {
    return (
        <PageLayout>
            <h1>Next page</h1>
        </PageLayout>
    )
}

export default Page
