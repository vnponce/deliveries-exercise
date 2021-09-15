import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../svgs/icons/Search';
import {
  IconWrapper, InputStyled, InputWrapper, LabelStyled, TextFieldWrapper,
} from './TextFieldStyled';

const TextField = React.forwardRef(({
  id,
  name,
  label,
  labelIsVisible = true,
  searchIcon = false,
  ...rest
}, ref) => (
  <TextFieldWrapper>
    <LabelStyled htmlFor={id} isVisible={labelIsVisible}>{label}</LabelStyled>
    <InputWrapper>
      {searchIcon && <IconWrapper><Search /></IconWrapper>}
      <InputStyled ref={ref} id={id} name={name} placeholder={label} {...rest} />
    </InputWrapper>
  </TextFieldWrapper>
));

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelIsVisible: PropTypes.bool,
  searchIcon: PropTypes.bool,
};

export default TextField;
