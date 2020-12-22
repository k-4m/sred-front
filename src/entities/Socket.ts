import SocketImgOff from '../components/Widget/images/socket/socket-off.svg';
import SocketImgOn from '../components/Widget/images/socket/socket-on.svg';
import { Property } from './Property';
import { SmartThing } from './SmartThing';
import { ePropertiesView } from './types';

type tSocketState = {
  on: boolean;
};
export class Socket extends SmartThing {
  state: tSocketState = {
    on: false,
  };

  constructor() {
    super({
      device: 'Розумний розетка',
      icon: SocketImgOff,
      name: 'Розєтка',
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
    return this.state.on ? SocketImgOn : SocketImgOff;
  }
}
