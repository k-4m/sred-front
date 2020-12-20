import {
  Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Text,
} from 'grommet';
import { Close } from 'grommet-icons';
import React from 'react';
import ReactModal from 'react-modal';

type tModalProps = {
  close: () => void;
  isOpen: boolean;
  title: string;
  onSave: () => void;
  disableSave: boolean;
};
ReactModal.setAppElement('#root');

export const Modal: React.FC<tModalProps> = ({
  children, close, isOpen, title, disableSave, onSave,
}) => (
  <ReactModal
    isOpen={isOpen}
    style={{
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        background: 'none',
      },
    }}
  >
    <Card pad='medium' width={'large'} background='white' elevation={'large'} round>
      <CardHeader pad='small' fill={'horizontal'} direction='row' justify='between'>
        <Heading size='xsmall' margin='none' level={3}>
          <Text>{title}</Text>
        </Heading>
        <Button icon={<Close color='control' />} onClick={close} />
      </CardHeader>
      <CardBody pad={'large'}>{children}</CardBody>
      <CardFooter>
        <Box flex={false} as='footer' align='start'>
          <Button type='submit' label='Submit' onClick={onSave} primary disabled={disableSave} />
        </Box>
      </CardFooter>
    </Card>
  </ReactModal>
);
