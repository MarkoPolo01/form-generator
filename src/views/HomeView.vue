<template>
  <div class="home_form">
    <h1>Генератор Форм</h1>
    <FormaGenerator class="home_form_forma_generator"/>
    <h1>Список Форм</h1>
    <FormaList class="home_form_list"/>
  </div>
</template>
<script>
import FormaList from "@/components/form/FormaList.vue";
import FormaGenerator from "@/components/form/FormaGenerator.vue";

export default {
  components: {
    FormaGenerator,
    FormaList
  }
}
</script>
<style scoped lang="scss">
@import "HomeView";
</style>