import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import axios from "axios";

const Home = props => {
  const { results } = props.data;
  return (
    <Layout>
      <h1>hi</h1>
      {results.map(character => {
        return (
          <div>
            <img src={character.image} />
            <div> name : {character.name}</div>
            <div>gender :{character.gender}</div>
            <div> status :{character.status}</div>
          </div>
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
