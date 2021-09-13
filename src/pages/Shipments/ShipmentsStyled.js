import styled from 'styled-components';
import { colors, spacing } from 'theme';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SectionTitlesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: ${spacing.main};
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow: scroll;

`;

export const TableStyled = styled.table`
  width: 100%;
  margin-top: ${spacing.large};
`;

export const CaptionStyled = styled.caption`
  display: block;
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const SearchWrapper = styled.ul`
  width: 100%;
  max-width: 240px;
`;

export const NewDeliveryButtonWrapper = styled.ul`
  width: 100%;
  max-width: 132px;
`;

export const ListItemWrapper = styled.tr`
  display: flex;
  gap: ${spacing.xLarge}; 
  padding: ${spacing.large} 0;
  border-top: 1px solid ${colors.inputBorder};
  &:first-of-type {
    border: none;
  }
`;
export const CellWrapper = styled.td`
  width: 100%;
  min-width: 120px;
  text-align: left;
  white-space: nowrap;
`;
export const LabelCellStyled = styled.div`
  color: ${colors.inputPlaceHolder}
`;
export const ValueCellStyled = styled.div`
  color: ${colors.black}
`;
export const ActionsWrapper = styled.div`
  display: flex;
  gap: ${spacing.main};
  min-width: 300px;
`;
export const ActionWrapper = styled.div`
  max-width: 122px;
  flex: 1;
  // display: flex;
  // gap: ${spacing.miny};
`;
