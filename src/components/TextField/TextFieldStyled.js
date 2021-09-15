import styled, { css } from 'styled-components';
import {
  borderRadius, boxShadow, colors, fontFamily, fontSize, lineHeight, spacing,
} from 'theme';

export const TextFieldWrapper = styled.div`
  position: relative;
`;

export const InputWrapper = styled.div`
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
  display: block;
  visibility: hidden;
  width: 0;
  height: 0;

  ${({ isVisible }) => isVisible && css`
    font-family: ${fontFamily.main};
    font-size: ${fontSize.small};
    color: ${colors.inputPlaceHolder};
    line-height: ${lineHeight.main};
    position: relative;
    width: auto;
    height: auto;
    visibility: visible;
  `}
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
