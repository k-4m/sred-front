import { Box, Text } from 'grommet';
import React from 'react';
import { Property } from '../../../entities/Property';

type tPropertyEditContainerProps = {
  property: Property;
};

export const PropertyEditContainer: React.FC<tPropertyEditContainerProps> = ({ property, children }) => (
  <Box flex={false} direction='row' gap='small' align='center' pad='small'>
    <Text size='medium'>{property.label}</Text>
    {children}
  </Box>
);
