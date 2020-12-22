import React from 'react';
import { Property } from '../../entities/Property';
import { iSmartThing } from '../../entities/types';
import { EditTextProperty } from './propertiesEdit/EditTextProperty';
import { PropertyEditContainer } from './propertiesEdit/PropertyEditContainer';

type tThingCreationFormProps = {
  thing: iSmartThing;
};

export const ThingCreationForm: React.FC<tThingCreationFormProps> = ({ thing }) => (
  <>
    {thing.getProperties().map((p) => (
      <React.Fragment key={p.id}>
        {!p.config.hidden ? (
          <PropertyEditContainer property={p} />
        ) : (
          <EditTextProperty property={p as Property<string>} />
        )}
      </React.Fragment>
    ))}
  </>
);
