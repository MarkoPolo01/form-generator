<template>
  <div>
    <form @submit.prevent="">
      <label>Добавление Label для Input</label>
      <input v-model="inputLabel">
      <button @click="addInput">Добавить</button>
      <label>Добавление Label для Checkbox</label>
      <input v-model="checkboxesLabel">
      <button @click="addCheckboxes">Добавить</button>
      <div class="option_select">
        <p>Сначала добавьте Select а потом все option к нему</p>
        <label>Добавление вариантов Label для Select</label>
        <input v-model="selectLabel">
        <button @click="addSelect">Добавить</button>
        <label>Добавление Options для Select</label>
        <input v-model="optionValue">
        <button @click="addOption">Добавить</button>
      </div>
      <label>Добавление Label для Textarea</label>
      <input v-model="textareaLabel">
      <button @click="addTextarea">Добавить</button>
      <div class="form_button">
        <button @click="sendForm">Сохранить</button>
        <button @click="backStart">Отмена(очистка генератора)</button>
      </div>
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
      inputLabel: "",
      selectLabel: "",
      checkboxesLabel: "",
      textareaLabel: "",
      optionValue: "",
      formaModel: {
        id: Math.floor(Math.random() * 10000000),
        formInputs: [],
        formSelects: [],
        formCheckboxes: [],
        formTextareas: []
      }
    }
  },
  methods: {
    ...mapMutations(['addForm']),
    sendForm() {
      this.addForm(this.formaModel)
      this.formaModel = {
        id: Math.floor(Math.random() * 10000000),
        formInputs: [],
        formSelects: [],
        formCheckboxes: [],
        formTextareas: []
      }
    },
    addOption() {
      this.formaModel.formSelects[0].options.push(this.optionValue)
      this.optionValue = ""
    },
    addInput(){
      this.formaModel.formInputs.push({id:Math.floor(Math.random() * 10000000),label:this.inputLabel,value:''})
      this.inputLabel=" "
    },
    addSelect(){
      this.formaModel.formSelects.unshift({id:Math.floor(Math.random() * 10000000),label:this.selectLabel,options:[]})
      this.selectLabel=" "
    },
    addCheckboxes(){
      this.formaModel.formCheckboxes.unshift({id:Math.floor(Math.random() * 10000000),label:this.checkboxesLabel,value:''})
      this.checkboxesLabel=" "
    },
    addTextarea(){
      this.formaModel.formTextareas.unshift({id:Math.floor(Math.random() * 10000000),label:this.textareaLabel,value:''})
      this.textareaLabel=" "
    },
    backStart() {
      this.formaModel = {
        id: Math.floor(Math.random() * 10000000),
        formInputs: [],
        formSelects: [],
        formCheckboxes: [],
        formTextareas: []
      }
      this.inputLabel = this.selectLabel = this.checkboxesLabel = this.textareaLabel = this.optionValue = ""
    }
  }
}
</script>