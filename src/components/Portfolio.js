import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ContactMail from "@material-ui/icons/ContactMail";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Proyecto Final (grupal) Henry eCommerce",
    description: `Ciclo de vida de un eCommerce CompuStore`,
    image: project5,
    url: "http://ec2-18-119-113-192.us-east-2.compute.amazonaws.com:3003/",
  },
  {
    name: "Proyecto individual Henry Pokemons",
    description: `Administra items pokemons de una api externa`,
    image: project5,
    url: "http://ec2-18-119-113-192.us-east-2.compute.amazonaws.com:3002/",
  },
  {
    name: "Gestor eCommerce",
    description: `Administra y conecta Woocommerce OpenCart con Ingram Micro`,
    image: project3,
    url: "http://shopintegrate.online",
    images: [
      'https://shopintegrate.online/public/1.JPG',
      'https://shopintegrate.online/public/2.JPG',
      'https://shopintegrate.online/public/3.JPG',
      'https://shopintegrate.online/public/4.JPG',
      'https://shopintegrate.online/public/5.JPG',
      'https://shopintegrate.online/public/6.JPG',
      'https://shopintegrate.online/public/7.JPG'
    ]
  },
  /*{
    name: "Project 4",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project4,
  },
  {
    name: "Project 5",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project5,
  },
  {
    name: "Project 6",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project6,
  },*/
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
                {project?.images?.map((image) => (
                  <Button size="small" color="primary">                    
                    <a target="_blank" href={image}><ContactMail /></a>
                  </Button>
                ))}
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a target="_blank" href={project?.url}>
                    Live
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
