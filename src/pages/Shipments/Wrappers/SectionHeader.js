/* eslint-disable */
import * as React from 'react';
import {
  ActionsWrapper,
  HeaderWrapper,
  SectionTitlesWrapper,
  ListWrapper,
  SearchWrapper,
  NewDeliveryButtonWrapper,
} from './ShipmentsStyled';
import { H1, H2 } from '../../theme/Typography';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
// import PropTypes from 'prop-types';
// @todo: SE DEBE ANALIZAR COMO PONER EL SECTION HEADER PORQUE ESTE NO SE USA
const SectionHeader = ({ title, subtitle }) => {
  // console.log('data =>', data);
  // eslint-disable-next-line no-unused-vars
  const a = 0;
  return (
    <HeaderWrapper>
      <SectionTitlesWrapper>
        <H1>title</H1>
        <H2>subtitle</H2>
      </SectionTitlesWrapper>
      <ActionsWrapper>
        <SearchWrapper>
          <TextField id="search" name="search" label="Search" searchIcon />
        </SearchWrapper>
        <NewDeliveryButtonWrapper>
          <Button variant="primary" onClick={() => console.log('create new one')}>New delivery</Button>
        </NewDeliveryButtonWrapper>
      </ActionsWrapper>
    </HeaderWrapper>
  );
};

SectionHeader.propTypes = {
  //
};

export default SectionHeader;
