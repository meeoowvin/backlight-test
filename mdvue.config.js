import Layout from '~/doc-layout/src/Layout.vue';
import { registerComponents } from '@divriots/dockit-vue';

import 'ant-design-vue/dist/antd.css';
import antDesignComponents from 'ant-design-vue';

// import { MdField } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'


export default {
  Layout: Layout,
  enhanceApp: ({ app }) => {
    app.use(registerComponents);
    app.use(antDesignComponents);
    // app.use(MdField)
  },
};
