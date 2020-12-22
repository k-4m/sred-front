import {
  Accordion, AccordionPanel, Box, Button, Table, TableCell, TableRow,
} from 'grommet';
import { Trash } from 'grommet-icons';
import React from 'react';
import { EMOTION_LABEL } from '../../constants';
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
    <Box pad='medium' background='white' elevation='large' round fill flex={false} overflow='scroll'>
      <Box gap='xsmall' direction='row' justify='between' flex={false}>
        <SSIdentifier thing={thing} />
        <Button icon={<Trash />} color='status-error' hoverIndicator='light-1' onClick={() => removeThing(thing)} />
      </Box>
      <Box direction='row' justify='start' gap='small' wrap flex={false}>
        {thing
          .getProperties()
          .filter((p) => !p.config.hidden)
          .map((p) => (
            <PropertyContainer property={p} key={p.id}>
              <p.view value={p.value} options={p.config.options} />
            </PropertyContainer>
          ))}
      </Box>
      <Accordion border={false} flex={false}>
        <AccordionPanel label='Правила'>
          <Box>
            <Table>
              {thing
                .getProperties()
                .filter((p) => p.triggers.length > 0)
                .map((p) =>
                  p.triggers.map((t) => (
                    <TableRow key={p.id + t.cause}>
                      <TableCell>{EMOTION_LABEL[t.cause].split(' ')[1]}</TableCell>
                      <TableCell>{p.label}</TableCell>
                      <TableCell>{'->'}</TableCell>
                      <TableCell>
                        <p.view value={t.value} options={p.config.options} />
                      </TableCell>
                    </TableRow>
                  )))}
            </Table>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  );
};
