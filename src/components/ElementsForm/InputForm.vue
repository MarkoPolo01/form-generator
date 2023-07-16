<template>
  <div>
    <label>{{ label }}</label>
    <input type="text" :value="value" @input="handleInput" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    inputId: Number,
  },
  methods: {
    handleInput(event) {
      this.$emit("input", this.label, event.target.value);
    },
  },
};
</script>
