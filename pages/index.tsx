import React, { FC } from "react";
import Head from "next/head";
import { Footer, Header } from "@components/common";
import { Hero, LargeCard, MediumCard, SmallCard } from "@components/ui";
import { GetStaticProps } from "next";

interface IHomeProps {
  exploreData: [
    {
      img: string;
      location: string;
      distance: string;
    }
  ];
  cardData: [
    {
      img: string;
      title: string;
    }
  ];
}

export const getStaticProps: GetStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
};

const Home: FC<IHomeProps> = (props) => {
  const { exploreData, cardData } = props;

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData &&
              exploreData.map((q, qKey) => (
                <SmallCard
                  key={qKey}
                  img={q.img}
                  location={q.location}
                  distance={q.distance}
                />
              ))}
          </div>
        </section>

        <section className="">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData &&
              cardData.map((q, qKey) => (
                <MediumCard key={qKey} img={q.img} title={q.title} />
              ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
