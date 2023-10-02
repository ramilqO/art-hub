'use client'

import PageLayout from '@/components/globals/PageLayout/PageLayout'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import Post from '@/components/globals/Post/Post'
import axios from 'axios'

const Page: NextPage = () => {
    // const [articles, setArticles] = useState([])
    // const getPosts = async (url: string) => {
    //     const articles = await (await axios(url)).data
    //     setArticles(articles)
    // }

    // useEffect(() => {
    //     getPosts('/api/feed')
    // }, [])

    return (
        <PageLayout showSideComments showSidebar>
            {/* {articles.map((post: any) => (
                <Post
                    key={post.title}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    createdAt={post.createdAt}
                />
            ))} */}
            <h1>Hello</h1>
        </PageLayout>
    )
}

export default Page
