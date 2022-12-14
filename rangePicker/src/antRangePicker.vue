<template>
  <a-range-picker v-model:value="value1" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Dayjs } from 'dayjs';
type RangeValue = [Dayjs, Dayjs];
export default defineComponent({
  setup() {
    return {
      value1: ref<RangeValue>(),
    };
  },
});
</script>
