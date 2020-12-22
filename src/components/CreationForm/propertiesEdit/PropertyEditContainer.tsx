import { Box, Text } from 'grommet';
import React from 'react';
import { Property } from '../../../entities/Property';
import { useStoreActions } from '../../../store';
import { AddTriggerBtn } from './AddTriggerBtn';
import { EditTriggerRow } from './EditTriggerRow';

type tPropertyEditContainerProps = {
  property: Property;
};

export const PropertyEditContainer: React.FC<tPropertyEditContainerProps> = ({ property }) => {
  const { updateTrigger } = useStoreActions((store) => store.creationForm);
  // eslint-disable-next-line prefer-destructuring
  const View = property.view;

  return (
    <Box flex={false} direction='row' gap='small' justify='start' pad='medium'>
      <Box width='small'>
        <Text size='medium'>{property.label}</Text>
      </Box>
      <Box direction='column' gap='small' fill>
        {property.triggers.map((trigger) => (
          <Box margin='small' key={trigger.cause} fill>
            <EditTriggerRow trigger={trigger} property={property}>
              <Box height={'100%'} justify='center'>
                <View
                  value={trigger.value}
                  editable
                  options={property.config.options}
                  onChange={(value) =>
                    updateTrigger({
                      trigger,
                      property,
                      cause: trigger.cause,
                      value,
                    })
                  }
                />
              </Box>
            </EditTriggerRow>
          </Box>
        ))}
        <Box align='center' fill>
          <AddTriggerBtn property={property} />
        </Box>
      </Box>
    </Box>
  );
};
