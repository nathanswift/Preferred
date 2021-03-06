import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import FullTimeUtah from './components/FullTimeUtah';
import About from './components/About';
import Community from './components/Community';
import Application from './components/Application';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import Reviews from './components/Reviews';
import PartTimeUtah from './components/PartTimeUtah'
import PartTimeLV from './components/PartTimeLV'


const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/fulltimeutah" component={FullTimeUtah} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Community" component={Community} />
          <Route exact path="/Application" component={Application} />
          <Route exact path="/Reviews" component={Reviews} />
          <Route exact path="/PartTimeUtah" component={PartTimeUtah} />
          <Route exact path="/PartTimeLV" component={PartTimeLV} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
      <Footer />
  </Fragment>
)

export default App;

