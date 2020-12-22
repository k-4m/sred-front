import { Box, Button, Select } from 'grommet';
import { Close as CloseIcon } from 'grommet-icons';
import React from 'react';
import { Property } from '../../../entities/Property';
import { Trigger } from '../../../entities/Trigger';
import { useStoreActions } from '../../../store';

type tEditRowProps = {
  trigger: Trigger;
  property: Property;
};

export const EditRow: React.FC<tEditRowProps> = ({ children, trigger, property }) => {
  const { updateTrigger, removeTrigger } = useStoreActions((store) => store.creationForm);

  return (
    <Box direction='row' align='start' width='medium' gap='small'>
      {children}
      <Select
        options={[trigger.cause, ...property.unusedTriggers]}
        value={trigger.cause}
        onChange={({ value: cause }) =>
          updateTrigger({
            trigger,
            value: trigger.value,
            cause,
            property,
          })
        }
        placeholder='Emotion'
      />
      <Button onClick={() => removeTrigger({ property, trigger })} icon={<CloseIcon color='status-critical' />} />
    </Box>
  );
};
