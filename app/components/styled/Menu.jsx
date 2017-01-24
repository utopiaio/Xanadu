import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: ${props => props.theme.backgroundColor};
`;

module.exports = Menu;
