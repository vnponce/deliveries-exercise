import * as React from 'react';

import TextField from '../components/TextField';

export default {
  title: 'Text Field',
  component: TextField,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TextField {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: 'Main',
};
