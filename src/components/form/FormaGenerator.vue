<template>
  <div>
    <form @submit.prevent="">
      <label>Добавление Label для Input</label>
      <input v-model="formaModel.formInputs.label">
      <label>Добавление Label для Checkbox</label>
      <input v-model="formaModel.formCheckboxes.label">
      <label>Добавление вариантов Label для Select</label>
      <input v-model="formaModel.formSelects.label">
      <label>Добавление Options для Select</label>
      <input v-model="optionValue">
      <button @click="addOption">Добавить</button>
      <label>Добавление Label для Textarea</label>
      <input v-model="formaModel.formTextareas.label">
      <button @click="sendForm">Сохранить</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import "FormaGenerator";
</style>
<script>


import {mapMutations} from "vuex";

export default {
  components: {},
  data() {
    return {
      inputLabel:"",
      selectLabel:"",
      checkboxesLabel:"",
      textareaLabel:"",
      optionValue: "",
      formaModel: {
        id: Math.floor(Math.random() * 10000000),
        formInputs:[],
        formSelects:[],
        formCheckboxes:[],
        formTextareas:[]
      }
      // formaModel: {
      //   id: Math.floor(Math.random() * 10000000),
      //   formInputs:
      //       {id: Math.floor(Math.random() * 10000000), label: ""},
      //   formSelects:
      //       {id: Math.floor(Math.random() * 10000000), label: "", options: []},
      //   formCheckboxes:
      //       {id: Math.floor(Math.random() * 10000000), label: ""},
      //   formTextareas:
      //       {id: Math.floor(Math.random() * 10000000), label: ""},
      // }
    }
  },
  methods: {
    ...mapMutations(['addForm']),
    sendForm() {
      this.addForm(this.formaModel)
      this.formaModel = {
        id: Math.floor(Math.random() * 10000000),
        formInputs:
            {id: Math.floor(Math.random() * 10000000), label: ""},
        formSelects:
            {id: Math.floor(Math.random() * 10000000), label: "", options: []},
        formCheckboxes:
            {id: Math.floor(Math.random() * 10000000), label: ""},
        formTextareas:
            {id: Math.floor(Math.random() * 10000000), label: ""},
      }
    },
    addOption() {
      this.formaModel.formSelects.options.push(this.optionValue)
      this.optionValue = ""
    }
  }
}
</script>