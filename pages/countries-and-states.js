import Head from 'next/head'
import Image from 'next/image'
import CountryAndStateComponent from '../Components/CountryAndStateComponent'
import ResourceMeasure from '../Components/Commons/ResourceMeasure'

import styles from '../styles/Home.module.css'

function CountryAndState() {
    const resourceSize = ResourceMeasure();

    return (
        <div className={styles.container}>
            <Head>
                <title>Tree Shaking Demo | Country-State-City(npm)</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <div className="CountryComponent">
                    <code>import &#123; Country, State &#125; from &lsquo;country-state-city&rsquo;;</code>
                    <p>(Resource size measurement via browser&apos;s Performance API)</p>
                    <ul style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        listStyle: 'none'
                    }}>
                        {
                            resourceSize.map(({ fileName, fileSize }, index) => {
                                return <li key={index}>
                                    {index + 1}. File Size: <span style={{ textDecoration: "underline" }}>{fileName}</span> - {fileSize}
                                </li>
                            })
                        }
                    </ul>
                    <CountryAndStateComponent></CountryAndStateComponent>
                </div>

            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
}

export default CountryAndState;