<template>
  <q-page class="bg-dark">
    <div class="content">
      <h3>Informacion Abonados</h3>
      <h4 class="">Gestiona tus servicios</h4>
      <h5>Nuestras Oficinas y horarios de atencion</h5>
      <h6>Direccion</h6>
      <p>{{ direccion }}</p>
      <h6>Horario de Atencion</h6>
      <p>{{ atencion }}</p>
      <p class="text-grey q-ml-md">{{ mensajeCovid }}</p>
      <h5>Mide tu velocidad de tu internet</h5>
      <q-btn class="q-mt-sm q-ml-md btn-primary" label="Mide tu velocidad" />

      <h4>Contratos y requisitos</h4>
      <template v-for="contrato in contratosRequisitos" :key="contrato">
        <div class="q-ml-md">
          <h5>{{ contrato.titulo }}</h5>
          <q-btn
            class="q-mt-sm btn-primary"
            label="Descargar"
            @click="openLink(contrato.link)"
          />
        </div>
      </template>

      <h4>Atencion de reclamos y solicitudes</h4>
      <template v-for="reclamo in reclamosSolicitudes" :key="reclamo">
        <div class="q-ml-md">
          <h5>{{ reclamo.titulo }}</h5>
          <q-btn
            class="q-mt-sm btn-primary"
            label="Descargar"
            @click="openLink(contato.link)"
          />
        </div>
      </template>

      <h4>Reclamos Precedentes</h4>
      <template v-for="reclamo in reclamosPrecedentes" :key="reclamo">
        <div class="q-ml-md">
          <h5>{{ reclamo.titulo }}</h5>
          <q-btn
            class="q-mt-sm btn-primary"
            label="Descargar"
            @click="openLink(contato.link)"
          />
        </div>
      </template>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { direccion, atencion, mensajeCovid } from 'src/constants/contacto';
import {
  contratosRequisitos,
  reclamosSolicitudes,
  reclamosPrecedentes,
} from 'src/constants/informacionAbonados';

export default defineComponent({
  setup() {
    return {
      direccion,
      atencion,
      mensajeCovid,
      contratosRequisitos,
      reclamosSolicitudes,
      reclamosPrecedentes,
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
