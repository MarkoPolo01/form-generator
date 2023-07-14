<template>
  <div>
    <form>
      <InputForm v-for="input in forma.formInputs" :key="input.id" :label="input.label" />
      <SelectForm v-for="select in forma.formSelects" :key="select.id" :label="select.label"
                  :options="select.options"/>
      <CheckboxForm v-for="checkbox in forma.formCheckboxes" :key="checkbox.id" :label="checkbox.label"
                   />
      <TextareaForm v-for="textarea in forma.formTextareas" :key="textarea.id" :label="textarea.label"
                   />
      <button @click="saveForm">Сохранить</button>
      <Button @click="cancelForm">Отменить</button>
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
    return {};
  },
  methods: {
    saveForm() {
      // Отправка формы на сервер или обработка данных
      console.log('Form values:', this.formValues);
    },
    cancelForm() {
      // Очистка значений формы
      this.formValues = {};
    }
  }
};
</script>

<style scoped>
/* Стили для компонента FormGenerator */
</style>
