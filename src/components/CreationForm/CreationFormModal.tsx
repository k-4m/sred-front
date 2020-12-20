import React from 'react';
import { useStoreActions, useStoreState } from '../../store';
import { Modal } from '../Modal';
import { CreationForm } from './index';

type tCreationFormModalProps = {
  // pass
};

export const CreationFormModal: React.FC<tCreationFormModalProps> = () => {
  const { isOpen, thing } = useStoreState((store) => store.creationForm);
  const { close, save } = useStoreActions((store) => store.creationForm);

  return (
    <Modal
      isOpen={isOpen}
      close={close as () => void}
      title='Створити нову розумну річ'
      onSave={save as () => void}
      disableSave={!thing}
    >
      <CreationForm />
    </Modal>
  );
};
