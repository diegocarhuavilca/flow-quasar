<template>
  <div class="main" id="contacto">
    <q-img
      src="~assets/planes/wave2.svg"
      spinner-color="white"
      class="wave2"
      width="100%"
      height="100px"
    />
    <div class="content row justify-around">
      <div
        class="flex justify-center items-center q-px-lg"
        style="width: 520px"
      >
        <h3
          class="text-weight-bold text-left full-width q-mb-sm text-secondary"
        >
          Te llamamos
        </h3>
        <div class="full-width" style="height: min-content">
          <q-input
            outlined
            dense
            v-model="data.name"
            class="q-my-sm"
            color="secondary"
            bg-color="white"
            label="Nombre"
          />
          <q-input
            outlined
            dense
            v-model="data.lastname"
            class="q-my-sm"
            color="secondary"
            bg-color="white"
            label="Apellido"
          />
          <q-input
            outlined
            dense
            v-model="data.email"
            class="q-my-sm"
            color="secondary"
            bg-color="white"
            label="E-mail"
          />
          <q-input
            outlined
            dense
            v-model="data.phone"
            class="q-my-sm"
            color="secondary"
            bg-color="white"
            label="Telefono"
          />

          <q-select
            dense
            outlined
            v-model="data.distrito"
            :options="distritos"
            class="q-my-sm"
            bg-color="white"
            label="Selecciona tu distrito"
          />

          <q-select
            dense
            outlined
            v-model="data.plan"
            :options="planes"
            class="q-my-sm"
            bg-color="white"
            label="Selecciona tu plan"
          />
          <div class="hvr-grow">
            <q-btn color="secondary" label="Enviar" @click="showNotif" />
          </div>
        </div>
      </div>
      <div class="col flex q-px-lg image" style="max-width: 520px">
        <q-img
          src="~assets/contact/cellphone.png"
          spinner-color="white"
          fit="contain"
        />
      </div>
    </div>

    <q-img
      src="~assets/contact/wave.svg"
      spinner-color="white"
      class="wave"
      width="100%"
      height="100px"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  setup() {
    const $q = useQuasar();
    return {
      data: ref({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        distrito: '',
        plan: '',
      }),
      planes: ['Fibra 50 Mb', 'Fibra 100 Mb', 'Fibra 150 Mb'],
      distritos: [
        'Ancon',
        'Ate',
        'Barranco',
        'Brena',
        'Callao',
        'Carabayllo',
        'Chaclacayo',
        'Chorrillos',
        'Cieneguilla',
        'Comas',
        'Agustino',
        'Independencia',
        'Jesus Maria',
        'La Molina',
        'La Victoria',
        'Lima',
        'Los Olivos',
        'Lurigancho',
        'Lurin',
        'Magdalena del Mar',
        'Miraflores',
        'Pachacamac',
        'Pucusana',
        'Pueblo Libre',
        'Puente Piedra',
        'Punta Hermosa',
        'Punta Negra',
        'Rimac',
        'San Bartolo',
        'San Borja',
        'San Isidro',
        'San Juan de Lurigancho',
        'San Juan de Miraflores',
        'San Luis',
        'San Martin de Porres',
        'San Miguel',
        'Santa Anita',
        'Santa Maria del Mar',
        'Santa Rosa',
        'Santiago de Surco',
        'Surquillo',
        'Villa el Salvador',
        'Villa Maria del Triunfo',
      ],
      showNotif() {
        $q.notify({
          message: 'Mensaje enviado',
          caption: 'Nos contactaremos pronto',
          color: 'secondary',
        });
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  max-width: 1440px;
  margin: auto;
  padding: 8rem 0;
}

.main {
  background: url('~assets/contact/fondo.png');
  background-position: 20% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}

.wave {
  position: absolute;
  bottom: 0;
}

.wave2 {
  position: absolute;
  top: -1px;
}

@media screen and (max-width: 890px) {
  .image {
    display: none;
  }
}


</style>
