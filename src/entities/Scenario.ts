import { eEmotion } from '../store/types';
import { tCommand } from './SmartThing';

export class Scenario<C extends tCommand> {
  trigger: eEmotion;

  command: C;

  constructor(trigger: eEmotion, command: C) {
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
