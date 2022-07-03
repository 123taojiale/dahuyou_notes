<template>
  <div>
    <slot name="slot1" :data1="data1">slot1 default value...</slot>
    <slot name="slot2" :data2="data2">slot2 default value...</slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      data1: 1,
      data2: 2,
    }
  },
}
</script>