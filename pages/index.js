import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import axios from "axios";
import Link from "next/link";
import CharacterCard from "../components/CaracterCard";

const Home = props => {
  const { results } = props.data;
  return (
    <Layout>
      <h1>hi</h1>
      {results.map(character => {
        const { id, image, name, gender, status } = character;
        return (
          <CharacterCard
            id={id}
            image={image}
            name={name}
            gender={gender}
            status={status}
          />
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
