import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

import aws from "../images/img/technologies/aws.png"
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

import Footer from "../components/Footer";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";


const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
  small: {
    width: "90%",
    height: "90%",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <Apps />, listText: "CV", listPath: "/cv" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
  { listIcon: <ContactMail />, listText: "Habilidades", listPath: "/skills" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Jose Quintero" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <ArrowBack className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Portfolio
            </Typography>
            <BootstrapTooltip title="Aws">
            <IconButton alt="Aws" onClick={() => setOpen(true)}>
              <Avatar   src={aws} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Node">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={node} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Type Script">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={typescript} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Postgres">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={postgresql} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Prisma">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={prisma} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Sequelize">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={sequelize} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Sequelize">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={redux} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="React">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={react} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Style Component">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={styledcomponents} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Material UI">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={materialui} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Android">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={android} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Mysql">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={mysql} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Git">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={git} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="Git Hub">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={github} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="PHP">
            <IconButton onClick={() => setOpen(true)}>
              <Avatar src={php} className={classes.small} />
            </IconButton>
            </BootstrapTooltip>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
