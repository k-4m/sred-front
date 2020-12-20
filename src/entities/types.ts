import { Property } from './Property';

export interface iSmartThing<T = unknown> {
  getProperties(): Property<T>[];
  getIcon(): string;
  getName(): string;
  getDevice(): string;
}

export enum eFieldType {
  STRING,
  NUMBER,
  BOOLEAN,
}

export enum ePropertiesView {
  CHECKBOX,
  SLIDER,
  TEXT,
  COLOR,
}

export enum eSmartThing {
  LAMP = 'lamp',
}

export type tSmartThingConfig = {
  icon: string;
  name: string;
  device: string;
};
