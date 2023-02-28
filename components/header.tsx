import React from "react";
import {AppBar,Toolbar,CssBaseline,Typography, makeStyles,} from "@material-ui/core";



const useStyles:any = makeStyles((theme:any):any => ({
  navlinks: {
marginLeft: theme.spacing(10),
display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Ejercicio de Verificacion con Mail
        </Typography>
          <div className={classes.navlinks}>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;