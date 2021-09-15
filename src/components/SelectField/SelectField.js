import React from 'react';
import PropTypes from 'prop-types';
import {
  LabelStyled,
  SelectFieldStyled,
  SelectFieldWrapper,
} from './SelectFieldStyled';

const SelectField = React.forwardRef(({
  children,
  label,
  id,
  ...rest
}, ref) => (
  <SelectFieldWrapper>
    <LabelStyled htmlFor={id}>{label}</LabelStyled>
    <SelectFieldStyled id={id} ref={ref} {...rest}>
      {children}
    </SelectFieldStyled>
  </SelectFieldWrapper>
));

SelectField.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // options: PropTypes.arrayOf({
  //   value: PropTypes.string.isRequired,
  //   label: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.node,
  //   ]),
  // }).isRequired,
};

export default SelectField;
