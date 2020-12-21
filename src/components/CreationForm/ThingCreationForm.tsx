import React from 'react';
import { iSmartThing } from '../../entities/types';
import { PropertyEditContainer } from './propertiesEdit/PropertyEditContainer';

type tThingCreationFormProps = {
  thing: iSmartThing;
};

export const ThingCreationForm: React.FC<tThingCreationFormProps> = ({ thing }) => (
  <>
    {thing.getProperties().map((p) => (
      <PropertyEditContainer property={p} key={p.id}>
        <p.edit property={p} />
      </PropertyEditContainer>
    ))}
  </>
);
