import {
  Box, Meter, Stack, Text,
} from 'grommet';
import React from 'react';
import { Property } from '../../entities/Property';

type tPropertyAsSliderProps = {
  property: Property<number>;
};

export const PropertyAsSlider: React.FC<tPropertyAsSliderProps> = ({ property }) => (
  <Stack anchor='center'>
    <Meter
      type='bar'
      round
      values={[{ value: property.value, color: 'status-warning' }]}
      size='small'
      thickness='medium'
    />
    <Box direction='row' align='center' pad={{ bottom: 'xsmall' }}>
      <Text>{property.value}</Text>
      <Text size='xsmall'>%</Text>
    </Box>
  </Stack>
);
