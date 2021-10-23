import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'


import { getTweetData } from '../../lib/tweets'

export async function getStaticProps() {
    const allTweetData = await getTweetData()
    console.log(allTweetData)
    return {
      props: {
        allTweetData
      }
    }
}

export default function CruzTweets({ allTweetData }) {
    return (
        <Layout>
            <Head>
                <title>Ted's Tweets</title>
            </Head>

            <h2>Ted's Tweets</h2>

            <section>
                <ul className={utilStyles.list}>
                    {allTweetData['data'].map(({ id, text }) => (
                        <li className={utilStyles.listItem} id={id} key={id}>
                            <a href={`https://twitter.com/tedcruz/status/${id}`}>{text}</a>
                        </li>
                    ))}
                </ul>
            </section>

        </Layout>
    )
}