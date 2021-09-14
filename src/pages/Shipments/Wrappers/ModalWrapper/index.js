import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import Button from 'components/Button';
import TextField from 'components/TextField';
import SelectField from 'components/SelectField';
import { FormStyled, CopyWrapper } from './ModalWrapperStyled';
import GlobalContext from '../../../../context/GlobalContext';

const ModalWrapper = ({ isOpen, setIsOpen }) => {
  const { saveShipment } = useContext(GlobalContext);

  // console.log('data =>', data);
  // eslint-disable-next-line no-unused-vars
  const a = 0;
  const saveNewShipment = () => {
    // trigger react hook form
    saveShipment({
      status: 'Pending',
      orderId: 'new-order-id',
      technician: 'Jane',
      platform: 'Alpha',
      drone: 'DJI-004Q',
      technicalCheck: 'Passed',
      fakeTimestamp: 2,
    });
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      title="New delivery"
      handleClose={() => setIsOpen(false)}
      footerActions={(
        <Button onClick={saveNewShipment} variant="primary">
          Create new delivery
        </Button>
      )}
    >
      <CopyWrapper>
        Please select the order ID and a technician to deploy the cargo.
        All elements are mandatory.
      </CopyWrapper>
      <FormStyled>
        <TextField label="Order Id" id="order-id" name="order-id" />
        <TextField label="Technician" id="technician" name="technician" />
        <SelectField label="Platform" id="platform">
          <option value="Theta">Theta</option>
          <option value="Alpha">Alpha</option>
        </SelectField>
        <SelectField label="Drone" id="drone">
          <option value="DJI-004Q">DJI-004Q</option>
          <option value="DJI-005Q">DJI-005Q</option>
        </SelectField>
      </FormStyled>
    </Modal>
  );
};

ModalWrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default ModalWrapper;
