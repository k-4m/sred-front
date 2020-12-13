import { Box } from 'grommet';
import React from 'react';
import { ePropertiesView, tDeviceProperty, tWidgetData } from '../../entities/types';
import { PropertyAsCheckbox } from './propertiesViews/PropertyAsCheckbox';
import { PropertyAsColor } from './propertiesViews/PropertyAsColor';
import { PropertyAsSlider } from './propertiesViews/PropertyAsSlider';
import { PropertyAsText } from './propertiesViews/PropertyAsText';
import { PropertyContainer } from './propertiesViews/PropertyContainer';
import { SSIdentifier } from './SSIdentifier';

type tWidgetProps = {
  data: tWidgetData;
};

const getPropertyView = (p: tDeviceProperty) => {
  const View = {
    [ePropertiesView.CHECKBOX]: PropertyAsCheckbox,
    [ePropertiesView.COLOR]: PropertyAsColor,
    [ePropertiesView.SLIDER]: PropertyAsSlider,
  }[p.displayAs] || PropertyAsText;

  return <View property={p} />;
};

export const SSWidget: React.FC<tWidgetProps> = ({ data }) => (
  <Box pad='medium' background='white' elevation='large' round fill>
    <Box gap='xsmall'>
      <SSIdentifier name={data.name} device={data.device} image={data.icon} />
    </Box>
    <Box direction='row' justify='start' gap='small' wrap>
      {data.properties.map((p) => (
        <PropertyContainer label={p.name} key={p.name}>
          {getPropertyView(p)}
        </PropertyContainer>
      ))}
    </Box>
  </Box>
);
