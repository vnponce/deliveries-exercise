import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import Button from 'components/Button';
import TextField from 'components/TextField';
import SelectField from 'components/SelectField';
import GlobalContext from 'context/GlobalContext';
import { useForm } from 'react-hook-form';
import { FormStyled, CopyWrapper } from './ModalWrapperStyled';

const ModalWrapper = ({ isOpen, setIsOpen }) => {
  const { shipments, saveShipment } = useContext(GlobalContext);
  const { register, handleSubmit } = useForm();

  const saveNewShipment = ({
    orderId, technician, platform, drone,
  }) => {
    console.log('data =>', {
      orderId, technician, platform, drone,
    });
    saveShipment({
      status: 'Pending',
      orderId,
      technician,
      platform,
      drone,
      technicalCheck: 'Passed',
      fakeTimestamp: shipments.length + 1,
    });
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      title="New delivery"
      handleClose={() => setIsOpen(false)}
      footerActions={(
        <Button onClick={handleSubmit(saveNewShipment)} variant="primary">
          Create new delivery
        </Button>
      )}
    >
      <CopyWrapper>
        Please select the order ID and a technician to deploy the cargo.
        All elements are mandatory.
      </CopyWrapper>
      <FormStyled>
        <TextField label="Order Id" id="orderId" {...register('orderId')} />
        <TextField label="Technician" id="technician" searchIcon {...register('technician')} />
        <SelectField label="Platform" id="platform" {...register('platform')}>
          <option value="Theta">Theta</option>
          <option value="Alpha">Alpha</option>
        </SelectField>
        <SelectField label="Drone" id="drone" {...register('drone')}>
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
