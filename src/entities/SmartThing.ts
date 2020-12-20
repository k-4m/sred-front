import { Property } from './Property';
import { iSmartThing, tSmartThingConfig } from './types';

export class SmartThing implements iSmartThing {
  config: tSmartThingConfig;

  properties: Record<string, Property> = {};

  constructor(config: tSmartThingConfig) {
    this.config = config;
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
    return Object.keys(this.properties)
      .sort((a, b) => a.localeCompare(b))
      .map((p) => this.properties[p]);
  }
}
