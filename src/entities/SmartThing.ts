import { Scenario } from './Scenario';
import { eFieldType, iSmartThing } from './types';

export type tSmartThingConfig<Command> = {
  name: string;
  icon: string;
  allowedCommands: Command[];
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
      typeName: this.config.name,
      icon: this.config.icon,
    };
  }
}
