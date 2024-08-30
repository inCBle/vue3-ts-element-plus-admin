---
outline: 这是注释吗
---

# 增强表单

增强表单可以通过 `ProForm` 组件进行渲染，该组件提供了丰富的配置项，可以通过 `JSON Schemas` 配置项满足大部分场景下的表单需求。

## 基本用法

```tsx
import { ProForm } from '@ant-design/pro-components';

export default () => {
  return (
    <ProForm
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      <ProFormText
        name="name"
        label="姓名"
        tooltip="这里是提示信息"
        placeholder="请输入姓名"
        rules={[{ required: true, message: '姓名为必填项' }]}
      />
      <ProFormText
        name="age"
        label="年龄"
        tooltip="这里是提示信息"
        placeholder="请输入年龄"
        rules={[{ required: true, message: '年龄为必填项' }]}
      />
    </ProForm>
  );
};
```

## API

### ProForm

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| submitter | 自定义提交按钮 | `false` \| `SubmitterProps` | - |
