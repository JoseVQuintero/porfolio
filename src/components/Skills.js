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
import project5 from "../images/pokemon.png";
import project6 from "../images/react.png";

import aws from "../images/img/technologies/aws.png";
import node from "../images/img/technologies/node.png";
import postgresql from "../images/img/technologies/postgresql.png";
import sequelize from "../images/img/technologies/sequelize.png";
import redux from "../images/img/technologies/redux.png";
import prisma from "../images/img/technologies/prisma.png";
import react from "../images/img/technologies/react.png";
import materialui from "../images/img/technologies/material-ui.png";
import styledcomponents from "../images/img/technologies/styled-components.png";
import typescript from "../images/img/technologies/typescript.png";
import android from "../images/img/technologies/android.png";
import mysql from "../images/img/technologies/mysql.png";
import git from "../images/img/technologies/git.png";
import github from "../images/img/technologies/github.png";
import php from "../images/img/technologies/php.png";
import compustore from "../images/compustore.png";
import shopintegrate from "../images/shopintegrate.png";

import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

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
    name: "Node",
    image: node,
  },
  {
    name: "Postgres",
    image: postgresql,
  },
  {
    name: "Aws",
    image: aws,
  },
  {
    name: "Prisma",
    image: prisma,
  },
  {
    name: "Sequelize",
    image: sequelize,
  },
  {
    name: "Material UI",
    image: materialui,
  },
  {
    name: "MUI",
    image: materialui,
  },
  {
    name: "Type Script",
    image: typescript,
  },
  {
    name: "Style Component",
    image: styledcomponents,
  },
  {
    name: "React",
    image: react,
  },


  {
    name: "Android",
    image: android,
  },
  {
    name: "Mysql",
    image: mysql,
  },
  {
    name: "PHP",
    image: php,
  },
  {
    name: "Git",
    image: git,
  },
  {
    name: "Git Hub",
    image: github,
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
        {projects.map((project, i) => (
          <Grid item xs={12} sm={2}  key={i}>
            <IconButton>
              <Avatar src={project.image} className={classes.small} />
            </IconButton>
            <Typography variant="h5" gutterBottom>
              {project.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
