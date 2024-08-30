<script setup lang="ts">
import { ProForm, IProFormItem } from "@/components/ProForm";
import { reactive } from "vue";

const fields: IProFormItem[] = [
  {
    field: "name",
    label: "用户名",
    type: "input",
    placeholder: "请输入用户名",
    required: true,
  },
  {
    field: "password",
    label: "密码",
    type: "password",
    placeholder: "请输入密码",
    required: true,
  },
  {
    field: "sport",
    label: "喜欢的运动",
    placeholder: "请选择喜欢的运动",
    type: "select",
    options: [
      { label: "篮球", value: "basketball" },
      { label: "足球", value: "football" },
      { label: "乒乓球", value: "pingpong" },
    ],
  },
  {
    field: "createTime",
    label: "创建时间",
    type: "datepicker",
    placeholder: "请选择创建时间",
    required: true,
  },
  {
    field: "status",
    label: "状态",
    type: "radio",
    options: [
      { label: "启用", value: 1 },
      { label: "禁用", value: 0 },
    ],
  },
  {
    field: "avatar",
    label: "头像",
    type: "upload",
    placeholder: "请上传头像",
    required: true,
  },
  {
    type: "checkbox",
    field: "agreement",
    label: "同意协议",
    required: true,
  },
  {
    field: "description",
    label: "描述",
    type: "textarea",
    placeholder: "请输入描述",
    required: true,
  },
];

const model = reactive({
  name: "",
  password: "",
  sport: "",
  createTime: "",
  status: "",
  avatar: "",
  agreement: "",
  description: "",
});
</script>

<template>
  <div class="bg-slate-50 shadow-xl p-8 rounded-lg">
    <ProForm title="Formulario de registro" :model="model" :fields="fields" />
  </div>
</template>
