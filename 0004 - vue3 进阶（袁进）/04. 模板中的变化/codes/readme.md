### 相关目录说明

- template

存放的是用于练习的模板，写好了相关的数据以及样式。vue2 目录下存放的是使用 vue-cli 搭建的 vue2 的工程模板；vue3 目录下存放的是使用 vite 搭建的 vue3 的工程模板。

由于数据及样式啥的，都已经写好了，所以我们只要关注与业务逻辑的实现即可。只需要在 App.vue、CheckboxEditor.vue 这两个文件中写代码。

- vue2-option

在 vue2 中，使用传统的配置式写法（option api）来实现，不使用 v-model、.sync。

将 App.vue、CheckboxEditor.vue 这两个组件搬运到 vue3 的工程中，依旧可以正常执行。

- vue2-option-v-model

在 vue2 中，使用传统的配置式写法（option api）来实现，使用 v-model、.sync。

- vue3-composition-v-model

在 vue3 中，使用最新的 composition api 来实现，使用 v-model。

- yj

袁老师的源码。

- key、v-if

key 值与 v-if 一起使用，vue2、vue3 之间的一些区别。