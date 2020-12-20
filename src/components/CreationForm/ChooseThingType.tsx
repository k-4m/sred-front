import { FormField, Select } from 'grommet';
import React from 'react';
import { eSmartThing } from '../../entities/types';
import { useStoreActions, useStoreState } from '../../store';

type tChooseThingTypeProps = {
  // pass
};

const emotions: eSmartThing[] = [eSmartThing.LAMP];

export const ChooseThingType: React.FC<tChooseThingTypeProps> = () => {
  const type = useStoreState((store) => store.creationForm.type);
  const changeType = useStoreActions((store) => store.creationForm.changeType);

  return (
    <FormField label='Label' name='select'>
      <Select
        id='select'
        name='select'
        placeholder='Select'
        value={type || undefined}
        options={emotions}
        onChange={({ value }) => changeType(value)}
      />
    </FormField>
  );
};
