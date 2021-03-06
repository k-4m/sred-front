import { Box, Card, Image } from 'grommet';
import React from 'react';
import { useStoreState } from '../store';
import { Spinner } from './Spinner';

type tUserPhotoProps = {
  // pass
};

export const UserPhoto: React.FC<tUserPhotoProps> = () => {
  const image = useStoreState((store) => store.emotion.image);

  return (
    <Card elevation='large' width={'medium'} height={'medium'} pad={!image ? 'xlarge' : undefined}>
      <Box fill justify='center' align='center'>
        {image ? <Image fit='cover' src={`data:image/jpeg;base64,${image}`} /> : <Spinner />}
      </Box>
    </Card>
  );
};
