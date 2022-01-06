<template>
  <q-page class="bg-dark">

    <carousel />
    <information />
    <planes />
    <cobertura />
    <contact />


  </q-page>
</template>

<script lang="ts">
import Contact from 'src/components/Contact.vue';
import Information from 'src/components/Information.vue';
import Cobertura from 'src/components/Cobertura.vue';
import Carousel from 'src/components/Carousel.vue';
import Planes from 'src/components/Planes.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { Contact, Information, Cobertura, Carousel, Planes },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
