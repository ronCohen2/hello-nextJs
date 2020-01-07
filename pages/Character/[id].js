import React from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import Layout from "../../components/Layout";
const Character = props => {
  const router = useRouter();
  const { character } = props;
  const { id, image, name, gender, status } = character;

  return (
    <Layout>
      <div key={id}>
        <img src={image} />
        <div> name : {name}</div>
        <div>gender :{gender}</div>
        <div> status :{status}</div>
      </div>
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
