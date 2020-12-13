import { Box } from 'grommet';
import React from 'react';
import { Header } from './Header';
import { LeftPane } from './LeftPane';
import { RightPane } from './RightPane';

export const Layout: React.FC = () => (
  <Box background='light-3' fill overflow='hidden'>
    <Header />
    <Box flex={false} direction='row-responsive' wrap height={{ max: '100%' }}>
      <Box margin='medium' flex='shrink'>
        <LeftPane />
      </Box>
      <Box flex overflow={{ vertical: 'scroll' }} fill>
        <RightPane />
      </Box>
    </Box>
  </Box>
);
