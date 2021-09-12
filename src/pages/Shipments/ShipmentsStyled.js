import styled from 'styled-components';
import { spacing } from 'theme';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SectionTitlesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: ${spacing.main};
`;

export const ActionsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: ${spacing.main};
`;

export const ListWrapper = styled.ul`
  width: 100%;
  margin-top: ${spacing.large};
`;
