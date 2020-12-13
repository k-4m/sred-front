import { Box } from 'grommet';
import React from 'react';
import { tDeviceProperty } from '../../../entities/types';

type tPropertyAsColorProps = {
  property: tDeviceProperty;
};

export const PropertyAsColor: React.FC<tPropertyAsColorProps> = ({ property }) => (
  <Box background={property.value as string} pad='small' />
);
