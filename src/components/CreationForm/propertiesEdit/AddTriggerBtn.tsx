import { Button } from 'grommet';
import { Add } from 'grommet-icons';
import React from 'react';
import { Property } from '../../../entities/Property';
import { useStoreActions } from '../../../store';

type tAddTriggerBtnProps = {
  property: Property;
};

export const AddTriggerBtn: React.FC<tAddTriggerBtnProps> = ({ property }) => {
  const { addTrigger } = useStoreActions((store) => store.creationForm);

  return property.unusedTriggers.length > 0 ? (
    <Button color='neutral-1' primary onClick={() => addTrigger({ property })} icon={<Add />} label='Add' />
  ) : null;
};
