import { FC } from 'react'
import styles from './FullPost.module.scss'
import Image from 'next/image'

interface IFullPost {
    id?: number
    title?: string
    description?: string
    text?: string
    createdAt?: string
    author?: string
    likesCount?: number
}

const Fullpost: FC<IFullPost> = ({
    id,
    title,
    description,
    text,
    createdAt,
    author,
    likesCount,
}) => {
    return (
        <div className={styles.fullpost}>
            <div className={styles.fullpost__wrapper}>
                <div className={styles.fullpost__author}>
                    <Image
                        src="/favicon.ico"
                        width={20}
                        height={20}
                        alt="picture"
                    />
                    Андрей Петров
                    <span>1 час</span>
                </div>
                <div className={styles.fullpost__title}>
                    Как мы строили успешный финтех бизнес до возникновения
                    интернет технологий
                </div>
                <div className={styles.fullpost__text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste quo cum officiis porro voluptates, numquam, excepturi
                    saepe unde hic inventore iure. Laboriosam ex recusandae
                    dolor delectus vero. Sed, ipsum dicta!Lorem Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Architecto
                    magni quaerat fuga molestias officia id quod culpa. Unde
                    ratione, voluptatum nisi maiores, itaque laboriosam fuga
                    sequi possimus obcaecati officiis optio. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Soluta consectetur
                    doloribus voluptas similique voluptatibus, possimus, natus
                    iure officiis quibusdam ipsam totam alias quidem officia
                    sit, mollitia aut animi modi ipsum? Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Iste quo cum officiis
                    porro voluptates, numquam, excepturi saepe unde hic
                    inventore iure. Laboriosam ex recusandae dolor delectus
                    vero. Sed, ipsum dicta!Lorem Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Architecto magni quaerat fuga
                    molestias officia id quod culpa. Unde ratione, voluptatum
                    nisi maiores, itaque laboriosam fuga sequi possimus
                    obcaecati officiis optio. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Soluta consectetur doloribus
                    voluptas similique voluptatibus, possimus, natus iure
                    officiis quibusdam ipsam totam alias quidem officia sit,
                    mollitia aut animi modi ipsum? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Iste quo cum officiis porro
                    voluptates, numquam, excepturi saepe unde hic inventore
                    iure. Laboriosam ex recusandae dolor delectus vero. Sed,
                    ipsum dicta!Lorem Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Architecto magni quaerat fuga molestias
                    officia id quod culpa. Unde ratione, voluptatum nisi
                    maiores, itaque laboriosam fuga sequi possimus obcaecati
                    officiis optio. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Soluta consectetur doloribus voluptas
                    similique voluptatibus, possimus, natus iure officiis
                    quibusdam ipsam totam alias quidem officia sit, mollitia aut
                    animi modi ipsum? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Iste quo cum officiis porro voluptates,
                    numquam, excepturi saepe unde hic inventore iure. Laboriosam
                    ex recusandae dolor delectus vero. Sed, ipsum dicta!Lorem
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto magni quaerat fuga molestias officia id quod
                    culpa. Unde ratione, voluptatum nisi maiores, itaque
                    laboriosam fuga sequi possimus obcaecati officiis optio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta consectetur doloribus voluptas similique
                    voluptatibus, possimus, natus iure officiis quibusdam ipsam
                    totam alias quidem officia sit, mollitia aut animi modi
                    ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iste quo cum officiis porro voluptates, numquam,
                    excepturi saepe unde hic inventore iure. Laboriosam ex
                    recusandae dolor delectus vero. Sed, ipsum dicta!Lorem Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto magni quaerat fuga molestias officia id quod
                    culpa. Unde ratione, voluptatum nisi maiores, itaque
                    laboriosam fuga sequi possimus obcaecati officiis optio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta consectetur doloribus voluptas similique
                    voluptatibus, possimus, natus iure officiis quibusdam ipsam
                    totam alias quidem officia sit, mollitia aut animi modi
                    ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iste quo cum officiis porro voluptates, numquam,
                    excepturi saepe unde hic inventore iure. Laboriosam ex
                    recusandae dolor delectus vero. Sed, ipsum dicta!Lorem Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto magni quaerat fuga molestias officia id quod
                    culpa. Unde ratione, voluptatum nisi maiores, itaque
                    laboriosam fuga sequi possimus obcaecati officiis optio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta consectetur doloribus voluptas similique
                    voluptatibus, possimus, natus iure officiis quibusdam ipsam
                    totam alias quidem officia sit, mollitia aut animi modi
                    ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iste quo cum officiis porro voluptates, numquam,
                    excepturi saepe unde hic inventore iure. Laboriosam ex
                    recusandae dolor delectus vero. Sed, ipsum dicta!Lorem Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto magni quaerat fuga molestias officia id quod
                    culpa. Unde ratione, voluptatum nisi maiores, itaque
                    laboriosam fuga sequi possimus obcaecati officiis optio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta consectetur doloribus voluptas similique
                    voluptatibus, possimus, natus iure officiis quibusdam ipsam
                    totam alias quidem officia sit, mollitia aut animi modi
                    ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iste quo cum officiis porro voluptates, numquam,
                    excepturi saepe unde hic inventore iure. Laboriosam ex
                    recusandae dolor delectus vero. Sed, ipsum dicta!Lorem Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto magni quaerat fuga molestias officia id quod
                    culpa. Unde ratione, voluptatum nisi maiores, itaque
                    laboriosam fuga sequi possimus obcaecati officiis optio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta consectetur doloribus voluptas similique
                    voluptatibus, possimus, natus iure officiis quibusdam ipsam
                    totam alias quidem officia sit, mollitia aut animi modi
                    ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iste quo cum officiis porro voluptates, numquam,
                    excepturi saepe unde hic inventore iure. Laboriosam ex
                    recusandae dolor delectus vero. Sed, ipsum dicta!Lorem Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
            </div>
        </div>
    )
}

export default Fullpost
