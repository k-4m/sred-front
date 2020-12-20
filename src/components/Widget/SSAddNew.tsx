import { Box } from 'grommet';
import { Add } from 'grommet-icons';
import React from 'react';
import { useStoreActions } from '../../store';

type tSSAddNewProps = {
  // pass
};

export const SSAddNew: React.FC<tSSAddNewProps> = () => {
  const open = useStoreActions((store) => store.creationForm.open) as () => void;

  return (
    <Box pad='medium' background='white' elevation='large' round align='center' fill onClick={open}>
      <Box pad='large' margin='auto'>
        <Add size='large' />
      </Box>
    </Box>
  );
};
