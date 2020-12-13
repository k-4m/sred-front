/* eslint-disable react/jsx-props-no-spreading */
import { Box, ResponsiveContext } from 'grommet';
import React from 'react';
import { Lamp } from '../entities/Lamp';
import { SSAddNew } from './Widget/SSAddNew';
import { SSWidget } from './Widget/SSWidget';

const lamp = new Lamp();

export const RightPane: React.FC = () => {
  const size = React.useContext(ResponsiveContext);
  const flexConfig = size !== 'small'
    ? {
      flex: { grow: 1 },
      width: { width: 'medium', max: 'medium' },
      height: { max: 'medium' },
    }
    : {};

  return (
    <Box direction='row-responsive' wrap flex='grow' justify='center' align='stretch'>
      <Box {...flexConfig} margin='medium'>
        <SSWidget data={lamp.getViewData()} />
      </Box>
      <Box {...flexConfig} margin='medium'>
        <SSAddNew />
      </Box>
    </Box>
  );
};
