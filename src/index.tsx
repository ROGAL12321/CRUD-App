import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import mainTheme from 'themes/mainTheme';

import RecipesPage from 'pages/RecipesPage/RecipesPage';
import RecipeDetailPage from 'pages/RecipeDetailPage/RecipeDetailPage';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import EditRecipePage from 'pages/EditRecipePage/EditRecipePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import RecipesHeader from 'components/RecipesHeader/RecipesHeader';

import Global from 'styledComponents/Global';
import Container from 'styledComponents/Container';
import RecipeContainer from 'styledComponents/RecipeContainer';

const App: React.FC = () => (
	<Router>
		<ThemeProvider theme={mainTheme}>
			<React.Fragment>
				<RecipesHeader />
				<Container>
					<RecipeContainer>
						<Switch>
							<Route exact path="/" render={props => <RecipesPage {...props} title="Recipes List"/>} />
							<Route path="/recipe/:id" render={props => <RecipeDetailPage {...props} title="Recipe Info"/>} />
							<Route path="/add" render={props => <AddRecipePage {...props} title="Add Recipe"/>} />
							<Route path="/edit/:id" render={props => <EditRecipePage {...props} title="Edit Recipe"/>} />
							<Route component={NotFoundPage} />
						</Switch>
					</RecipeContainer>
				</Container>
				<Global />
			</React.Fragment>
    </ThemeProvider>
	</Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

