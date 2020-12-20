import { Box, Text } from 'grommet';
import React from 'react';
import { iSmartThing } from '../../entities/types';
import { SSImage } from './SSImage';

type tSSIdentifierProps = {
  thing: iSmartThing;
};

export const SSIdentifier: React.FC<tSSIdentifierProps> = ({ thing }) => (
  <Box gap='small' align='center' direction='row' pad='small'>
    <SSImage image={thing.getIcon()} />
    <Box>
      <Text size='small' weight='bold'>
        {thing.getName()}
      </Text>
      <Text size='small'>{thing.getDevice()}</Text>
    </Box>
  </Box>
);
