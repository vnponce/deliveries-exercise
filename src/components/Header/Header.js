import React from 'react';
import { H3 } from 'theme/Typography';
import User from 'svgs/icons/User';
import {
  HeaderStyled, UserStyled,
} from './HeaderStyled';

const Header = () => (
  <HeaderStyled>
    <H3>Dronocargo</H3>
    <UserStyled>
      Regina Zepeda
      <User />
    </UserStyled>
  </HeaderStyled>
);

Header.propTypes = {
  //
};

export default Header;
