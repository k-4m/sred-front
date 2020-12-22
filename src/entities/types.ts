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
  LAMP = 'лампочка',
  TEAPOT = 'чайник',
  AIR_CONDITIONING = 'кондиціонер',
  SOCKET = 'розетка',
  GARLAND = 'гірлянда',
}

export type tSmartThingConfig = {
  icon: string;
  name: string;
  device: string;
};
