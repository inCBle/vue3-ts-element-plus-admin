<template>
  <el-form :model="model" :label-width="labelWidth">
    <el-row>
      <template v-for="item in fields" :key="item.label">
        <el-col v-bind="colLayout">
          <el-form-item :label="item.label" :style="itemStyle">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
                v-model="model[item.field]"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'number'">
              <el-input
                type="number"
                :placeholder="item.placeholder"
                v-model="model[item.field]"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'textarea'">
              <el-input
                type="textarea"
                :placeholder="item.placeholder"
                v-model="model[item.field]"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                :placeholder="item.placeholder"
                style="width: 100%"
                v-model="model[item.field]"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </el-option>
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker
                v-bind="item.props"
                v-model="model[item.field]"
              ></el-date-picker>
            </template>
            <template v-else-if="item.type === 'radio'">
              <el-radio-group v-model="model[item.field]">
                <el-radio
                  v-for="option in item.options"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </el-radio>
              </el-radio-group>
            </template>
            <template v-else-if="item.type === 'checkbox'">
              <template v-if="item.options?.length > 0">
                <el-checkbox-group v-model="model[item.field]">
                  <el-checkbox
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </el-checkbox>
                </el-checkbox-group>
              </template>
              <el-checkbox v-else v-model="model[item.field]"></el-checkbox>
            </template>
            <template v-else-if="item.type === 'switch'">
              <el-switch v-model="model[item.field]"></el-switch>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { proFormProps } from "./ProForm";

defineOptions({ name: "ProForm" });

defineProps(proFormProps);
</script>
