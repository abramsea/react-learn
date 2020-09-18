import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Message from './components/Message.js';
import BlogElem from './components/BlogElem.js';
import axios from 'axios';

const API = 'https://randomuser.me/api?results=3'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    axios.get(API)
      .then((res) => {
        this.setState( {userData: res.data.results });
      });
  }


  render() {
    const { userData } = this.state;
    return (
      <Router>
        <header className="header">
          <h1 className="header-logo">myBlog</h1>
          <nav className="navigation">
            <ul className="navigation-list">
              <li>
                <Link to="/" className="navigation-link">
                    Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="navigation-link">
                    Blog
                </Link>
              </li>
              <li>
                <Link to="/signin" className="navigation-link">
                    Register
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact>
            <div className="App">
              {userData.map((  { id, name, picture, location }) => {
                return (
                <Message 
                  name={`${name.first} ${name.last}`}
                  logo={picture.thumbnail}
                  title={location.country}
                  text={location.city}
                  key={id.value}
              />
                );
              })}
              
            </div>
          </Route>
          <Route path="/blog">
              This is blog!
              <div className="blog">
                  <BlogElem></BlogElem>
                  <BlogElem></BlogElem>
                  <BlogElem></BlogElem>
                  <BlogElem></BlogElem>
                  <BlogElem></BlogElem>
                  <BlogElem></BlogElem>
                  <BlogElem></BlogElem>
                  <BlogElem></BlogElem>
                  <BlogElem></BlogElem>
              </div>
          </Route>
          <Route path="/signin">
              I'm register.
          </Route>
        </Switch>
      </Router>
  
    );
    }
  }

  

export default App;
