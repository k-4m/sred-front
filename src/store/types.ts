import {
  Action, Computed, Thunk, ThunkOn,
} from 'easy-peasy';
import { Property } from '../entities/Property';
import { Trigger } from '../entities/Trigger';
import { eSmartThing, iSmartThing } from '../entities/types';

export enum eEmotion {
  SAD = 'sad',
  HAPPY = 'happy',
  DISGUST = 'disgust',
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
  onEmotionsUpdate: ThunkOn<tEmotionModel, void, tAppModel>;
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
  addTrigger: Action<tCreationForm, { property: Property }>;
  removeTrigger: Action<tCreationForm, { property: Property; trigger: Trigger }>;
  updateTrigger: Action<tCreationForm, { trigger: Trigger; value?: any; cause?: eEmotion }>;
};

export type tRoomModel = {
  things: iSmartThing[];

  add: Action<tRoomModel, iSmartThing>;
  remove: Action<tRoomModel, iSmartThing>;
  triggerThingUpdates: Action<tRoomModel, { thing: iSmartThing; emotion: eEmotion }>;
};

export type tAppModel = {
  emotion: tEmotionModel;
  creationForm: tCreationForm;
  room: tRoomModel;
};
