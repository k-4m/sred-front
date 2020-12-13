export interface iSmartThing {
  getFields(): tFieldConfig[];
  getViewData(): tWidgetData;
}

export type tWidgetData = {
  name: string;
  device: string;
  icon: string;
  properties: tDeviceProperty[];
};

export type tDeviceProperty = {
  name: string;
  value: unknown;
  displayAs: ePropertiesView;
};

export type tFieldConfig = {
  name: string;
  displayName: string;
  type: eFieldType;
};

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
