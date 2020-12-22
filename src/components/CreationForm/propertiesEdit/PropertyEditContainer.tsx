import { Box, Text } from 'grommet';
import React from 'react';
import { Property } from '../../../entities/Property';
import { useStoreActions } from '../../../store';
import { AddPropertyBtn } from './AddPropertyBtn';
import { EditRow } from './EditRow';

type tPropertyEditContainerProps = {
  property: Property;
};

export const PropertyEditContainer: React.FC<tPropertyEditContainerProps> = ({ property }) => {
  const { updateTrigger } = useStoreActions((store) => store.creationForm);
  // eslint-disable-next-line prefer-destructuring
  const View = property.view;

  return (
    <Box flex={false} direction='row' gap='small' justify='start' pad='small'>
      <Text size='medium'>{property.label}</Text>
      <Box direction='column' gap='small'>
        {property.triggers
          .sort((a, b) => a?.cause.localeCompare(b.cause) ?? -1)
          .map((trigger) => (
            <EditRow trigger={trigger} property={property} key={trigger.cause}>
              <View
                value={trigger.value}
                editable
                onChange={(value) =>
                  updateTrigger({
                    trigger,
                    property,
                    cause: trigger.cause,
                    value,
                  })
                }
              />
            </EditRow>
          ))}
        <AddPropertyBtn property={property} />
      </Box>
    </Box>
  );
};
