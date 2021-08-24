import Head from 'next/head';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import SmallCard from '../components/SmallCard';

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
        {/* Small Cards */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
          {/* Server side rendering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ location, distance, img }) => (
              <SmallCard
                key={img}
                location={location}
                image={img}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        </section>
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
