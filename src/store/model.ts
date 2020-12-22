/* eslint-disable no-param-reassign */
import {
  action, computed, thunk, thunkOn,
} from 'easy-peasy';
import { Lamp } from '../entities/Lamp';
import { eTriggerCondition, Trigger } from '../entities/Trigger';
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
      thing: type ? new { [eSmartThing.LAMP]: Lamp }[type]() : null,
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

    addTrigger: action((state, { property }) => {
      property.addTrigger(new Trigger(eTriggerCondition.EQUAL, property.unusedTriggers[0], property.value));

      return { ...state };
    }),
    removeTrigger: action((state, { trigger, property }) => {
      property.removeTrigger(trigger);

      return {
        ...state,
      };
    }),
    updateTrigger: action((state, {
      property, trigger, cause, value,
    }) => {
      property.updateTrigger(trigger, cause, value);

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
      [eEmotion.DISGUST]: 0,
    },
    dominant: computed((state) => maxEmotion(state.current)),

    update: action((state, data) => ({
      ...state,
      ...data,
    })),

    onEmotionsUpdate: thunkOn(
      (state) => state.update,
      (_, __, { getStoreState, getStoreActions }) => {
        const state = getStoreState();
        // eslint-disable-next-line prefer-destructuring
        const dominant = state.emotion.dominant;
        const updateThing = getStoreActions().room.triggerThingUpdates;
        const { things } = state.room;

        things.forEach((thing) => updateThing({ thing, emotion: dominant }));
      },
    ),
  },

  room: {
    things: [
      (() => {
        const lamp = new Lamp();

        lamp.properties
          .find((p) => p.id === 'on')
          ?.addTrigger(new Trigger(eTriggerCondition.EQUAL, eEmotion.DISGUST, false));

        return lamp;
      })(),
    ],
    add: action((state, thing) => ({
      ...state,
      things: [thing].concat(state.things),
    })),
    remove: action((state, thing) => ({
      ...state,
      things: state.things.filter((v) => v !== thing),
    })),

    triggerThingUpdates: action((state, { thing, emotion }) => {
      thing.getProperties().forEach((p) => {
        p.trigger(emotion);
      });

      return {
        ...state,
      };
    }),
  },
};
