import { eEmotion } from '../store/types';

export enum eTriggerCondition {
  EQUAL = '=',
  NOT_EQUAL = '≠',
}

export class Trigger<T = any> {
  cause: eEmotion;

  value: T;

  condition: eTriggerCondition;

  constructor(condition: eTriggerCondition, cause: eEmotion, value: T) {
    this.condition = condition;
    this.cause = cause;
    this.value = value;
  }

  willTrigger(emotion: eEmotion) {
    return (this.condition === eTriggerCondition.EQUAL) === (this.cause === emotion);
  }
}
