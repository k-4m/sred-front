/* eslint-disable no-param-reassign */
import { PropertyAsText } from '../components/propertiesViews/PropertyAsText';
import { CheckboxProperty } from '../components/property/CheckboxProperty';
import { ColorProperty } from '../components/property/ColorProperty';
import { SliderProperty } from '../components/property/SliderProperty';
import { eEmotion } from '../store/types';
import { emotions } from './index';
import { Trigger } from './Trigger';
import { ePropertiesView } from './types';

export type tPropertyConfig<T> = {
  label: string;
  type: ePropertiesView;
  getValue: () => T;
  update: (value: T, property: Property<T>) => void;
  hidden?: boolean;
  options?: Record<string, number | string | boolean>;
};

export type tPropertyView<T> = {
  value: T;
  editable?: boolean;
  onChange?: (value: T) => void;
  options?: Record<string, string | number | boolean>;
};

export class Property<T = any> {
  id: string;

  config: tPropertyConfig<T>;

  triggers: Trigger<T>[] = [];

  unusedTriggers: eEmotion[] = [...emotions];

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
      [ePropertiesView.CHECKBOX]: CheckboxProperty,
      [ePropertiesView.COLOR]: ColorProperty,
      [ePropertiesView.SLIDER]: SliderProperty,
      [ePropertiesView.TEXT]: PropertyAsText,
    }[this.config.type] as unknown) as React.FC<tPropertyView<T>>;
  }

  update(value: T) {
    this.config.update(value, this);
  }

  addTrigger(trigger: Trigger<T>) {
    this.triggers.push(trigger);
    this.reserveTrigger(trigger.cause);
  }

  removeTrigger(trigger: Trigger<T>) {
    this.triggers.splice(this.triggers.indexOf(trigger), 1);

    this.unusedTriggers.push(trigger.cause);
  }

  reserveTrigger(emotion: eEmotion) {
    this.unusedTriggers = this.unusedTriggers.filter((v) => v !== emotion);
  }

  trigger(emotion: eEmotion) {
    this.triggers.forEach((t) => {
      if (t.willTrigger(emotion)) {
        this.update(t.value);
      }
    });
  }

  updateTrigger(trigger: Trigger, cause: eEmotion | undefined, value: any) {
    if (cause !== undefined) {
      this.unusedTriggers.push(trigger.cause);
      trigger.cause = cause;
      this.reserveTrigger(cause);
    }

    if (value !== undefined) {
      trigger.value = value;
    }
  }
}
