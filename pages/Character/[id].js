import React from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import Layout from "../../components/Layout";
import CharacterCard from "../../components/CaracterCard";
const Character = props => {
  const { character } = props;
  const { id, image, name, gender, status } = character;
  return (
    <Layout>
      <CharacterCard
        id={id}
        image={image}
        name={name}
        gender={gender}
        status={status}
      />
    </Layout>
  );
};
Character.getInitialProps = async context => {
  const { id } = context.query;
  const res = await Axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return {
    character: res.data
  };
};
export default Character;
