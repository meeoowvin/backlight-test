<template>
  <a-button :type="variant" :size="size" :shape="shape" :loading="loading" :danger="danger" :ghost="ghost" :disabled="disabled">
    <slot></slot>
  </a-button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';


const props = defineProps({
  /**
   * The variant of the button - either 'primary' or 'dashed' or 'default' or 'text' or 'link'
   * @example 'primary'
   */
  variant: {
    type: String as PropType<'primary' | 'dashed' | 'default' | 'text' | 'link'>,
    default: 'primary',
    validator: (value: any) => ['primary', 'dashed', 'default', 'text', 'link'].includes(value),
  },
  /**
   * The size of the button - either 'large' or 'default' or 'small'
   * @example 'default'
   */
   size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default',
    validator: (value: any) => ['large', 'default', 'small'].includes(value),
  },
  /**
   * The shape of the button - either 'round' or 'circle' or 'default'
   * @example 'default'
   */
   shape: {
    type: String as PropType<'round' | 'circle' | 'default'>,
    default: 'default',
    validator: (value: any) => ['round', 'circle', 'default'].includes(value),
  },
  /**
   * Is Button loading - either true or false
   * @example 'false'
   */
   loading: {
    type: Boolean as PropType<true | false>,
    default: false,
    validator: (value: any) => [true, false].includes(value),
  },
  /**
   * Is Button danger - either true or false
   * @example 'false'
   */
   danger: {
    type: Boolean as PropType<true | false>,
    default: false,
    validator: (value: any) => [true, false].includes(value),
  },
  /**
   * Is Button ghost - either true or false
   * @example 'false'
   */
   ghost: {
    type: Boolean as PropType<true | false>,
    default: false,
    validator: (value: any) => [true, false].includes(value),
  },
  /**
   * Is Button disabled - either true or false
   * @example 'false'
   */
   disabled: {
    type: Boolean as PropType<true | false>,
    default: false,
    validator: (value: any) => [true, false].includes(value),
  },
});
</script>

