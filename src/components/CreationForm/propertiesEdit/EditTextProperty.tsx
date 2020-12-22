import { TextInput } from 'grommet';
import React from 'react';
import { Property } from '../../../entities/Property';
import { useStoreActions } from '../../../store';

type tEditTextPropertyProps = {
  property: Property<string>;
};

export const EditTextProperty: React.FC<tEditTextPropertyProps> = ({ property }) => {
  const updateProperty = useStoreActions((store) => store.creationForm.updateProperty);

  return (
    <TextInput
      placeholder='type here'
      value={property.value}
      onChange={(event) => updateProperty({ property, value: event.target.value })}
    />
  );
};
