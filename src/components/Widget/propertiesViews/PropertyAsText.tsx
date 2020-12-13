import { Text } from 'grommet';
import React from 'react';
import { tDeviceProperty } from '../../../entities/types';

type tPropertyAsTextProps = {
  property: tDeviceProperty;
};

export const PropertyAsText: React.FC<tPropertyAsTextProps> = ({ property }) => <Text>{property.value as string}</Text>;
