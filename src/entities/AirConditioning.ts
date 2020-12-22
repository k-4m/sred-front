import AirConditioningImgOff from '../components/Widget/images/airConditioning/airConditioning-off.svg';
import AirConditioningImgOn from '../components/Widget/images/airConditioning/airConditioning-on.svg';
import { Property } from './Property';
import { SmartThing } from './SmartThing';
import { ePropertiesView } from './types';

type tAirConditioningState = {
  on: boolean;
  temp: number;
};
export class AirConditioning extends SmartThing {
  state: tAirConditioningState = {
    on: false,
    temp: 15,
  };

  constructor() {
    super({
      device: 'Розумний кондиціонер від Samsung',
      icon: AirConditioningImgOff,
      name: 'Кондьор',
    });

    this.properties = this.properties.concat([
      new Property('on', {
        label: 'Ввімкнено?',
        type: ePropertiesView.CHECKBOX,
        getValue: () => this.state.on,
        update: this.update.bind(this),
      }),
      new Property('temp', {
        label: 'Температура',
        options: {
          symbol: '°',
          min: 16,
          max: 30,
        },
        type: ePropertiesView.SLIDER,
        getValue: () => this.state.temp,
        update: this.update.bind(this),
      }),
    ]);
  }

  update<T>(value: T, property: Property) {
    this.state[property.id] = value;
  }

  getIcon() {
    return this.state.on ? AirConditioningImgOn : AirConditioningImgOff;
  }
}
