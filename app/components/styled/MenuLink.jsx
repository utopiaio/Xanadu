import styled from 'styled-components';

import { Link } from 'react-router';

/**
 * I can pass the props down to the styled-component but how to make a styled-component
 * *communicate* with with Link's `activeClassName` 🤔
 *
 * So for now MenuLink is also controlled with a .scss file for active styling
 */
const MenuLink = styled(Link)`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  text-align: center;
  text-decoration: none;
  background-color: #fff;
  color: #969696;
  transition: all 0 linear;
`;

module.exports = MenuLink;
