<template>
  <div>
    <div v-for="item in forms" :key="item.id">
      <FormElem
          :forma="item"
      />
    </div>

  </div>
</template>

<script>


import FormElem from "@/components/form/FormElem.vue";
import {mapActions} from "vuex";

export default {
  created() {
    this.fetchForms();
  },
  components: {FormElem},
  data() {
    return {
      forms: [
        {
          id: 1,
          formInputs: [
            {id: 1, label: 'Input 1'},
            {id: 2, label: 'Input 2'}
          ],
          formSelects: [
            {id: 3, label: 'Select 1', options: ['Option 1', 'Option 2']},
            {id: 4, label: 'Select 2', options: ['Option 3', 'Option 4']}
          ],
          formCheckboxes: [
            {id: 5, label: 'Checkbox 1'},
            {id: 6, label: 'Checkbox 2'}
          ],
          formTextareas: [
            {id: 7, label: 'Textarea 1'},
            {id: 8, label: 'Textarea 2'}
          ],
        },
        {
          id: 2,
          formInputs: [
            {id: 1, label: 'Input 1'},
            {id: 2, label: 'Input 2'}
          ],
          formSelects: [
            {id: 3, label: 'Select 1', options: ['Option 1', 'Option 2']},
            {id: 4, label: 'Select 2', options: ['Option 3', 'Option 4']}
          ],
          formCheckboxes: [
            {id: 5, label: 'Checkbox 1'},
            {id: 6, label: 'Checkbox 2'}
          ],
          formTextareas: [
            {id: 7, label: 'Textarea 1'},
            {id: 8, label: 'Textarea 2'}
          ],
        },
        {
          id: 3,
          formInputs: [
            {id: 1, label: 'Input 1'},
            {id: 2, label: 'Input 2'}
          ],
          formSelects: [
            {id: 3, label: 'Select 1', options: ['Option 1', 'Option 2']},
            {id: 4, label: 'Select 2', options: ['Option 3', 'Option 4']}
          ],
          formCheckboxes: [
            {id: 5, label: 'Checkbox 1'},
            {id: 6, label: 'Checkbox 2'}
          ],
          formTextareas: [
            {id: 7, label: 'Textarea 1'},
            {id: 8, label: 'Textarea 2'}
          ],
        }
      ]
    };
  },
  computed: {},
  methods: {
    ...mapActions(['fetchForms']),
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
