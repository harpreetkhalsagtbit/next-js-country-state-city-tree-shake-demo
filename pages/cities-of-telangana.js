import Head from 'next/head'
import Image from 'next/image'
import CityComponent from '../Components/CityComponent'
import ResourceMeasure from '../Components/Commons/ResourceMeasure'

import styles from '../styles/Home.module.css'

function City() {
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
				<div className="CityComponent">
					<code>import &#123; City &#125; from &lsquo;country-state-city&rsquo;;</code>
                    <div className='flex-wrapper'>
                        <p>(Resource size measurement via browser&apos;s Performance API)</p>
                        <p>(may need to Refresh once)</p>
                    </div>
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
                    <div className='flex-wrapper'>
						<p>All Cities of a State - Telangana(India)</p>
						<CityComponent countryCode='IN' cityCode='TG'></CityComponent>
					</div>
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

export default City;