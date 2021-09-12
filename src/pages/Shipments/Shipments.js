import * as React from 'react';
import {
  ActionsWrapper, HeaderWrapper, SectionTitlesWrapper, ListWrapper,
} from './ShipmentsStyled';
import { H1, H2 } from '../../theme/Typography';
// import PropTypes from 'prop-types';

const data = [
  {
    orderId: '001-300FCT',
    status: 'Ready',
    droneId: 'DJI-004Q',
    platform: 'Alpha',
    technician: 'Ernesto Garcia',
    checkStatus: 'Passed',
  },
  {
    orderId: '002-300FCT',
    status: 'Ready',
    droneId: 'DJI-004Q',
    platform: 'Alpha',
    technician: 'Jessica Salinas',
    checkStatus: 'Passed',
  },
  {
    orderId: '003-300FCT',
    status: 'Ready',
    droneId: 'DJI-004Q',
    platform: 'Beta',
    technician: 'Mariano Arribas',
    checkStatus: 'Passed',
  },
  {
    orderId: '004-300FCT',
    status: 'Ready',
    droneId: 'DJI-004Q',
    platform: 'Beta',
    technician: 'Miguel Obregón',
    checkStatus: 'Passed',
  },
  {
    orderId: '005-300FCT',
    status: 'Ready',
    droneId: 'DJI-004Q',
    platform: 'Beta',
    technician: 'Leonardo Flores',
    checkStatus: 'Passed',
  },
  {
    orderId: '006-300FCT',
    status: 'Ready',
    droneId: 'DJI-004Q',
    platform: 'Beta',
    technician: 'Gerardo Torres',
    checkStatus: 'Passed',
  },
  {
    orderId: '007-300FCT',
    status: 'Ready',
    droneId: 'DJI-004Q',
    platform: 'Gamma',
    technician: 'Shan Smith',
    checkStatus: 'Passed',
  },
  {
    orderId: '008-300FCT',
    status: 'Ready',
    droneId: 'DJI-004Q',
    platform: 'Gamma',
    technician: 'Juan Reynosa',
    checkStatus: 'Passed',
  },
  {
    orderId: '009-300FCT',
    status: 'Ready',
    droneId: 'DJI-004Q',
    platform: 'Gamma',
    technician: 'Ben Santana',
    checkStatus: 'Passed',
  },
];

const Shipments = () => {
  // console.log('data =>', data);
  // eslint-disable-next-line no-unused-vars
  const a = 0;
  return (
    <>
      <HeaderWrapper>
        <SectionTitlesWrapper>
          <H1>Delivery</H1>
          <H2>History</H2>
        </SectionTitlesWrapper>
        <ActionsWrapper>
          <p>Search</p>
          <p>Button</p>
        </ActionsWrapper>
      </HeaderWrapper>
      <ListWrapper>
        {data.map((item) => <li>{item.status}</li>)}
      </ListWrapper>
    </>
  );
};

Shipments.propTypes = {
  //
};

export default Shipments;
