import { Select } from 'grommet';
import React from 'react';
import { eSmartThing } from '../../entities/types';
import { useStoreActions, useStoreState } from '../../store';

type tChooseThingTypeProps = {
  // pass
};

const things = Object.values(eSmartThing as Record<string, string>);

export const ChooseThingType: React.FC<tChooseThingTypeProps> = () => {
  const type = useStoreState((store) => store.creationForm.type);
  const changeType = useStoreActions((store) => store.creationForm.changeType);

  return (
    <Select
      id='select'
      name='select'
      placeholder='Оберіть тип розумної речі'
      value={type || undefined}
      options={things}
      onChange={({ value }) => changeType(value)}
    />
  );
};
