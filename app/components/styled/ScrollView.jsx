import { PropTypes } from 'react';
import styled from 'styled-components';

const ScrollView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: ${props => props.height};
  overflow-y: ${props => props.overflowY};
  -webkit-overflow-scrolling: touch;
`;

ScrollView.propTypes = {
  height: PropTypes.string,
  overflowY: PropTypes.string,
};

ScrollView.defaultProps = {
  height: '100vh',
  overflowY: 'scroll',
};

module.exports = ScrollView;
