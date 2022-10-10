import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DoneRecipes from './pages/DoneRecipes';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/github-page/" component={ Login } />
      <Route exact path="/github-page/meals" component={ Meals } />
      <Route exact path="/github-page/drinks" component={ Drinks } />
      <Route exact path="/github-page/profile" component={ Profile } />
      <Route exact path="/github-page/meals/:id" component={ RecipeDetails } />
      <Route exact path="/github-page/drinks/:id" component={ RecipeDetails } />
      <Route exact path="/github-page/meals/:id/in-progress" component={ RecipeInProgress } />
      <Route exact path="/github-page/drinks/:id/in-progress" component={ RecipeInProgress } />
      <Route exact path="/github-page/done-recipes" component={ DoneRecipes } />
      <Route exact path="/github-page/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
