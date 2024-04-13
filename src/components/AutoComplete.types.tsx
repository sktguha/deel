export type genericFn = (...args: any[])=>any
export interface AutoCompletePropTypes {
  errorText: string;
  single: Boolean;
  onSelectedOptionsChange: genericFn;
  getOptions: genericFn;
  maxDisplayItems: number;
  selectedOptions: any[];
  label: string;
  placeholder?: string;
}

export interface MenuItem {
    label: string;
    id: string
}

export interface DisplayItemPropTypes {
  selectedOptions: MenuItem[];
  isLast: boolean;
  option: MenuItem;
  onSelectedOptionsChange: genericFn;
  getBoldedText: genericFn;
  inputRef: any;
}

export interface DriverPropTypes {
  single: boolean;
  required: boolean;
  errorTextProp: string;
  maxDisplayItems: number;
  api: boolean;
  label: string;
}

