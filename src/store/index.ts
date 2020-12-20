import { createStore, createTypedHooks } from 'easy-peasy';
import { AppModel } from './model';
import { tAppModel } from './types';

export const getStore = () => {
  const store = createStore<tAppModel>(AppModel, { injections: {}, disableImmer: true });

  return store;
};

export const {
  useStoreActions, useStoreState, useStoreDispatch, useStore,
} = createTypedHooks<tAppModel>();
