import * as React from 'react';

import SelectField from '../components/SelectField';

export default {
  title: 'Select Field',
  component: SelectField,
  argTypes: {
    // backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => (
  <SelectField {...args}>
    <option value="female">female</option>
    <option value="male">male</option>
    <option value="other">other</option>
  </SelectField>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Gender',
};
