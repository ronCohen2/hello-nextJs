import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Router from "next/router";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

const CharacterCard = ({
  id,
  image,
  name,
  gender,
  status,
  SetDetails,
  toggle,
  showAll,
  size,
  Search
}) => {
  const classes = useStyles();
  console.log(Search);
  const ShowCaracterDetails = () => {
    console.log("set");
    SetDetails({ id, image, name, gender, status });
    toggle(false);
  };
  return (
    <Grid item xs={12} sm={size}>
      <Card key={id}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Gender : {gender}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Status :{status}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {showAll ? (
            <Button
              size="small"
              color="primary"
              onClick={() => ShowCaracterDetails()}
            >
              Learn More
            </Button>
          ) : (
            <Button size="small" color="primary" onClick={() => toggle(true)}>
              Show All
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};
export default CharacterCard;
