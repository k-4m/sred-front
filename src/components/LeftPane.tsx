import { Box } from 'grommet';
import React from 'react';
import { EmojiTrackers } from './EmojiTrackers';
import { UserPhoto } from './UserPhoto';

export const LeftPane: React.FC = () => (
  <Box direction='column' gap='large' align='center'>
    <UserPhoto />
    <EmojiTrackers />
  </Box>
);
