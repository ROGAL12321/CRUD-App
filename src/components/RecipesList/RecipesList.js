import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RecipesList.scss';

import RecipesItem from 'components/RecipesItem/RecipesItem';
import getDBInstance from 'helpers/storage';

class RecipesList extends Component {

    state = {
        recipes: [],
        fetching: true    
    }

    componentDidMount() {
        const dbInstance = getDBInstance('recipes');

        dbInstance.get()
            .then(recipes => this.setState({
                recipes,
                fetching: false
            }))
    }

    render() {

        const { title } = this.props;

        if(this.state.fetching) {
            return <p>Loading...</p>
        }

        return (
            <>
                <h2 className="recipes-list__header">{title}</h2>
                <ul>
                    {this.state.recipes.map(recipe => 
                        <RecipesItem key={recipe.id} {...recipe} />
                    )}
                </ul>
            </>
        );    
    }
    
}

RecipesList.propTypes = {
    title: PropTypes.string.isRequired
}

export default RecipesList;
