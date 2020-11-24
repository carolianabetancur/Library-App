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
import AppContextProvieder from './Context/AppContextProvider';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import CreateBooks from './components/CreateBooks/CreateBooks';

const App = () => {
  return (
    <AppContextProvieder>
      <Router>
        < div className="App" >
          {/* <UserProvider> */}
          <Header />
          <Switch>
            <Route exact path="/"><SignIn /></Route>
            <Route exact path="/books-list" component={BooksList} />
            <Route exact path="/edit-books" component={CreateBooks} />
            <Route exact path="/authors-list" component={AuthorList} />
            <Route exact path="/edit-authors" component={CreateAuthor} />
          </Switch>
          {/* </UserProvider> */}
        </div>
      </Router>
    </AppContextProvieder>

  );
}

export default App;
