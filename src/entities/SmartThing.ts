import { Property } from './Property';
import { ePropertiesView, tSmartThingConfig } from './types';

export class SmartThing {
  config: tSmartThingConfig;

  readonly id: number;

  name = new Property('name', {
    getValue: () => this.config.name,
    label: 'Назва',
    type: ePropertiesView.TEXT,
    update: this.updateName.bind(this),
    hidden: true,
  });

  properties: Property[] = [];

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

  get nameProperty() {
    return this.name;
  }
}
