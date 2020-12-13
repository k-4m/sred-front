import React from 'react';
import { Anchor, Box } from 'grommet';

type tHeaderProps = {
  // p
};

export const Header: React.FC<tHeaderProps> = () => (
  <Box flex={false} tag='header' direction='row' background='white' align='center' justify='between' responsive={false}>
    <Box
      margin={{ left: 'medium' }}
      round='xsmall'
      background={{ color: 'white', opacity: 'weak' }}
      direction='row'
      align='center'
      pad={{ horizontal: 'small' }}
    >
      <Anchor href='' label='Activity' margin='small' />
      <Anchor href='' label='Utilization' margin='small' />
      <Anchor href='' label='Virtual Machines' margin='small' />
    </Box>
  </Box>
);
