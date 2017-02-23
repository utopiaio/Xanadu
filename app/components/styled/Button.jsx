import { PropTypes } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  border: 1px solid ${props => props.borderColor};
  padding: ${props => props.size === 'lg' ? '1.2em' : '0.8em'};
  font-size: ${props => props.size === 'lg' ? '1.2em' : '1em'};
  width: 100%;
  color: ${props => props.active ? '#1da1f2' : 'inherit'}
  opacity: ${props => props.disabled ? 0.5 : 1}
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: 'transparent',
  borderRadius: '0.25em',
  borderColor: '#1da1f2',
  size: 'md',
  active: false,
  disabled: false,
};

module.exports = Button;
