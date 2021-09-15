import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../svgs/icons/Search';
import {
  IconWrapper, InputStyled, LabelStyled, TextFieldWrapper,
} from './TextFieldStyled';

const TextField = React.forwardRef(({
  id, name, label, searchIcon = false, ...rest
}, ref) => {
  // const [isFocus, setIsFocus] = useState(false);
  // pendiente ocultar el label
  // poner el icono dinámico
  console.log('abel');
  return (
    <TextFieldWrapper>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      {searchIcon && <IconWrapper><Search /></IconWrapper>}
      <InputStyled ref={ref} id={id} name={name} placeholder={label} {...rest} />
    </TextFieldWrapper>
  );
});

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  searchIcon: PropTypes.bool,
};

export default TextField;
