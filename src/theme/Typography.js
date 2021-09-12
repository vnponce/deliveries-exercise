import styled from 'styled-components';
import { colors, fontSize, fontWeight } from './index';

export const H1 = styled.h1`
  margin: 0;
  color: ${colors.black};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.header};
`;

export const H2 = styled.h2`
  margin: 0;
  color: ${colors.black};
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.header};
  opacity: 0.5;
`;

export const H3 = styled.h3`
  margin: 0;
  color: ${colors.black};
  font-weight: ${fontWeight.semiBold};
  font-size: ${fontSize.main};
`;
