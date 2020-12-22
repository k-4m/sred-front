import { Box, Button, Select } from 'grommet';
import { Close as CloseIcon } from 'grommet-icons';
import React from 'react';
import { EMOTION_LABEL } from '../../../constants';
import { Property } from '../../../entities/Property';
import { Trigger } from '../../../entities/Trigger';
import { useStoreActions } from '../../../store';

type tEditTriggerRowProps = {
  trigger: Trigger;
  property: Property;
};

export const EditTriggerRow: React.FC<tEditTriggerRowProps> = ({ children, trigger, property }) => {
  const { updateTrigger, removeTrigger } = useStoreActions((store) => store.creationForm);

  return (
    <Box direction='row' align='start' width='medium' gap='small'>
      {children}
      <Box direction='row' align='center' gap='small'>
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
          labelKey={(option) => EMOTION_LABEL[option].split(' ')[0]}
        />
        <Button
          onClick={() => removeTrigger({ property, trigger })}
          icon={<CloseIcon />}
          color='status-critical'
          primary
        />
      </Box>
    </Box>
  );
};
