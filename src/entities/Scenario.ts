import { eEmotion } from '../store/types';

export class Scenario {
  trigger: eEmotion;

  command: string;

  constructor(trigger: eEmotion, command: string) {
    this.trigger = trigger;
    this.command = command;
  }

  excite(trigger: eEmotion) {
    if (trigger === this.trigger) {
      return this.command;
    }

    return null;
  }
}
