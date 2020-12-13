export interface iSmartThing {
  getFields(): tFieldConfig[];
  getViewData(): tWidgetData;
}

export type tWidgetData = {
  typeName: string;
  icon: string;
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
