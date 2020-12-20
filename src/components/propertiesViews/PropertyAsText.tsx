import { Text } from 'grommet';
import React from 'react';
import { Property } from '../../entities/Property';

type tPropertyAsTextProps = {
  property: Property<string>;
};

export const PropertyAsText: React.FC<tPropertyAsTextProps> = ({ property }) => <Text>{property.value}</Text>;
