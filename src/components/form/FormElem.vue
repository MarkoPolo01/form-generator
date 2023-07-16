<template>
  <div>
    <form class="form_elem">
      <InputForm v-for="input in forma.formInputs" :key="input.id" :label="input.label" />
      <SelectForm v-for="select in forma.formSelects" :key="select.id" :label="select.label"
                  :options="select.options"/>
      <CheckboxForm v-for="checkbox in forma.formCheckboxes" :key="checkbox.id" :label="checkbox.label"
      />
      <TextareaForm v-for="textarea in forma.formTextareas" :key="textarea.id" :label="textarea.label"
      />
      <div class="form_elem_block_button">
        <button @click="saveForm">Сохранить</button>
        <button @click="cancelForm">Очистить</button>
        <button @click="removeForm">Удалить</button>
      </div>
    </form>
  </div>
</template>

<script>

import SelectForm from "@/components/ElementsForm/SelectForm.vue";
import CheckboxForm from "@/components/ElementsForm/CheckboxForm.vue";
import TextareaForm from "@/components/ElementsForm/TextareaForm.vue";
import InputForm from "@/components/ElementsForm/InputForm.vue";

export default {
  components: {TextareaForm, CheckboxForm, SelectForm, InputForm},
  props: {
    forma: Object
  },
  data() {
    return {
      formValues: {}
    };
  },
  methods: {
    saveForm() {
      // Отправка формы на сервер или обработка данных
      alert('Вот такая запись полетела в бд', this.formValues);
    },
    cancelForm() {
      this.formValues = {};
    },
    removeForm() {

    }
  }
};
</script>

<style scoped lang="scss">
@import "FormaElem";
</style>
