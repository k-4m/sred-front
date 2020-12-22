import { CheckBox } from 'grommet';
import React from 'react';

type tCheckboxPropertyProps = {
  editable?: boolean;
  value: boolean;
  onChange?: (v: boolean) => void;
};

export const CheckboxProperty: React.FC<tCheckboxPropertyProps> = ({ onChange, value, editable }) => (
  <CheckBox
    toggle
    checked={value}
    onChange={(event) => onChange && onChange(event.target.checked)}
    readOnly={!editable}
  />
);
