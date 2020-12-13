import {
  Box, Meter, Stack, Text,
} from 'grommet';
import React from 'react';
import { tDeviceProperty } from '../../../entities/types';

type tPropertyAsSliderProps = {
  property: tDeviceProperty;
};

export const PropertyAsSlider: React.FC<tPropertyAsSliderProps> = ({ property }) => (
  <Stack anchor='center'>
    <Meter
      type='bar'
      round
      values={[{ value: property.value as number, color: 'status-warning' }]}
      size='small'
      thickness='medium'
    />
    <Box direction='row' align='center' pad={{ bottom: 'xsmall' }}>
      <Text>{property.value as string}</Text>
      <Text size='xsmall'>%</Text>
    </Box>
  </Stack>
);
