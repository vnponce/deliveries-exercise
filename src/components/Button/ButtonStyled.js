import styled from 'styled-components';
import {
  borderRadius, boxShadow, colors, fontSize, fontWeight, spacing,
} from 'theme';

// eslint-disable-next-line import/prefer-default-export
export const ButtonStyled = styled.button`
  width: 100%;
  padding: ${spacing.miny} ${spacing.main};
  border: 1px solid ${colors.inputBorder};
  border-radius: ${borderRadius.main};
  cursor: pointer;
  background-color: ${(props) => (props.variant === 'primary' ? colors.primary : 'initial')};
  font-size: ${fontSize.main};
  font-weight: ${fontWeight.medium};
  color: ${(props) => (props.variant === 'primary' ? colors.white : 'initial')};
  
  &:hover {
    box-shadow: ${boxShadow.main};
    opacity: 0.9;
  }
`;
