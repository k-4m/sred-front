import LampImgOff from '../components/Widget/images/lamp/light-off.png';
import LampImgOn from '../components/Widget/images/lamp/light-on.png';
import { SmartThing } from './SmartThing';
import { ePropertiesView } from './types';

export enum eLampAction {
  TURN_ON = 'turn-on',
  TURN_OFF = 'turn-off',
}

export type tLampCommands = { id: eLampAction.TURN_ON | eLampAction.TURN_OFF };

type tLampProperties = {
  on: boolean;
  color: string;
  brightness: number;
};
export class Lamp extends SmartThing<tLampCommands> {
  properties: tLampProperties = { on: false, color: '#FC6956', brightness: 30 };

  constructor() {
    super({
      allowedCommands: [],
      device: 'Розумна лампа від Xiomi',
      icon: LampImgOff,
      name: 'Лампочка на кухнє',
    });
  }

  getViewData() {
    return {
      ...super.getViewData(),
      icon: this.properties.on ? LampImgOn : LampImgOff,
      properties: [
        {
          name: 'Ввімкнена',
          value: this.properties.on,
          displayAs: ePropertiesView.CHECKBOX,
        },
        {
          name: 'Яскравість',
          value: this.properties.brightness,
          displayAs: ePropertiesView.SLIDER,
        },
        {
          name: 'Колір',
          value: this.properties.color,
          displayAs: ePropertiesView.COLOR,
        },
      ],
    };
  }
}
