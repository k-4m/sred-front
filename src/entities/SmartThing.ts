import { Property } from './Property';
import { ePropertiesView, iSmartThing, tSmartThingConfig } from './types';

export class SmartThing implements iSmartThing {
  config: tSmartThingConfig;

  readonly id: number;

  properties: Property[] = [
    new Property('name', {
      getValue: () => this.config.name,
      label: 'Назва',
      type: ePropertiesView.TEXT,
      update: this.updateName.bind(this),
      hidden: true,
    }),
  ];

  constructor(config: tSmartThingConfig) {
    this.config = config;
    this.id = Date.now();
  }

  getName() {
    return this.config.name;
  }

  getIcon() {
    return this.config.icon;
  }

  getDevice() {
    return this.config.device;
  }

  getProperties() {
    return this.properties;
  }

  updateName(value: string) {
    this.config.name = value;
  }

  getId() {
    return this.id;
  }
}
