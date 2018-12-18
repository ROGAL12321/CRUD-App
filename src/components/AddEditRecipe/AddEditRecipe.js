import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

import uuidv4 from 'uuid/v4';

import getDBInstance from 'helpers/storage';

import ArrowIcon from 'assets/arrow.svg';
import star from 'assets/star.svg';

import './AddRecipe.scss';

class AddEditRecipe extends Component {

    dbInstance = getDBInstance('recipes');
    recipeId = this.props.match.params.id;
    
    state = {
        title: '',
        description: '',
        recipe: null,
        fetching: true
    }

    componentDidMount() {
        if (this.recipeId) {
            this.getRecipe();
        }

    }

    getRecipe() {
        this.dbInstance.find(this.recipeId)
            .then(recipe => this.setState({
                recipe,
                fetching: false
            }));    
    }

    handleChange = (ev) => this.setState({
        [ev.target.name]: ev.target.value
    })

    editRecipe = (recipe)  =>
        this.dbInstance.edit(this.recipeId, recipe);

    addNewRecipe = (recipe) => this.dbInstance.add(recipe).then(el => console.log(el))

    handleSubmit = (ev) => {
        ev.preventDefault();

        const recipe = {
            id: uuidv4(),
            icon: star,
            title: this.state.title,
            description: this.state.description
        }

        const action = this.state.recipe 
            ? this.editRecipe(recipe) 
            : this.addNewRecipe(recipe)

        action.then(() => {
            this.props.history.push('/');
        });
    }

    render() {

        if(this.recipeId && this.state.fetching) {
            return <p>Loading...</p>
        }

        const { title } = this.props;

        return (
            <div>
                <h2 className="add-recipe__header">{title}
                <Link to="/">
                    <img className="recipe-detail__back-icon" src={ArrowIcon} alt="Back" />
                </Link>
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="add-recipe__input-row">
                        <label className="add-recipe__label">
                            Recipe name
                        </label>
                        <input 
                            type="text"
                            className="add-recipe__input" 
                            name="title"
                            defaultValue={this.state.recipe ? this.state.recipe.title : null}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="add-recipe__input-row">
                        <label className="add-recipe__label">
                            Recipe description
                        </label>
                        <textarea
                            className="add-recipe__input" 
                            name="description"
                            defaultValue={this.state.recipe ? this.state.recipe.description : null}
                            onChange={this.handleChange}
                        />
                    </div>                
                    <div className="add-recipe__button-container">
                        <button 
                            className="add-recipe__button" 
                            type="submit"
                        > 
                            Add 
                        </button> 
                    </div>
                </form>
            </div>
        )
    }
}

AddEditRecipe.propTypes = {
    title: PropTypes.string.isRequired
}

export default AddEditRecipe;