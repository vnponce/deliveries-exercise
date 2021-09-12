import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonStyled,
} from './ButtonStyled';

const Button = ({
  children,
  onClick,
  variant = 'default',
  type = 'button',
}) => (
  <ButtonStyled type={type} onClick={onClick} variant={variant}>
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'default']),
  type: PropTypes.string,
};

export default Button;
