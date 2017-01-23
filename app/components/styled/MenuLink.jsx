import styled from 'styled-components';

import { Link } from 'react-router';

/**
 * I can pass the props down to the styled-component but how to make a styled-component
 * *communicate* with with Link's `activeClassName` 🤔
 *
 * So for now MenuLink is also controlled with a .scss file for active styling
 */
const MenuLink = styled(Link)`
  flex: 1 1 auto;
  text-align: center;
  color: ${props => props.theme.color}
  text-decoration: none;
  border: 1px solid red;
`;

module.exports = MenuLink;
