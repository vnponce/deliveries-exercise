import styled, { css } from 'styled-components';
import {
  borderRadius, boxShadow, colors, fontFamily, fontSize, lineHeight, spacing,
} from 'theme';

export const SelectFieldWrapper = styled.div`
`;

export const InputWrapper = styled.div`
  &,
  &::before,
  &::after {
    box-sizing: border-box;
  }
  position: relative;
  cursor: pointer;

  &::after {
    content: url("/arrow-down.svg");
    right: 11px;
    top: ${spacing.miny};
    height: 34px;
    padding: 0px 0px 0px 8px;
    position: absolute;
    pointer-events: none;
  }
`;

export const SelectFieldStyled = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  outline: none;
  width: 100%;
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
