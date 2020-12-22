import LampImgOff from '../components/Widget/images/lamp/light-off.png';
import LampImgOn from '../components/Widget/images/lamp/light-on.png';
import { Property } from './Property';
import { SmartThing } from './SmartThing';
import { ePropertiesView } from './types';

export enum eLampAction {
  TURN_ON = 'turn-on',
  TURN_OFF = 'turn-off',
}

type tLampState = {
  on: boolean;
  color: string;
  brightness: number;
};
export class Lamp extends SmartThing {
  state: tLampState = {
    on: true,
    color: '#FFEEA3',
    brightness: 75,
  };

  constructor() {
    super({
      device: 'Розумна лампа від Xiomi',
      icon: LampImgOff,
      name: 'Лампочка на кухнє',
    });

    this.properties = this.properties.concat([
      new Property('on', {
        label: 'Стан',
        type: ePropertiesView.CHECKBOX,
        getValue: () => this.state.on,
        update: this.update.bind(this),
      }),
      new Property('color', {
        label: 'Колір',
        type: ePropertiesView.COLOR,
        getValue: () => this.state.color,
        update: this.update.bind(this),
      }),
      new Property('brightness', {
        label: 'Яскравість',
        type: ePropertiesView.SLIDER,
        getValue: () => this.state.brightness,
        update: this.update.bind(this),
      }),
    ]);
  }

  update<T>(value: T, property: Property) {
    this.state[property.id] = value;
  }

  getIcon() {
    return this.state.on ? LampImgOn : LampImgOff;
  }
}
