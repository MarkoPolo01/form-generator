<template>
  <div>
    <label>{{ label }}</label>
    <input v-bind="$attrs"  />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String
  }
};
</script>

<style scoped>
/* Стили для компонента Input */
</style>
