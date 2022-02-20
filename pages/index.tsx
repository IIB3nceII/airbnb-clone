import React, { FC } from "react";
import Head from "next/head";
import { Header } from "@components/common";
import { Hero } from "@components/ui";
import { GetStaticProps } from "next";

interface IHomeProps {
  exploreData: [
    {
      img: string;
      location: string;
      destination: string;
    }
  ];
}

export const getStaticProps: GetStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
};

const Home: FC<IHomeProps> = (props) => {
  const { exploreData } = props;

  return (
    <div>
      <Head>
        <title>AirBnB Clone App</title>
        <meta name="description" content="airbnb clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {exploreData &&
            exploreData.map((q, qKey) => <h1 key={qKey}>{q.location}</h1>)}
        </section>
      </main>
    </div>
  );
};

export default Home;
