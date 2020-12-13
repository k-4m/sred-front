import { CheckBox } from 'grommet';
import React from 'react';
import { tDeviceProperty } from '../../../entities/types';

type tPropertyAsCheckboxProps = {
  property: tDeviceProperty;
};

export const PropertyAsCheckbox: React.FC<tPropertyAsCheckboxProps> = ({ property }) => (
  <CheckBox checked={property.value as boolean} />
);
