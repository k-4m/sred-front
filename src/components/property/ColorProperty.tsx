import { Box, Drop } from 'grommet';
import React from 'react';
import { SliderPicker } from 'react-color';

type tColorPropertyProps = {
  editable?: boolean;
  value: string;
  onChange?: (color: string) => void;
};

export const ColorProperty: React.FC<tColorPropertyProps> = ({ value, editable, onChange }) => {
  const [editMode, setEditMode] = React.useState(false);
  const boxRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Box
        width='xxsmall'
        height='xxsmall'
        ref={boxRef}
        background={value}
        pad='small'
        onClick={() => editable && setEditMode(true)}
        border={'all'}
        round
      />
      {boxRef.current && editMode && (
        <Drop target={boxRef.current} responsive onClickOutside={() => setEditMode(false)}>
          <Box width='medium' pad='small'>
            <SliderPicker
              color={value}
              onChangeComplete={({ hex }) => {
                if (onChange) {
                  onChange(hex);
                }
              }}
            />
          </Box>
        </Drop>
      )}
    </>
  );
};
