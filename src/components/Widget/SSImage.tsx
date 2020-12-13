import { Box, Image } from 'grommet';
import React from 'react';

type tSSImageProps = {
  image: string;
};

export const SSImage: React.FC<tSSImageProps> = ({ image }) => (
  <Box height='xxsmall' width='xxsmall'>
    <Image src={image} fill />
  </Box>
);
