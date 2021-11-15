import Link from 'next/link'
import Head from 'next/head'
import Moment from 'moment';

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
                    {allTweetData['data'].map(({ id, text, created_at, public_metrics }) => (
                        <li className={utilStyles.listItem} id={id} key={id}>
                            <a href={`https://twitter.com/tedcruz/status/${id}`}>{text}</a>
                            {'\n'}
                            {Moment(created_at).format('M/d/YY H:mma')}
                            {/* Moment.locale('en');
                            var dt = '2016-05-02T00:00:00';
                            return(<View> {Moment(dt).format('d MMM')} </View>) //basically you can do all sorts of the formatting and others */}

                            {'\n'}
                            {public_metrics.like_count} likes
                            {'\n'}
                            {public_metrics.quote_count} qts
                            {'\n'}
                            {public_metrics.reply_count} comments
                            {'\n'}
                            {public_metrics.retweet_count} rts
                        </li>
                    ))}
                </ul>
            </section>

        </Layout>
    )
}