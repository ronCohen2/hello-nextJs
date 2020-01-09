import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CharacterCard from "../../components/CaracterCard";
import Layout from "../../components/Layout";
import { Grid, Container as ContainerG } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const Search = props => {
  const Router = useRouter();
  const { data } = props;
  console.log(data);
  // const name = Router.query.name;
  // const [data, setData] = useState(null);

  // const fetchCharacterData = async name => {
  //   try {
  //     if (name !== undefined) {
  //       const res = await axios.get(
  //         `https://rickandmortyapi.com/api/character/?name=${name}`
  //       );
  //       const CharacterData = await res.data.results;
  //       setData(CharacterData);
  //     }
  //   } catch (error) {
  //     console.log("no character");
  //   }
  // };
  // useEffect(() => {
  //   fetchCharacterData(props.data);
  // }, []);

  return (
    <Layout>
      <Container>
        <Grid ContainerG spacing={1}>
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
                  size={4}
                  Search={true}
                />
              );
            })
          ) : (
            <p>no charcter</p>
          )}
        </Grid>
      </Container>
    </Layout>
  );
};
export default Search;

Search.getInitialProps = async context => {
  const { data } = context.query;
  return {
    data: data
  };
};
