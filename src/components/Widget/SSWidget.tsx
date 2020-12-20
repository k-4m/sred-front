import { Box, Button } from 'grommet';
import { Trash } from 'grommet-icons';
import React from 'react';
import { iSmartThing } from '../../entities/types';
import { useStoreActions } from '../../store';
import { PropertyContainer } from '../propertiesViews/PropertyContainer';
import { SSIdentifier } from './SSIdentifier';

type tWidgetProps = {
  thing: iSmartThing;
};

export const SSWidget: React.FC<tWidgetProps> = ({ thing }) => {
  const removeThing = useStoreActions((store) => store.room.remove);

  return (
    <Box pad='medium' background='white' elevation='large' round fill>
      <Box gap='xsmall' direction='row' justify='between'>
        <SSIdentifier thing={thing} />
        <Button icon={<Trash />} color='status-error' hoverIndicator='light-1' onClick={() => removeThing(thing)} />
      </Box>
      <Box direction='row' justify='start' gap='small' wrap>
        {thing.getProperties().map((p) => (
          <PropertyContainer property={p} key={p.id}>
            <p.view property={p} />
          </PropertyContainer>
        ))}
      </Box>
    </Box>
  );
};
