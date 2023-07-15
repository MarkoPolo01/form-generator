<template>
  <div>
    <form @submit.prevent="sendForm">
      <label>Добавление Label для Input</label>
      <input v-model="formaModel.formInputs[arrayLengthInput].label">
      <button>Добавить</button>
      <label>Добавление Label для Checkbox</label>
      <input v-model="labelCheckbox">
      <button>Добавить</button>
      <label>Добавление вариантов для Select</label>
      <input>
      <button>Добавить</button>
      <label>Добавление Label для Textarea</label>
      <input v-model="labelTextarea">
      <button>Добавить</button>
      <button @click="sendForm">Сохранить</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}
</style>
<script>


export default {
  components: {},
  data() {
    return {
      formaModel: {
        id: Math.floor(Math.random() * 10000000),
        formInputs:
            {id: Math.floor(), label: "да"},
        formSelects:
            {id: Math.floor(), label: "", options: []},
        formCheckboxes:
            {id: Math.floor(), label: ""},
        formTextareas:
            {id: Math.floor(), label: ""},
      }
    }
  },
  methods: {
    sendForm() {

    }
  }
}
</script>