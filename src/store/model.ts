import { action, computed, thunk } from 'easy-peasy';
import { Lamp } from '../entities/Lamp';
import { eSmartThing } from '../entities/types';
import { eEmotion, tAppModel } from './types';

const maxEmotion = (currentEmotions: tAppModel['emotion']['current']) =>
  ((Object.keys(currentEmotions) as unknown) as eEmotion[]).reduce(
    (a: eEmotion, b: eEmotion) => (currentEmotions[a] > currentEmotions[b] ? a : b),
    eEmotion.NEUTRAL,
  );

export const AppModel: tAppModel = {
  creationForm: {
    isOpen: false,
    type: null,
    thing: null,

    close: action((state) => ({
      ...state,
      type: null,
      thing: null,
      isOpen: false,
    })),
    open: action((state) => ({
      ...state,
      isOpen: true,
    })),
    changeType: action((state, type) => ({
      ...state,
      type,
      thing: type
        ? new {
          [eSmartThing.LAMP]: Lamp,
        }[type]()
        : null,
    })),

    save: thunk((actions, _, { getState, getStoreActions }) => {
      getStoreActions().room.add(getState().thing!);
      actions.close();
    }),

    updateProperty: action((state, { id, value }) => {
      state.thing
        ?.getProperties()
        .find((p) => p.id === id)
        ?.update(value);

      return { ...state };
    }),
  },
  emotion: {
    image: '',
    current: {
      [eEmotion.ANGRY]: 0,
      [eEmotion.NEUTRAL]: 1,
      [eEmotion.FEAR]: 0,
      [eEmotion.HAPPY]: 0,
      [eEmotion.SAD]: 0,
      [eEmotion.SURPRISE]: 0,
      [eEmotion.DISGUSTING]: 0,
    },
    dominant: computed((state) => maxEmotion(state.current)),

    update: action((state, data) => ({
      ...state,
      ...data,
    })),
  },

  room: {
    things: [new Lamp()],
    add: action((state, thing) => ({
      ...state,
      things: [thing].concat(state.things),
    })),
    remove: action((state, thing) => ({
      ...state,
      things: state.things.filter((v) => v !== thing),
    })),
  },
};
