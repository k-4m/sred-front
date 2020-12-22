import {
  Action, Computed, Thunk, ThunkOn,
} from 'easy-peasy';
import { Property } from '../entities/Property';
import { SmartThing } from '../entities/SmartThing';
import { Trigger } from '../entities/Trigger';
import { eSmartThing } from '../entities/types';

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
  thing: SmartThing | null;

  close: Action<tCreationForm>;
  open: Action<tCreationForm>;
  changeType: Action<tCreationForm, eSmartThing>;
  save: Thunk<tCreationForm, void, void, tAppModel>;
  updateProperty: Action<tCreationForm, { property: Property; value: unknown }>;
  addTrigger: Action<tCreationForm, { property: Property }>;
  removeTrigger: Action<tCreationForm, { property: Property; trigger: Trigger }>;
  updateTrigger: Action<tCreationForm, { trigger: Trigger; value?: any; cause?: eEmotion; property: Property }>;
};

export type tRoomModel = {
  things: SmartThing[];

  add: Action<tRoomModel, SmartThing>;
  remove: Action<tRoomModel, SmartThing>;
  triggerThingUpdates: Action<tRoomModel, { thing: SmartThing; emotion: eEmotion }>;
};

export type tAppModel = {
  emotion: tEmotionModel;
  creationForm: tCreationForm;
  room: tRoomModel;
};
