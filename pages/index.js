import Head from 'next/head';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroImage />
    </div>
  );
}
