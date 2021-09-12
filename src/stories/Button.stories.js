import * as React from 'react';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => <Button {...args}>New delivery</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  // onClick: () => console.log('clicked!'),
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
