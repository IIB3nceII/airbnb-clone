import React, { FC } from "react";
import Head from "next/head";
import { Header } from "@components/common";

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>AirBnB Clone App</title>
        <meta name="description" content="airbnb clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
