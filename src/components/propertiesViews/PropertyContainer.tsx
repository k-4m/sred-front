import { Box, Text } from 'grommet';
import React from 'react';
import { Property } from '../../entities/Property';

export type tPropertyContainerProps = {
  property: Property;
};

export const PropertyContainer: React.FC<tPropertyContainerProps> = ({ children, property }) => (
  <Box flex={false} direction='row' gap='small' align='center' pad='small'>
    <Text size='medium'>{property.label}</Text>
    {children}
  </Box>
);
