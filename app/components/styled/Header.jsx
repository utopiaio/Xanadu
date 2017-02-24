import { Link } from 'react-router';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 63px;
  border-bottom: 1px solid #D0D0D0;
`;

const HeaderMeter = styled.div`
  flex: 0 0 64px;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  text-align: center;
`;

const HeaderTitle = styled.div`
  flex: 1 1 auto;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  text-align: center;
`;

const HeaderLink = styled(Link)`
  flex: 0 1 64px;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  textDecoration: none;
  fontSize: 2em;
  color: #31a8e6;
  text-align: right;
`;

module.exports = {
  Header,
  HeaderMeter,
  HeaderTitle,
  HeaderLink,
};
