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
import {mapActions,mapState} from "vuex";

export default {
  created() {
    this.fetchForms();
  },
  computed: mapState({
    forms: state => state.forms,
  }),
  components: {FormElem},
  data() {
    return {

    };
  },
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
