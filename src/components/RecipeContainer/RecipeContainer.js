import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header/Header';
import './RecipeContainer.scss';

const RecipeContainer = ({ children }) => (
    <>
        <Header />
        <div className="container">
            <div className="recipes-container">
                {children}
            </div>
        </div>
    </>
)

RecipeContainer.propTypes = {
    children: PropTypes.object
}

export default RecipeContainer;