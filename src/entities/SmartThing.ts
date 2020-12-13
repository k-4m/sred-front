import { Scenario } from './Scenario';
import { eFieldType, iSmartThing, tDeviceProperty } from './types';

export type tSmartThingConfig<Command> = {
  device: string;
  allowedCommands: Command[];
  icon: string;
  name: string;
};

export type tCommand = {
  id: string;
};

export class SmartThing<Command extends tCommand> implements iSmartThing {
  scenarios: Scenario<Command>[] = [];

  config: tSmartThingConfig<Command>;

  constructor(config: tSmartThingConfig<Command>) {
    this.config = config;
  }

  addScenario(scenario: Scenario<Command>) {
    this.scenarios.push(scenario);
  }

  removeScenario(scenario: Scenario<Command>) {
    this.scenarios.splice(this.scenarios.indexOf(scenario), 1);
  }

  getFields() {
    return [
      {
        type: eFieldType.STRING,
        name: 'name',
        displayName: 'Назва',
      },
    ];
  }

  getViewData() {
    return {
      name: this.config.name,
      device: this.config.device,
      icon: this.config.icon,
      properties: [] as tDeviceProperty[],
    };
  }
}
