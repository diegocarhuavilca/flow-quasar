<template>
  <q-footer class="text-white q-px-lg q-pt-xl q-pb-md absolute-bottom">
    <q-toolbar class="column">
      <div class="row full-width content">
        <div
          class="
            col
            flex
            column
            text-center
            items-center
            justify-center
            content-center
          "
        >
          <q-img
            src="branding/logoFull.svg"
            class="cursor-pointer"
            spinner-color="white"
            style="max-width: 150px"
            @click='this.$router.push({name:"Home"})'
          />

          <p class="q-ma-none q-mt-lg">Siguenos en</p>

          <div class="row justify-center q-mt-sm">
            <template  v-for="social in socialMedias"
              :key="social.name">
              <div class="hvr-grow">
                <q-btn
              flat
              text-color="white"
              :icon="social.icon"
              @click="openLink(social.url)"
            />
              </div>

            </template>

          </div>
        </div>
        <div class="col">
          <q-list dense style="max-width: 300px">
            <q-item>
              <q-item-section class="text-secondary text-weight-bold text-h5"
                >CONTACTO</q-item-section
              >
            </q-item>
            <q-item v-for="(contacto,key) in contactos" :key="key">
              <q-item-section avatar class="q-pr-none">
                <q-icon color="white" :name="contacto.icon" />
              </q-item-section>
              <q-item-section
                >{{contacto.informacion}}</q-item-section
              >
            </q-item>

          </q-list>
        </div>
        <div class="col">
          <q-list dense style="max-width: 300px">
            <q-item>
              <q-item-section class="text-secondary text-weight-bold text-h5"
              >FORMAS DE PAGO</q-item-section
              >
            </q-item>
            <q-item clickable class="hvr-forward" @click='this.$router.push({name:"Abonados"})'>
              <q-item-section
              >Informacion de Abonados y Usuarios</q-item-section
              >
            </q-item>
          </q-list>
        </div>
        <div class="col">
          <q-list dense style="max-width: 300px">
            <q-item>
              <q-item-section class="text-secondary text-weight-bold text-h5"
                >LEGAL Y REGULATORIO</q-item-section
              >
            </q-item>
            <q-item clickable class="hvr-forward" @click='this.$router.push({name:"Abonados"})'>
              <q-item-section
                >Informacion de Abonados y Usuarios</q-item-section
              >
            </q-item>
            <q-item class="hvr-forward"
              clickable
              @click="
                openLink(
                  'https://www2.flow.pe/uploads/Portabilidad_numerica_2_2fef46d1ad.pdf'
                )
              "
            >
              <q-item-section>Portabilidad Numerica</q-item-section>
            </q-item>
            <q-item
              clickable class="hvr-forward"
              @click="
                openLink(
                  'https://www2.flow.pe/uploads/USO_DE_LA_RED_EN_CASO_DE_EMERGENCIA_2_412487978b.pdf'
                )
              "
            >
              <q-item-section
                >Uso de la Red en Casos de Emergencia</q-item-section
              >
            </q-item>
            <q-item clickable class="hvr-forward" @click='this.$router.push({name:"Neutralidad"})'>
              <q-item-section>Neutralidad de la Red</q-item-section>
            </q-item>
            <q-item
              clickable class="hvr-forward"
              @click="
                openLink(
                  'https://www2.flow.pe/uploads/POLITICA_DE_PROTECCION_DE_DATOS_Y_PRIVACIDAD_DE_INTERMAX_b7bbd4fdc7.pdf'
                )
              "
            >
              <q-item-section>Ley de Proteccion de Datos</q-item-section>
            </q-item>
            <q-item clickable class="hvr-forward" @click="
                openLink(
                  'https://www2.flow.pe/uploads/TERMINOS_Y_CONDICIONES_DE_LA_WEB_a7811cb9b4.pdf'
                )
              ">
              <q-item-section>Terminos y Condiciones</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="row full-width justify-center q-mt-md text-center">
        © 2021 Intermax S.A.C - Todos los derechos reservados
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { socialMedias } from 'src/constants/socialMedia';
import {contactos} from 'src/constants/contacto';

export default defineComponent({
  setup() {
    return {

      openLink(link: string) {
        window.open(link, '_blank');
      },
      socialMedias,
      contactos
    };
  },
});
</script>

<style scoped lang="scss">
footer {
  background-color: rgb(27, 38, 56);
}
.q-toolbar {
  max-width: 1440px;
  margin: auto;
}

@media screen and (max-width: 960px) {
  .content{
    flex-direction: column;
    align-items: center;

    .col{
      margin-top: 1rem;
    }
  }
}


</style>
