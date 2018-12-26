import React from 'react';
import { Link } from 'react-router-dom';

import AddIcon from 'assets/add.svg';

import HeaderIcon from 'styledComponents/HeaderIcon'
import Icon from 'styledComponents/Icon'

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/add">
          <HeaderIcon>
            <Icon src={AddIcon} alt="Add task"/>
          </HeaderIcon>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation;