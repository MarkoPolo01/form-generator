<template>
  <div class="home_form">
    <FormaGenerator/>
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
<style>

</style>