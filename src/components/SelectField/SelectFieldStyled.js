import styled from 'styled-components';
import {
  borderRadius, boxShadow, colors, spacing,
} from 'theme';

export const SelectFieldWrapper = styled.div`
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
  top: -${spacing.main};
  left: 0;
  display: block;
  visibility: hidden;
  width: 0;
  height: 0;
`;
