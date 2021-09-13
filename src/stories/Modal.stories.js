import React, { useState } from 'react';
import Button from 'components/Button';
import Modal from 'components/Modal';

export default {
  title: 'Modal',
  component: Modal,
};

const Template = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        isOpen={open}
        title="abel"
        handleClose={() => setOpen(false)}
        footerActions={(
          <Button onClick={() => setOpen(false)} variant="primary">
            Save changes
          </Button>
        )}
        {...args}
      >
        Please select the order ID and a technician to deploy the cargo.
        All elements are mandatory.
      </Modal>
    </div>
  );
};

export const ModalStory = Template.bind({});

ModalStory.args = {
  title: 'New delivery ',
};
