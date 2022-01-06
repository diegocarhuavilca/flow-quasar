<template>
  <q-layout view="hHh lpR fFf" >
    <header-layout />

    <q-page-container >

      <router-view />
    </q-page-container>



    <footer-layout />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterLayout from 'src/components/mainLayout/Footer.vue';
import HeaderLayout from 'src/components/mainLayout/Header.vue';

export default defineComponent({
  components: { FooterLayout, HeaderLayout },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>


