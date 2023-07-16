<template>
  <div>
    <label>{{ label }}</label>
    <input type="checkbox" :checked="checked" @change="handleChange" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    checked: Boolean,
    inputId: Number,
  },
  methods: {
    handleChange(event) {
      this.$emit("input", this.label, event.target.checked);
    },
  },
};
</script>
