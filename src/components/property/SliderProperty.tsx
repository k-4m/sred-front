import {
  Box, Meter, RangeInput, Stack, Text,
} from 'grommet';
import React from 'react';

type tSliderPropertyProps = {
  value: number;
  editable?: boolean;
  onChange?: (v: number) => void;
};

export const SliderProperty: React.FC<tSliderPropertyProps> = ({ value, editable, onChange }) => (
  <Box direction='column'>
    <Stack anchor='center'>
      <Meter
        type='bar'
        round
        values={[{ value, color: 'status-warning' }]}
        size='small'
        thickness='medium'
        background='light-2'
      />
      <Box direction='row' align='center' pad={{ bottom: 'xsmall' }}>
        <Text>{value}</Text>
        <Text size='xsmall'>%</Text>
      </Box>
    </Stack>
    {editable && (
      <Box align='center' pad='xxsmall'>
        <RangeInput
          value={value}
          onChange={(event) => onChange && onChange(+event.target.value)}
          min={0}
          max={100}
          step={1}
        />
      </Box>
    )}
  </Box>
);
