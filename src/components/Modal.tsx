import {
  Button, Card, CardBody, CardFooter, CardHeader, Grommet, Heading, Text,
} from 'grommet';
import { Close } from 'grommet-icons';
import React from 'react';
import ReactModal from 'react-modal';
import { theme } from '../theme';

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
        overflow: 'scroll',
      },
    }}
  >
    <Grommet theme={theme}>
      <Card background='white' pad='medium' width={'large'} elevation={'large'} round>
        <CardHeader pad='small' fill={'horizontal'} direction='row' justify='between' flex={false}>
          <Heading size='xsmall' margin='none' level={3}>
            <Text>{title}</Text>
          </Heading>
          <Button icon={<Close color='control' />} onClick={close} />
        </CardHeader>
        <CardBody pad='medium' overflow='scroll' height={{ max: 'large' }} flex={false}>
          {children}
        </CardBody>
        <CardFooter pad='medium' align='end' fill flex={false}>
          <Button type='submit' label='Зберегти' onClick={onSave} primary disabled={disableSave} />
        </CardFooter>
      </Card>
    </Grommet>
  </ReactModal>
);
