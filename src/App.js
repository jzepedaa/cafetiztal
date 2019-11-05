import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Juices } from './pages/Juices'
import { Lunch } from './pages/Lunch'
// import { Contact } from './pages/Contact';
import { NoMatch } from './pages/NoMatch';
import { MainLogo } from './components/MainLogo'
import { Layout } from './components/Layout';
import { Footer } from "./components/Footer"
// import { NavigationBar } from './components/NavigationBar';
// import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <MainLogo />
          {/* <NavigationBar /> */}
          {/* <Jumbotron /> */}
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/menu" component={Menu} />
              <Route path="/lunch" component={Lunch} />
              <Route path="/juices" component={Juices} />
              {/* <Route path="/contact" component={Contact} /> */}
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
