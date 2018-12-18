import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

import getDBInstance from 'helpers/storage';

import ArrowIcon from 'assets/arrow.svg';

import './RecipeDetail.scss';

class RecipeDetail extends Component {
 
    state = {
        recipe: null,
        fetching: true
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const db = getDBInstance('recipes');
    
        db.find(id).then(recipe => this.setState({
            recipe,
            fetching: false
        })); 
    }

    deteleRecipe = () => {
        const db = getDBInstance('recipes');

        db.remove(this.state.recipe.id).then(() => 
            this.props.history.push('/')
        ); 
    }

    render() {
        if(this.state.fetching) {
            return <p>Loading...</p>
        }

        const { id, title, description, icon } = this.state.recipe

        return (
            <div>

                <h2 className="recipe-detail__header">
                    <Link to="/">
                        <img className="recipe-detail__back-icon" src={ArrowIcon} alt="Back" />
                    </Link>
                    {this.props.title}
                </h2>

                <div className="recipe-detail__container">
                <img className="recipe-detail__icon" src={icon} alt="Recipe Icon"/>
                    <h3 className="recipe-detail__title">{title}</h3>
                    <p className="recipe-detail__description">{description}</p>
                </div>

                <div className="recipe-detail__button-container">
                    <Link to={`/edit/${id}`}>
                        <button className="recipe-detail__button" type="button">Edit</button>
                    </Link>
                    
                    <button className="recipe-detail__button" type="button" onClick={this.deteleRecipe}>Delete</button>
                </div>

            </div>
            
        );
    }    
}

RecipeDetail.propTypes = {
    title: PropTypes.string.isRequired
}

export default RecipeDetail;