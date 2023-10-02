// 'use client'

// import Fullpost from '@/components/globals/FullPost/FullPost'
// import PageLayout from '@/components/globals/PageLayout/PageLayout'
// import { GetServerSideProps } from 'next'
// import { usePathname } from 'next/navigation'

// // interface IFullPost {
// //     author: {
// //         avatar: string;
// //         name: string;
// //     }
// //     createdAt: string;
// //     title: string;
// //     text: string
// // }

// const FavoriteArticle = ({ fullpost }: any) => {
//     const pathName = usePathname().split('/').pop()
//     console.log(fullpost)

//     return (
//         <PageLayout showSidebar showSideComments>
//             <Fullpost />
//         </PageLayout>
//     )
// }

// export default FavoriteArticle

// export const getServerSideProps = async (id: any) => {
//     const res = await fetch(`api/favorites/${id}`)
//     const fullpost = await res.json()

//     return { props: { fullpost } }
// }
