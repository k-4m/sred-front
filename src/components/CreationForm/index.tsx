import { Box } from 'grommet';
import React from 'react';
import { useStoreState } from '../../store';
import { ChooseThingType } from './ChooseThingType';
import { ThingCreationForm } from './ThingCreationForm';

type tCreationFormProps = {
  // pass
};

export const CreationForm: React.FC<tCreationFormProps> = () => {
  const thing = useStoreState((store) => store.creationForm.thing);

  return (
    <Box>
      <ChooseThingType />
      {thing && <ThingCreationForm thing={thing} />}
    </Box>
  );
};
