import { Box } from 'grommet';
import React from 'react';
import { useFetchUpdates } from '../hooks/useFetchUpdates';
import { CreationFormModal } from './CreationForm/CreationFormModal';
import { Header } from './Header';
import { LeftPane } from './LeftPane';
import { RightPane } from './RightPane';

export const Layout: React.FC = () => {
  useFetchUpdates();

  return (
    <>
      <Box background='light-3' height={{ min: '100%' }}>
        <Header />
        <Box flex={false} direction='row-responsive' wrap>
          <Box margin='medium' flex='shrink'>
            <LeftPane />
          </Box>
          <Box flex fill>
            <RightPane />
          </Box>
        </Box>
      </Box>
      <CreationFormModal />
    </>
  );
};
