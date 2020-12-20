import { PropertyAsCheckbox } from '../components/propertiesViews/PropertyAsCheckbox';
import { PropertyAsColor } from '../components/propertiesViews/PropertyAsColor';
import { PropertyAsSlider } from '../components/propertiesViews/PropertyAsSlider';
import { PropertyAsText } from '../components/propertiesViews/PropertyAsText';
import { ePropertiesView } from './types';

export type tPropertyConfig<T> = {
  label: string;
  type: ePropertiesView;
  getValue: () => T;
  update: (value: T, property: Property<T>) => void;
};

export class Property<T = any> {
  id: string;

  config: tPropertyConfig<T>;

  constructor(id: string, config: tPropertyConfig<T>) {
    this.config = config;
    this.id = id;
  }

  get value(): T {
    return this.config.getValue();
  }

  get label() {
    return this.config.label;
  }

  get view() {
    return ({
      [ePropertiesView.CHECKBOX]: PropertyAsCheckbox,
      [ePropertiesView.COLOR]: PropertyAsColor,
      [ePropertiesView.SLIDER]: PropertyAsSlider,
      [ePropertiesView.TEXT]: PropertyAsText,
    }[this.config.type] as unknown) as React.FC<{ property: Property<T> }>;
  }

  get edit() {
    return ({
      [ePropertiesView.CHECKBOX]: PropertyAsCheckbox,
      [ePropertiesView.COLOR]: PropertyAsColor,
      [ePropertiesView.SLIDER]: PropertyAsSlider,
      [ePropertiesView.TEXT]: PropertyAsText,
    }[this.config.type] as unknown) as React.FC<{ property: Property<T> }>;
  }
}
