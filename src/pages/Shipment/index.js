import React from 'react';
import { useParams } from 'react-router-dom';
import { H1 } from '../../theme/Typography';

const Shipment = () => {
  const { shipmentId } = useParams();

  return <H1>{shipmentId}</H1>;
};

export default Shipment;
