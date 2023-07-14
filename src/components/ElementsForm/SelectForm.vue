<template>
  <div>
    <label>{{ label }}</label>
    <select>
      <option v-for="option of options" :key="option.id">{{option}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options:Array,
    label:String
  }
};
</script>

<style scoped>
/* Стили для компонента Input */
</style>
