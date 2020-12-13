import { Computed } from 'easy-peasy';
import { iSmartThing } from '../entities/types';

export enum eEmotion {
  SAD,
  HAPPY,
  DISGUSTING,
  FEAR,
  NEUTRAL,
  SURPRISE,
  ANGRY,
}

export type tEmotionModel = {
  dominant: Computed<tEmotionModel, eEmotion>;
  current: Record<eEmotion, number>;
};

export type tRoomModel = {
  smartThings: iSmartThing[];
};

export type tAppModel = {
  emotion: tEmotionModel;
  room: tRoomModel;
};
