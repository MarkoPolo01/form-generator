<template>
  <div>
    <label>{{ label }}</label>
    <textarea type="text" :value="value" @input="handleInput"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    textareaId: Number,
  },
  methods: {
    handleInput(event) {
      this.$emit("textarea", this.label, event.target.value);
    },
  },
};
</script>
