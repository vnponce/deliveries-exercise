import React from 'react';
import PropTypes from 'prop-types';
// import {
//   //
// } from './ShipmentsStyled';

const ShipmentListItem = ({ data, columns }) => {
  // console.log('data =>', data);
  // eslint-disable-next-line no-unused-vars
  const a = 0;
  return (
    <li>
      {columns.map((column) => (
        <>
          <span>{column}</span>
          <span>{data[column]}</span>
        </>
      ))}
    </li>
  );
};

ShipmentListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array.isRequired,
};

export default ShipmentListItem;
