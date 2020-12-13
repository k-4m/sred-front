import { SmartThing } from './SmartThing';

export enum eLampAction {
  TURN_ON = 'turn-on',
  TURN_OFF = 'turn-off',
}

export type tLampCommands = { id: eLampAction.TURN_ON | eLampAction.TURN_OFF };

export class Lamp extends SmartThing<tLampCommands> {}
