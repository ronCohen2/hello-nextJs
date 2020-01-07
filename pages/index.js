import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import axios from "axios";
import Link from "next/link";

const Home = props => {
  const { results } = props.data;
  return (
    <Layout>
      <h1>hi</h1>
      {results.map(character => {
        const { id, image, name, gender, status } = character;
        return (
          <Link href={`/Character/[id]}`} as={`/Character/${id}`}>
            <div key={id}>
              <img src={image} />
              <div> name : {name}</div>
              <div>gender :{gender}</div>
              <div> status :{status}</div>
            </div>
          </Link>
        );
      })}
    </Layout>
  );
};
Home.getInitialProps = async () => {
  const res = await axios.get("https://rickandmortyapi.com/api/character/");
  return {
    data: res.data
  };
};
export default Home;
