import { Box, Button } from 'grommet';
import { Trash } from 'grommet-icons';
import React from 'react';
import { SmartThing } from '../../entities/SmartThing';
import { useStoreActions } from '../../store';
import { PropertyContainer } from '../propertiesViews/PropertyContainer';
import { SSIdentifier } from './SSIdentifier';

type tWidgetProps = {
  thing: SmartThing;
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
        {thing
          .getProperties()
          .filter((p) => !p.config.hidden)
          .map((p) => (
            <PropertyContainer property={p} key={p.id}>
              <p.view value={p.value} options={p.config.options} />
            </PropertyContainer>
          ))}
      </Box>
      <Box overflow='scroll'>
        {thing
          .getProperties()
          .filter((p) => p.triggers.length > 0)
          .map((p) => (
            <Box key={p.id}>
              {p.label}
              <Box>
                {p.triggers.map((t) => (
                  <div key={t.cause}>
                    if {t.condition}
                    {t.cause} then {JSON.stringify(t.value)}
                  </div>
                ))}
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};
