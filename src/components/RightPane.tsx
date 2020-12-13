import { Box } from 'grommet';
import React from 'react';
import { SSWidget } from './Widget/SSWidget';

export const RightPane: React.FC = () => (
  <Box direction='row-responsive' wrap flex='grow'>
    {Array.from({ length: 10 }).map((i) => (
      <Box flex={false} margin='medium' key={i}>
        <SSWidget name={'L1'} typeName='lamp' />
      </Box>
    ))}
  </Box>
);
