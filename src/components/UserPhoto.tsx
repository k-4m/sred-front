import { Box, Card, Image } from 'grommet';
import React from 'react';

type tUserPhotoProps = {
  // pass
};

export const UserPhoto: React.FC<tUserPhotoProps> = () => (
  <Card elevation='large'>
    <Box fill justify='center' align='center'>
      <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
    </Box>
  </Card>
);
