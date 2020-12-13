import { Box, Text } from 'grommet';
import React from 'react';
import { SSImage } from './SSImage';

type tSSIdentifierProps = {
  image: string;
  name: string;
  typeName: string;
};

export const SSIdentifier: React.FC<tSSIdentifierProps> = ({ image, name, typeName }) => (
  <Box gap='small' align='center' direction='row' pad='small'>
    <SSImage image={image} />
    <Box>
      <Text size='small' weight='bold'>
        {name}
      </Text>
      <Text size='small'>{typeName}</Text>
    </Box>
  </Box>
);
