import React from 'react';

import RecipeContainer from 'components/RecipeContainer/RecipeContainer';
import RecipesList from 'components/RecipesList/RecipesList';
import AddEditRecipe from 'components/AddEditRecipe/AddEditRecipe';
import RecipeDetail from 'components/RecipeDetail/RecipeDetail';
import NotFound from 'components/NotFound/NotFound';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

const App = () => (
	<Router>
		<RecipeContainer>
      		<Switch>
        		<Route exact path="/" render={props => <RecipesList {...props} title="Recipes List"/>} />
        		<Route path="/recipe/:id" render={props => <RecipeDetail {...props} title="Recipe Info"/>} />
        		<Route path="/add" render={props => <AddEditRecipe {...props} title="Add Recipe"/>} />
        		<Route path="/edit/:id" render={props => <AddEditRecipe {...props} title="Edit Recipe"/>} />
        		<Route component={NotFound} />
      		</Switch>
    	</RecipeContainer>
  	</Router>
);

export default App;
