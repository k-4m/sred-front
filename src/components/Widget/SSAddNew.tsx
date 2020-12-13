import { Box } from 'grommet';
import { Add } from 'grommet-icons';
import React from 'react';

type tSSAddNewProps = {
  // pass
};

export const SSAddNew: React.FC<tSSAddNewProps> = () => (
  <Box
    direction='row'
    justify='between'
    gap='large'
    pad='medium'
    background='white'
    elevation='large'
    round
    align='center'
  >
    <Box pad='large' margin='auto'>
      <Add size='large' />
    </Box>
  </Box>
);
