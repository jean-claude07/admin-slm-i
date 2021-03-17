import React, { Component } from 'react';
import Login from './pages/admin_login/Login'
import {Formik, Form, Field} from 'formik'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index_admin from './pages/index/Index_admin';

export class App extends Component {
  state={
    user: {}
  }

  componentDidMount = () => {
    axios.get(`admins/${sessionStorage.id}`).then(
      resp => {
        this.setState({
          user: resp.data
        })
      }
    )
  }

  render() {
    console.log(this.state.user.prenom)
    let app;
    if(sessionStorage.id){
      app = (
        <>
          <Index_admin user={this.state.user} />
        </>
      )
    }else{
      app = (
      <>
        <Login/>
      </>)
    }
    return (
     <>
      {app}
     </>
    )
  }
}

export default App;
