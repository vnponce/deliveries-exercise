import React from 'react';
import PropTypes from 'prop-types';
import {
  LabelStyled,
  SelectFieldStyled,
  SelectFieldWrapper,
  InputWrapper,
} from './SelectFieldStyled';

const SelectField = React.forwardRef(({
  children,
  label,
  labelIsVisible = true,
  id,
  ...rest
}, ref) => (
  <SelectFieldWrapper>
    <LabelStyled htmlFor={id} isVisible={labelIsVisible}>{label}</LabelStyled>
    <InputWrapper>
      <SelectFieldStyled id={id} ref={ref} {...rest}>
        {children}
      </SelectFieldStyled>
    </InputWrapper>
  </SelectFieldWrapper>
));

SelectField.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  labelIsVisible: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default SelectField;
