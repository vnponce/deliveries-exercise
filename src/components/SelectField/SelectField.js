import React from 'react';
import PropTypes from 'prop-types';
import {
  LabelStyled,
  SelectFieldStyled,
  SelectFieldWrapper,
} from './SelectFieldStyled';

const SelectField = ({
  children,
  label,
  id,
}) => {
  console.log('abel');
  return (
    <SelectFieldWrapper>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <SelectFieldStyled id={id}>
        {children}
      </SelectFieldStyled>
    </SelectFieldWrapper>
  );
};

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
