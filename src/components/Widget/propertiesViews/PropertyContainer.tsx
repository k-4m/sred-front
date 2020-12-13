import { Box, Text } from 'grommet';
import React from 'react';

export type tPropertyContainerProps = {
  label: string;
};

export const PropertyContainer: React.FC<tPropertyContainerProps> = ({ children, label }) => (
  <Box flex={false} direction='row' gap='small' align='center' pad='small'>
    <Text size='medium'>{label}</Text>
    {children}
  </Box>
);
