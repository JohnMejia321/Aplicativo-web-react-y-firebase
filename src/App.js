import React, { Component } from "react"
import Grid from "@material-ui/core/Grid";
import "./App.css"
import ListaInmuebes from "./componentes/vistas/ListaInmuebes"
import AppNavbar from "./componentes/layout/AppNavbar"
import { BrowserRouter as Router, Switch,Route,Redirect } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme/theme";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario"
import Login from "./componentes/seguridad/Login"



class App extends  Component {
   
  render(){
    return (
       
      <Router>
        <div>
      <MuiThemeProvider theme={theme}>
        <AppNavbar />
        <Grid container>
          <Switch>
         <Route exact path='/' render={() => <ListaInmuebes name="home" />} />> 
         <Route exact path='/auth/registrarUsuario' render={() => <RegistrarUsuario name="registrarUsuario" />} />>
         <Route exact path='/auth/login' render={() => <Login name="login" />} />>  
        </Switch>
        </Grid>
          </MuiThemeProvider>
          </div>
        </Router>
         
      

        
        
        
      
    )
  }

}

export default App;

