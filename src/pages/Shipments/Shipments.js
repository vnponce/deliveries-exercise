import React, { useContext } from 'react';
import { H1, H2 } from 'theme/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import User from 'svgs/icons/User';
import SelectField from 'components/SelectField';
import { useHistory } from 'react-router-dom';
import GlobalContext from 'context/GlobalContext';
import {
  ActionsWrapper,
  HeaderWrapper,
  SectionTitlesWrapper,
  TableStyled,
  SearchWrapper,
  NewDeliveryButtonWrapper,
  ListItemWrapper,
  CellWrapper,
  ValueCellStyled,
  LabelCellStyled,
  ActionWrapper,
  TableWrapper,
  CaptionStyled,
} from './ShipmentsStyled';

const sortFakeTimestamp = (a, b) => {
  if (a < b) return 1;
  if (b < a) return 0;
  return -1;
};

const Shipments = () => {
  const history = useHistory();
  const {
    shipments,
  } = useContext(GlobalContext);
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
  return (
    <>
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
            <Button variant="primary" onClick={() => console.log('create new one')}>New delivery</Button>
          </NewDeliveryButtonWrapper>
        </ActionsWrapper>
      </HeaderWrapper>
      <TableWrapper>
        <TableStyled data-testid="shipments">
          <CaptionStyled>shipments</CaptionStyled>
          {shipments.sort(sortFakeTimestamp).map((item) => (
            <ListItemWrapper data-testid={item.orderId}>
              {columns.map(({ key, label }) => (
                <CellWrapper>
                  <LabelCellStyled>{label}</LabelCellStyled>
                  <ValueCellStyled>{item[key]}</ValueCellStyled>
                </CellWrapper>
              ))}
              <ActionsWrapper>
                <ActionWrapper>
                  <Button onClick={() => history.push(`/shipment/${item.orderId}`)}>
                    Details
                    <User />
                  </Button>
                </ActionWrapper>
                <ActionWrapper>
                  <SelectField label="Actions">
                    <option value="">Actions</option>
                    <option value="edit">Edit</option>
                    <option value="remove">Remove</option>
                  </SelectField>
                </ActionWrapper>
              </ActionsWrapper>
            </ListItemWrapper>
          ))}
        </TableStyled>
      </TableWrapper>
    </>
  );
};

Shipments.propTypes = {
  //
};

export default Shipments;
