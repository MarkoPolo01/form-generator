<template>
  <div>
    <label>{{ label }}</label>
    <select v-model="selectedOption" @change="handleChange">
      <option v-for="option in options" :key="option.id" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    label: String,
    inputId: Number,
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    handleChange() {
      this.$emit("input", this.label, this.selectedOption);
    },
  },
};
</script>

<style scoped>
/* Стили для компонента SelectForm */
</style>
