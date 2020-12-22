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
