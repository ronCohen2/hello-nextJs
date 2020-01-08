import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CharacterCard from "../../components/CaracterCard";
import Layout from "../../components/Layout";

const Search = props => {
  const Router = useRouter();
  const name = Router.query.name;
  const [data, setData] = useState(null);

  const fetchCharacterData = async name => {
    try {
      if (name !== undefined) {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${name}`
        );
        const CharacterData = await res.data.results;
        setData(CharacterData);
      }
    } catch (error) {
      console.log("no character");
    }
  };
  useEffect(() => {
    fetchCharacterData(Router.query.name);
  }, [name]);
  return (
    <Layout>
      <div>
        {data ? (
          data.map(character => {
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
          })
        ) : (
          <p>no charcter</p>
        )}
      </div>
    </Layout>
  );
};
export default Search;

// Search.getInitialProps = async context => {
//   const { name } = context.query;
//   console.log(name);
//   const res = await axios.get(
//     `https://rickandmortyapi.com/api/character/?name=${name}`
//   );
//   console.log(res.data);
//   // return {
//   //   CharacterData: res.data
//   // };
// };
