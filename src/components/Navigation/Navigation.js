import React from 'react';
import { Link } from 'react-router-dom';

import AddIcon from 'assets/add.svg';

import HeaderIcon from 'blocks/HeaderIcon'
import Icon from 'blocks/Icon'

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