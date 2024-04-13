export type genericFn = (...args: any[])=>any
export interface AutoCompletePropTypes {
  errorText: string;
  single: Boolean;
  onSelectedOptionsChange: genericFn;
  getOptions: genericFn;
  maxDisplayItems: number;
  selectedOptions: any[];
  label: string;
  placeholder: string;
}
export interface MenuItem {
    label: string;
    id: string
}
