<template>
  <a-input v-model:value="searchInput" placeholder="Search">
    <template #prefix>
      <search-outlined type="search" />
    </template>
  </a-input>
</template>

<script lang="ts">
import { SearchOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SearchOutlined,
    InfoCircleOutlined,
  },

  setup() {
    const searchInput = ref<string>('');
    return {
      searchInput,
    };
  },
});
</script>
