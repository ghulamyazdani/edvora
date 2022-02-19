import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Rides from "../components/Rides";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Rides />
    </div>
  );
};

export default Home;
