import { CheckBox } from 'grommet';
import React from 'react';
import { Property } from '../../entities/Property';

type tPropertyAsCheckboxProps = {
  property: Property<boolean>;
};

export const PropertyAsCheckbox: React.FC<tPropertyAsCheckboxProps> = ({ property }) => (
  <CheckBox checked={property.value} />
);
