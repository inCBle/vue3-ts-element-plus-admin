type IFormType =
  | "input"
  | "password"
  | "number"
  | "select"
  | "datepicker"
  | "checkbox"
  | "radio"
  | "textarea"
  | "switch"
  | "upload";

type IOptions = {
  label: string;
  value: string | number;
};

export interface IProFormItem {
  field: string;
  label: string;
  placeholder: string;
  type: IFormType;
  options: IOptions[];
  props: object;
}
