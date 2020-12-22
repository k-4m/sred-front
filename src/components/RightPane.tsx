/* eslint-disable react/jsx-props-no-spreading */
import { Box, ResponsiveContext } from 'grommet';
import React from 'react';
import { useStoreState } from '../store';
import { SSAddNew } from './Widget/SSAddNew';
import { SSWidget } from './Widget/SSWidget';

export const RightPane: React.FC = () => {
  const things = useStoreState((store) => store.room.things);
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
      {things.map((t) => (
        <Box {...flexConfig} margin='medium' key={t.id}>
          <SSWidget thing={t} />
        </Box>
      ))}

      <Box {...flexConfig} margin='medium'>
        <SSAddNew />
      </Box>
    </Box>
  );
};
