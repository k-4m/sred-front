import React from 'react';
import { iSmartThing } from '../../entities/types';
import { PropertyContainer } from '../propertiesViews/PropertyContainer';

type tThingCreationFormProps = {
  thing: iSmartThing;
};

export const ThingCreationForm: React.FC<tThingCreationFormProps> = ({ thing }) => (
  <>
    {thing.getProperties().map((p) => (
      <PropertyContainer property={p} key={p.id}>
        <p.edit property={p} />
      </PropertyContainer>
    ))}
  </>
);
