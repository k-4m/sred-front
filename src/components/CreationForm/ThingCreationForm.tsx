import { Box, Text } from 'grommet';
import React from 'react';
import { Property } from '../../entities/Property';
import { SmartThing } from '../../entities/SmartThing';
import { SSImage } from '../Widget/SSImage';
import { EditTextProperty } from './propertiesEdit/EditTextProperty';
import { PropertyEditContainer } from './propertiesEdit/PropertyEditContainer';

type tThingCreationFormProps = {
  thing: SmartThing;
};

export const ThingCreationForm: React.FC<tThingCreationFormProps> = ({ thing }) => (
  <Box flex={false}>
    <Box gap='small' align='center' direction='row' pad='small' fill>
      <SSImage image={thing.getIcon()} />
      <Box fill>
        <Text size='small' weight='bold'>
          <EditTextProperty property={thing.nameProperty} />
        </Text>
        <Text size='small'>{thing.getDevice()}</Text>
      </Box>
    </Box>
    {thing.getProperties().map((p) => (
      <PropertyEditContainer property={p as Property<string>} key={p.id} />
    ))}
  </Box>
);
