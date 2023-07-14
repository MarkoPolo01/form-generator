<template>
  <div>
    <label>{{ label }}</label>
    <textarea></textarea>
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
