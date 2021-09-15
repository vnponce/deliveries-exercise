import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../svgs/icons/Search';
import {
  IconWrapper,
  InputStyled,
  InputWrapper,
  LabelStyled,
  TextFieldWrapper,
  ErrorStyled,
} from './TextFieldStyled';

const TextField = React.forwardRef(({
  id,
  name,
  label,
  labelIsVisible = true,
  searchIcon = false,
  error,
  ...rest
}, ref) => (
  <TextFieldWrapper>
    <LabelStyled htmlFor={id} isVisible={labelIsVisible}>{label}</LabelStyled>
    <InputWrapper>
      {searchIcon && <IconWrapper><Search /></IconWrapper>}
      <InputStyled ref={ref} id={id} name={name} placeholder={label} {...rest} />
    </InputWrapper>
    { error && (
      <ErrorStyled role="alert" aria-label={error.message}>{error.message}</ErrorStyled>
    )}
  </TextFieldWrapper>
));

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelIsVisible: PropTypes.bool,
  searchIcon: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.object,
};

export default TextField;
