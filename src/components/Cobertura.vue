<template>
  <div class="main bg-primary" >
    <div class="content text-white" id="cobertura">
      <div class="row full-width justify-around" >
        <div class="column" style="width: 650px">
          <q-img
            src="~assets/cobertura/mapa.webp"
            spinner-color="white"
            width="100%"
          />
        </div>
        <div class="column justify-center" style="max-width: 500px">
          <h4 class="text-weight-bold  text-center q-mb-none">
            {{cobertura.titulo}}
          </h4>
          <p class="text-center text-accent text-h6">
            {{cobertura.subtitulo}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {cobertura} from 'src/constants/cobertura';

export default defineComponent({
  setup() {
    return {cobertura};
  },
});
</script>

<style scoped lang="scss">
.content {
  max-width: 1440px;
  margin: auto;
}
</style>
