import { Box } from 'grommet';
import React from 'react';
import { Property } from '../../entities/Property';

type tPropertyAsColorProps = {
  property: Property<string>;
};

export const PropertyAsColor: React.FC<tPropertyAsColorProps> = ({ property }) => (
  <Box background={property.value} pad='small' />
);
