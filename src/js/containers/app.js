import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
// import { Contact } from '../containers/Contact';
import NoMatch from './NoMatch';
import Layout from '../components/Layout';
import NavigationBar from '../components/Navigation';
import Jumbotron from '../components/Jumbotron';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('test');
  }

  render() {
    return (
      <>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              {/* <Route path="/contact" component={Contact} /> */}
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </>
    );
  }
}

export default App;

// import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import { Nav, Navbar, Container } from 'react-bootstrap';
// import Loader from '../components/Loader';
// import Form from '../components/Form';

// class App extends React.Component {
//   // static propTypes = {
//   //   age: PropTypes.number.isRequired,
//   // };

//   constructor(props) {
//     super(props);
//     this.state = {
//       drinks: [],
//     };
//   }

//   componentDidMount() {
//     axios
//       .get(
//         'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' // i need to add the value of form here
//       )
//       .then(response => {
//         console.log(response.data.drinks);
//         this.setState({ drinks: response.data.drinks });
//       });
//   }

//   // render() {
//   //   const { drinks } = this.state;
//   //   const mapDrinks = () =>
//   //     drinks.map(el => (
//   //       <div>
//   //         <h1>{el.idDrink}</h1>
//   //         <img className="img" src={el.strDrinkThumb} alt="drink" />
//   //       </div>
//   //     ));
//   //   return (
//   //     <div>
//   //       <ul className="drink">{drinks.length ? mapDrinks() : <Loader />}</ul>
//   //       <Form />
//   //     </div>
//   //   );
//   // }
// }

// export default App;
