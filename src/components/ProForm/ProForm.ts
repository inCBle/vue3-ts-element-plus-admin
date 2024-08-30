import { PropType } from "vue";
import { IProFormItem } from "./ProFormItem";

export interface IProForm {
  title?: string;
  model?: object;
  fields: IProFormItem[];
  labelWidth?: string;
  colLayout?: any; // col标签的占位
  itemStyle: any;
  inline?: boolean;
  onSubmit?: (values: object) => void;
  onCancel?: () => void;
}

export const proFormProps = {
  model: {
    type: Object,
    default: () => ({}),
  },
  fields: {
    type: Array as PropType<IProFormItem[]>,
    default: () => [],
  },
  labelWidth: {
    type: String,
    default: () => "100px",
  },
  itemStyle: {
    type: Object,
    default: () => ({}),
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24,
    }),
  },
};
