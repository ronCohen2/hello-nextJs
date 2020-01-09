import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import axios from "axios";
import Link from "next/link";
import CharacterCard from "../components/CaracterCard";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const Home = props => {
  const { results } = props.data;
  const [ShowAllCards, SetAllCards] = useState(true);
  const [CharacterDetails, SetDetails] = useState(null);

  return (
    <Layout>
      <Container fixed m={4}>
        {ShowAllCards ? (
          <Grid container spacing={3}>
            {results.map(character => {
              const { id, image, name, gender, status } = character;
              return (
                <CharacterCard
                  id={id}
                  image={image}
                  name={name}
                  gender={gender}
                  status={status}
                  toggle={SetAllCards}
                  showAll={ShowAllCards}
                  SetDetails={SetDetails}
                  size={4}
                />
              );
            })}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <CharacterCard
              id={CharacterDetails.id}
              image={CharacterDetails.image}
              name={CharacterDetails.name}
              gender={CharacterDetails.gender}
              status={CharacterDetails.status}
              toggle={SetAllCards}
              size={12}
            />
          </Grid>
        )}
      </Container>
    </Layout>
  );
};
Home.getInitialProps = async context => {
  const { data } = context.query;
  return {
    data: data
  };
};
export default Home;
