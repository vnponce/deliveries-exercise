import styled from 'styled-components';
import { spacing } from '../../theme';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const UserStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: ${spacing.miny};
`;
