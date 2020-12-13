import { Box, Text } from 'grommet';
import React from 'react';
import Lamp from './images/lamp/light-on.png';
import { SSIdentifier } from './SSIdentifier';

type tWidgetProps = {
  name: string;
  typeName: string;
};

export const SSWidget: React.FC<tWidgetProps> = ({ name, typeName, children }) => (
  <Box pad='medium' background='white' elevation='large' round fill>
    <Box gap='large'>
      <Box gap='xsmall'>
        <SSIdentifier name={name} typeName={typeName} image={Lamp} />
      </Box>
      <Box gap='medium'>
        {children}
        <Box direction='row' align='center'>
          <Text color='dark-1' size='small' margin={{ left: 'xsmall' }}>
            Lorem ipsum dolor sit amet, consectetur adipis
          </Text>
        </Box>
        <Box direction='row' align='center'>
          <Text color='dark-1' size='small' margin={{ left: 'xsmall' }}>
            Lorem ipsum dolor sit amet, consectetur
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
);
