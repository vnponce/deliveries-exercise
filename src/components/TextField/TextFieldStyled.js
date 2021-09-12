import styled from 'styled-components';
import {
  borderRadius, boxShadow, colors, spacing,
} from 'theme';

export const TextFieldWrapper = styled.div`
  position: relative;
  border: 1px solid ${colors.inputBorder};
  display: flex;
  padding: ${spacing.miny} ${spacing.main};
  border-radius: ${borderRadius.main};
  box-shadow: ${boxShadow.main};
  min-height: 36px;
  box-sizing: border-box;
`;

export const LabelStyled = styled.label`
  position: absolute;
  top: -${spacing.main};
  left: 0;
  display: block;
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-right: ${spacing.tiny};
`;

export const InputStyled = styled.input`
  border: none;
  width: 100%;
  ::placeholder {
    color: ${colors.inputPlaceHolder};
  }
  &:focus {
    outline: 0;
  }
`;
