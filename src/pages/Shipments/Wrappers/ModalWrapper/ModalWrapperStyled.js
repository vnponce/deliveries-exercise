import styled from 'styled-components';
import { spacing } from 'theme';

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  gap: ${spacing.medium};
  margin: ${spacing.large} auto;
`;

export const CopyWrapper = styled.div`
  margin-top: ${spacing.main};
`;
