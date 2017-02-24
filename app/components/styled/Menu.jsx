import { Link } from 'react-router';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex: 0 0 49px;
  border-top: 1px solid #D0D0D0;
`;

const MenuIcon = styled.i`
  margin-bottom: .15em;
  font-size: 1.6em;
`;

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

const MenuText = styled.span`
  font-size: 0.8em;
`;

module.exports = {
  Menu,
  MenuIcon,
  MenuLink,
  MenuText,
};
