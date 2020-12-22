import { Anchor, Box } from 'grommet';
import React from 'react';

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
      <Anchor href='' label='Моя розумна кімната' margin='small' />
    </Box>
  </Box>
);
