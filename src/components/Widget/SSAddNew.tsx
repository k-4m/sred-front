import { Box } from 'grommet';
import { Add } from 'grommet-icons';
import React from 'react';

type tSSAddNewProps = {
  // pass
};

export const SSAddNew: React.FC<tSSAddNewProps> = () => (
  <Box pad='medium' background='white' elevation='large' round align='center' fill>
    <Box pad='large' margin='auto'>
      <Add size='large' />
    </Box>
  </Box>
);
