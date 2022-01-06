<template>
  <q-page class="bg-dark">
    <div class="content">
      <h4>Neutralidad de la Red</h4>
      <template v-for="contrato in neutralidadRed" :key="contrato">
        <div class="q-ml-md">
          <h5>{{ contrato.titulo }}</h5>
          <q-btn
            class="q-mt-sm btn-primary"
            label="Descargar"
            @click="openLink(contrato.link)"
          />
        </div>
      </template>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { neutralidadRed } from 'src/constants/neutralidadRed';

export default defineComponent({
  setup() {
    return {
      neutralidadRed,
      openLink(link: string) {
        window.open(link, '_blank');
      },
    };
  },
});
</script>

<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
h5,
h3 {
  background: linear-gradient(90deg, #f74567, #fe653a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  margin-top: 2rem;
}
h4,
h6,
p {
  font-weight: bold;
  color: white;
  margin-top: 1.2rem;
}

.content {
  max-width: 1440px;
  padding: 2rem 2rem;
  margin: auto;
}
</style>
