import { Box, Button } from 'grommet';
import { FormAdd } from 'grommet-icons';
import React from 'react';
import { Property } from '../../../entities/Property';
import { useStoreActions } from '../../../store';

type tAddPropertyBtnProps = {
  property: Property;
};

export const AddPropertyBtn: React.FC<tAddPropertyBtnProps> = ({ property }) => {
  const { addTrigger } = useStoreActions((store) => store.creationForm);

  return property.unusedTriggers.length > 0 ? (
    <Box width='small'>
      <Button onClick={() => addTrigger({ property })} label={<FormAdd color='neutral-1' />} />
    </Box>
  ) : null;
};
