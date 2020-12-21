import {
  Box, Button, CheckBox, Select,
} from 'grommet';
import React from 'react';
import { emotions } from '../../../entities';
import { Property } from '../../../entities/Property';
import { useStoreActions } from '../../../store';

type tEditCheckboxPropertyProps = {
  property: Property<boolean>;
};

export const EditCheckboxProperty: React.FC<tEditCheckboxPropertyProps> = ({ property }) => {
  const { addTrigger, updateTrigger, removeTrigger } = useStoreActions((store) => store.creationForm);
  const usedCauses = property.triggers.map((t) => t.cause);
  const unusedEmotions = emotions.filter((c) => usedCauses.indexOf(c) < 0);

  return (
    <>
      <Box direction='column' wrap>
        {property.triggers.map((trigger) => (
          <Box key={trigger.condition} direction='row'>
            <CheckBox
              checked={trigger.value}
              onChange={(event) => updateTrigger({ trigger, value: event.target.checked })}
            />
            <Select
              options={unusedEmotions}
              value={trigger.cause}
              onChange={({ value }) => updateTrigger({ trigger, cause: value, value: trigger.value })}
              placeholder='Emotion'
            />
            <Button onClick={() => removeTrigger({ trigger, property })}>X</Button>
          </Box>
        ))}
      </Box>
      {unusedEmotions.length > 0 && <Button onClick={() => addTrigger({ property })}>add</Button>}
    </>
  );
};
