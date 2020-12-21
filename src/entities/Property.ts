import { EditCheckboxProperty } from '../components/CreationForm/propertiesEdit/EditCheckboxProperty';
import { EditTextProperty } from '../components/CreationForm/propertiesEdit/EditTextProperty';
import { PropertyAsCheckbox } from '../components/propertiesViews/PropertyAsCheckbox';
import { PropertyAsColor } from '../components/propertiesViews/PropertyAsColor';
import { PropertyAsSlider } from '../components/propertiesViews/PropertyAsSlider';
import { PropertyAsText } from '../components/propertiesViews/PropertyAsText';
import { eEmotion } from '../store/types';
import { Trigger } from './Trigger';
import { ePropertiesView } from './types';

export type tPropertyConfig<T> = {
  label: string;
  type: ePropertiesView;
  getValue: () => T;
  update: (value: T, property: Property<T>) => void;
  hidden?: boolean;
};

export class Property<T = any> {
  id: string;

  config: tPropertyConfig<T>;

  triggers: Trigger<T>[] = [];

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
      [ePropertiesView.CHECKBOX]: EditCheckboxProperty,
      [ePropertiesView.COLOR]: PropertyAsColor,
      [ePropertiesView.SLIDER]: PropertyAsSlider,
      [ePropertiesView.TEXT]: EditTextProperty,
    }[this.config.type] as unknown) as React.FC<{ property: Property<T> }>;
  }

  update(value: T) {
    this.config.update(value, this);
  }

  addTrigger(trigger: Trigger<T>) {
    this.triggers.push(trigger);
  }

  trigger(emotion: eEmotion) {
    this.triggers.forEach((t) => {
      if (t.willTrigger(emotion)) {
        this.update(t.value);
      }
    });
  }
}
