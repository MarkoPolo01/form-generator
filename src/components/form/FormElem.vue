<template>
  <div>
    <form class="form_elem">
      <InputForm
          v-for="input in forma.formInputs"
          :key="input.id"
          :label="input.label"
          :value="formValues[input.id]"
          @input="eventEntry"
          :inputId="input.id"
      />
      <SelectForm
          v-for="select in forma.formSelects"
          :key="select.id"
          :label="select.label"
          :options="select.options"
          @input="eventEntry"
          :inputId="select.id"
      />
      <CheckboxForm
          v-for="checkbox in forma.formCheckboxes"
          :key="checkbox.id"
          :label="checkbox.label"
          :checked="formValues[checkbox.id]"
          @input="eventEntry"
          :inputId="checkbox.id"
      />
      <TextareaForm v-for="textarea in forma.formTextareas"
                    :key="textarea.id"
                    :label="textarea.label"
                    :value="formValues[textarea.id]"
                    @textarea="eventEntry"
                    :textareaId="textarea.id"
      />
      <div class="form_elem_block_button">
        <button @click="saveForm">Сохранить</button>
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
      formValues: {
        id: Math.floor(Math.random() * 10000000)
      }
    };
  },
  methods: {
    saveForm() {
      alert('Запись улетела в бд структуру можно посмотреть в консоле')
      console.log(this.formValues);
    },


    eventEntry(label, inputValue) {
      this.formValues = {
        ...this.formValues,
        [label]: inputValue,
      };
    },

  }
}
</script>

<style scoped lang="scss">
@import "FormaElem";
</style>
