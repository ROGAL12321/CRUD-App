import React from 'react';
import PropTypes from 'prop-types';

import {
    Link
} from 'react-router-dom';

import './RecipesItem.scss';

const RecipesItem = ({ id, icon, title, description }) => {
    return (
        <li className="recipes-item">
            <div className="recipes-item__link">
                <img src={icon} alt="Recipe Description" />
                <div className="recipes-item__description-container">
                    <h3 className="recipes-item__title">
                        {title}
                    </h3>
                    <p className="recipes-item__description">
                        {description.length > 30 ? `${description.slice(0, 30)} ...` : description}
                        <Link to={`/recipe/${id}`} className="recipes-item__show-more">
                            <small>Show more</small>
                        </Link>
                    </p>                
                </div>
            </div>
        </li>
    )
}

RecipesItem.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default RecipesItem