<template>
  <q-header class="text-white q-py-xl q-px-lg absolute-top">
    <q-toolbar>
      <q-img
        src="branding/logoFull.svg"
        class="cursor-pointer"
        spinner-color="white"
        style="height: 100%; max-width: 100px"
        @click="this.$router.push({ name: 'Home' })"
      />

      <q-space />

      <template class="desktop">
        <div class="hvr-overline-from-left q-mx-sm">
          <q-btn
           v-if="this.$route.name=='Home'"
            flat
            text-color="white"
            label="Planes"
            class="q-mt-xs"
            @click="planes"
          />
        </div>
        <div class="hvr-overline-from-left q-mx-lg">
          <q-btn
          v-if="this.$route.name=='Home'"
            flat
            text-color="white"
            label="Cobertura"
            class="q-mt-xs"
            @click="cobertura"
          />
        </div>
        <div class="hvr-overline-from-left q-mx-sm">
          <q-btn
           v-if="this.$route.name=='Home'"
            flat
            text-color="white"
            label="Contacto"
            class="q-mt-xs"
            @click="contacto"
          />
        </div>
        <div class="hvr-overline-from-left q-mx-sm">
          <q-btn
            v-if="this.$route.name=='Home'"
            flat
            text-color="white"
            label="Formas de Pago"
            class="q-mt-xs"
            @click='this.$router.push({name:"Pago"})'
          />
        </div>
      </template>

      <q-space />

      <template class="desktop">
        <template v-for="social in socialMedias" :key="social.name">
          <div class="hvr-float">
            <q-btn
              flat
              text-color="white"
              :icon="social.icon"
              @click="openLink(social.url)"
            />
          </div>
        </template>
      </template>

      <q-btn flat text-color="white" icon="fas fa-bars" class="mobile">
        <q-menu  class="bg-primary text-white" v-model="menuMobile">
          <q-list style="min-width:  150px">
            <q-item clickable @click="planes">
              <q-item-section>Planes</q-item-section>
            </q-item>
            <q-item clickable  @click="cobertura">
              <q-item-section>Cobertura</q-item-section>
            </q-item>
            <q-item clickable  @click="contacto">
              <q-item-section>Contacto</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import { socialMedias } from 'src/constants/socialMedia';

export default defineComponent({
  setup() {
    const menuMobile = ref(false);
    return {
      socialMedias,
      menuMobile,
      openLink(link: string) {
        window.open(link, '_blank');
      },
      planes() {
        window.document
          .getElementById('planes')
          ?.scrollIntoView({ behavior: 'smooth' });
      },
      cobertura() {
        window.document
          .getElementById('cobertura')
          ?.scrollIntoView({ behavior: 'smooth' });
      },
      contacto() {
        window.document
          .getElementById('contacto')
          ?.scrollIntoView({ behavior: 'smooth' });
      },
    };
  },
});
</script>

<style scoped lang="scss">
.desktop {
  display: block;
}

.mobile {
  display: none;
}
.q-toolbar {
  max-width: 1440px;
  margin: auto;
}

header {
  background-image: linear-gradient(
    90deg,
    rgba(11, 16, 22, 0.8),
    rgba(29, 41, 58, 0.8)
  );
}

@media screen and (max-width: 720px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
