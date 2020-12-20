import { Action, Computed, Thunk } from 'easy-peasy';
import { eSmartThing, iSmartThing } from '../entities/types';

export enum eEmotion {
  SAD = 'sad',
  HAPPY = 'happy',
  DISGUSTING = 'disgusting',
  FEAR = 'fear',
  NEUTRAL = 'neutral',
  SURPRISE = 'surprise',
  ANGRY = 'angry',
}

export type tEmotionModel = {
  image: string;
  dominant: Computed<tEmotionModel, eEmotion>;
  current: Record<eEmotion, number>;
  update: Action<tEmotionModel, Pick<tEmotionModel, 'current' | 'image'>>;
};

export type tCreationForm = {
  isOpen: boolean;
  type: eSmartThing | null;
  thing: iSmartThing | null;

  close: Action<tCreationForm>;
  open: Action<tCreationForm>;
  changeType: Action<tCreationForm, eSmartThing>;
  save: Thunk<tCreationForm, void, void, tAppModel>;
  updateProperty: Action<tCreationForm, { id: string; value: unknown }>;
};

export type tRoomModel = {
  things: iSmartThing[];

  add: Action<tRoomModel, iSmartThing>;
  remove: Action<tRoomModel, iSmartThing>;
};

export type tAppModel = {
  emotion: tEmotionModel;
  creationForm: tCreationForm;
  room: tRoomModel;
};
