import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../src/components/Header/Header';
import SignIn from '../src/screens/SignIn/SignIn';
import BooksList from '../src/screens/BooksList/BooksList';
import AuthorList from '../src/screens/AuthorList/AuthorList';
import './App.css';
/* import { UserProvider } from './components/Context/UserContext'; */

const App = () => {
  return (

    <Router>
      < div className="App" >
        {/* <UserProvider> */}
          <Header />
          <Switch>
            <Route exact path="/"><SignIn /></Route>
            <Route exact path="/books-list" component={BooksList} />
            <Route exact path="/authors-list" component={AuthorList} />
          </Switch>
        {/* </UserProvider> */}
      </div>
    </Router>

  );
}

export default App;
