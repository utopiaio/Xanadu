import { PropTypes } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border-radius: 0.25em;
  border: 1px solid ${props => props.active ? '#1da1f2' : props.delete ? '#ff6d5e' : 'inherit'};
  padding: ${props => props.size === 'lg' ? '1.2em' : '0.8em'};
  margin-bottom: ${props => props.size === 'lg' ? '1.2em' : '1em'};
  font-size: ${props => props.size === 'lg' ? '1.2em' : '1em'};
  width: 100%;
  color: ${props => props.active ? '#1da1f2' : props.delete ? '#ff6d5e' : 'inherit'};
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
