import Head from 'next/head';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroImage />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
        </section>

        {/* Server side rendering */}
        {exploreData?.map((item) => (
          <h1>{item.location}</h1>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
    },
  };
}
