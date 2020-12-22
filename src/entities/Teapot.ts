import TeapotImgOff from '../components/Widget/images/teapot/teapot-off.svg';
import TeapotImgOn from '../components/Widget/images/teapot/teapot-on.svg';
import { Property } from './Property';
import { SmartThing } from './SmartThing';
import { ePropertiesView } from './types';

type tTeapotState = {
  on: boolean;
};
export class Teapot extends SmartThing {
  state: tTeapotState = {
    on: false,
  };

  constructor() {
    super({
      device: 'Розумний чайничок від Tefal',
      icon: TeapotImgOff,
      name: 'Чайничок',
    });

    this.properties = this.properties.concat([
      new Property('on', {
        label: 'Ввімкнено?',
        type: ePropertiesView.CHECKBOX,
        getValue: () => this.state.on,
        update: this.update.bind(this),
      }),
    ]);
  }

  update<T>(value: T, property: Property) {
    this.state[property.id] = value;
  }

  getIcon() {
    return this.state.on ? TeapotImgOn : TeapotImgOff;
  }
}
