import * as React from 'react';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => <Button {...args}>New delivery</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
