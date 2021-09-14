import React, { useContext, useState } from 'react';
import { H1, H2 } from 'theme/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import GlobalContext from 'context/GlobalContext';
import {
  ActionsWrapper,
  HeaderWrapper,
  SectionTitlesWrapper,
  SearchWrapper,
  NewDeliveryButtonWrapper,
  TableWrapper,
} from './ShipmentsStyled';
import ModalWrapper from './Wrappers/ModalWrapper';
import Table from './Wrappers/Table';

const sortFakeTimestamp = (a, b) => {
  if (a < b) return 1;
  if (b < a) return 0;
  return -1;
};

const columns = [
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'orderId',
    label: 'Order ID',
  },
  {
    key: 'technician',
    label: 'Technician',
  },
  {
    key: 'platform',
    label: 'Platform',
  },
  {
    key: 'drone',
    label: 'Drone',
  },
  {
    key: 'technicalCheck',
    label: 'Technical Tech',
  },
];

const Shipments = () => {
  const {
    shipments,
  } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderWrapper>
        <SectionTitlesWrapper>
          <H1>Delivery</H1>
          <H2>History</H2>
        </SectionTitlesWrapper>
        <ActionsWrapper>
          <SearchWrapper>
            <TextField id="search" name="search" label="Search" searchIcon />
          </SearchWrapper>
          <NewDeliveryButtonWrapper>
            <Button variant="primary" onClick={() => setIsOpen(true)}>New delivery</Button>
          </NewDeliveryButtonWrapper>
        </ActionsWrapper>
      </HeaderWrapper>
      <TableWrapper>
        <Table name="shipments" data={shipments.sort(sortFakeTimestamp)} columns={columns} />
      </TableWrapper>
    </>
  );
};

Shipments.propTypes = {
  //
};

export default Shipments;
