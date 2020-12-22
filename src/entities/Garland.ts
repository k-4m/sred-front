import GarlandImgOff from '../components/Widget/images/garland/garland-off.svg';
import GarlandImgOn from '../components/Widget/images/garland/garland-on.svg';
import { Property } from './Property';
import { SmartThing } from './SmartThing';
import { ePropertiesView } from './types';

type tGarlandState = {
  on: boolean;
  color: string;
};
export class Garland extends SmartThing {
  state: tGarlandState = {
    on: true,
    color: '#883357',
  };

  constructor() {
    super({
      device: 'Гірляндочка з Китаю',
      icon: GarlandImgOff,
      name: 'Освєщеніє настроєнія',
    });

    this.properties = this.properties.concat([
      new Property('on', {
        label: 'Стан',
        type: ePropertiesView.CHECKBOX,
        getValue: () => this.state.on,
        update: this.update.bind(this),
      }),
      new Property('color', {
        label: 'Палітра',
        type: ePropertiesView.COLOR,
        getValue: () => this.state.color,
        update: this.update.bind(this),
      }),
    ]);
  }

  update<T>(value: T, property: Property) {
    this.state[property.id] = value;
  }

  getIcon() {
    return this.state.on ? GarlandImgOn : GarlandImgOff;
  }
}
