import React from 'react';
import './App.css';
import {Box} from '@material-ui/core'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import ExCategory from './components/Post/ExCategory';
function App() {
  return (
    <>
   <BrowserRouter>
      <Header />
      <Box style={{marginTop: 64}}>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/explore" component={ExCategory}/>
      </Switch>
      </Box>
    </BrowserRouter>
    </>
  );
}

export default App;
