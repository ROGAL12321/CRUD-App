import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AddEditRecipe from 'containers/AddEditRecipe/AddEditRecipe';
import RecipeDetail from 'containers/RecipeDetail/RecipeDetail';
import RecipesList from 'containers/RecipesList/RecipesList';

import RecipesHeader from 'components/RecipesHeader/RecipesHeader';
import NotFound from 'components/NotFound/NotFound';

import mainTheme from 'mainTheme';

import Global from 'blocks/Global';
import Container from 'blocks/Container';
import RecipeContainer from 'blocks/RecipeContainer'

const App = () => (
	<Router>
		<ThemeProvider theme={mainTheme}>
			<React.Fragment>
				<RecipesHeader />
				<Container>
					<RecipeContainer>
						<Switch>
							<Route exact path="/" render={props => <RecipesList {...props} title="Recipes List"/>} />
							<Route path="/recipe/:id" render={props => <RecipeDetail {...props} title="Recipe Info"/>} />
							<Route path="/add" render={props => <AddEditRecipe {...props} title="Add Recipe"/>} />
							<Route path="/edit/:id" render={props => <AddEditRecipe {...props} title="Edit Recipe"/>} />
							<Route component={NotFound} />
						</Switch>
					</RecipeContainer>
				</Container>
				<Global />
			</React.Fragment>
    </ThemeProvider>
	</Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

