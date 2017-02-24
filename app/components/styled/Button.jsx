import { PropTypes } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border-radius: 0.25em;
  border: 1px solid #1da1f2;
  padding: ${props => props.size === 'lg' ? '1.2em' : '0.8em'};
  font-size: ${props => props.size === 'lg' ? '1.2em' : '1em'};
  width: 100%;
  color: ${props => props.active ? '#1da1f2' : 'inherit'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  outline: none;
`;

Button.propTypes = {
  size: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: 'md',
  active: false,
  disabled: false,
};

module.exports = Button;
