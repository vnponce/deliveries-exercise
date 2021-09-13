import styled from 'styled-components';
import {
  spacing,
  colors, fontFamily,
} from 'theme';

export const AppStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${spacing.medium} ${spacing.large}  ${spacing.xxLarge};
  background: ${colors.white};
  color: ${colors.black};
  font-family: ${fontFamily.main};
`;

export const MainStyled = styled.main`
  flex: 1;
  margin-top: ${spacing.xLarge};
`;

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
`;
