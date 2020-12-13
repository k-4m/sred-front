/* eslint-disable react/jsx-props-no-spreading */
import { Box, ResponsiveContext } from 'grommet';
import React from 'react';
import { SSAddNew } from './Widget/SSAddNew';
import { SSWidget } from './Widget/SSWidget';

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
      {Array.from({ length: 9 }).map((i) => (
        <Box {...flexConfig} key={i} margin='medium'>
          <SSWidget name={'L1'} typeName='smart lamp' />
        </Box>
      ))}
      <Box {...flexConfig} margin='medium'>
        <SSAddNew />
      </Box>
    </Box>
  );
};
