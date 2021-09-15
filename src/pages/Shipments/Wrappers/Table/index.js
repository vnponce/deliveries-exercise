import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Details from 'svgs/icons/Details';
import Button from 'components/Button';
import SelectField from 'components/SelectField';
import {
  ActionsWrapper,
  ActionWrapper,
  CaptionStyled,
  CellWrapper,
  DetailsIconWrapper,
  LabelCellStyled,
  ListItemWrapper,
  TableStyled,
  ValueCellStyled,
} from '../../ShipmentsStyled';

const Table = ({ name, data, columns }) => {
  const history = useHistory();
  return (
    <TableStyled data-testid={name}>
      <CaptionStyled>{name}</CaptionStyled>
      {data.map((item) => (
        <ListItemWrapper data-testid={item.orderId} item={item}>
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
                <DetailsIconWrapper>
                  <Details />
                </DetailsIconWrapper>
              </Button>
            </ActionWrapper>
            <ActionWrapper>
              <SelectField id="actions" label="Actions">
                <option value="">Actions</option>
                <option value="edit">Edit</option>
                <option value="remove">Remove</option>
              </SelectField>
            </ActionWrapper>
          </ActionsWrapper>
        </ListItemWrapper>
      ))}
    </TableStyled>
  );
};

Table.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array.isRequired,
};

export default Table;
