<template>
  <div class="main q-py-xl" id="planes">
    <q-img
      src="~assets/planes/wave2.svg"
      spinner-color="white"
      class="wave2"
      width="100%"
      height="100px"
    />
    <div class="content row justify-around q-py-xl desktop">
      <q-card
        class="card text-center q-py-md shadow-10"
        v-for="plan in planes"
        :key="plan.id"
      >
        <q-card-section>
          <h4 class="q-ma-none text-weight-bold text-secondary">
            Fibra {{ plan.velocidad }} Mb
          </h4>
        </q-card-section>
        <q-card-section class="text-center">
          <h2 class="q-ma-none text-weight-bold text-white">
            {{ plan.velocidad }}
          </h2>
          <h4 class="q-ma-none text-weight-bold text-white">soles</h4>
        </q-card-section>
        <q-card-section class="text-weight-bold text-grey">
          Fibra Optica Instalacion y Router Wifi
        </q-card-section>
        <q-card-section class="text-white hvr-grow">
          <q-btn
            text-color="white"
            label="Lo Quiero"
            class="button-card"
            @click="contacto"
          />
        </q-card-section>
      </q-card>
    </div>

    <div class="content row justify-around q-py-xl mobile">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        infinite
        swipeable
        animated
        control-color="accent"
        padding
        arrows
        height="400px"
        class="bg-transparent text-white"
      >
        <q-carousel-slide
          :name="plan.velocidad"
          class="column no-wrap flex-center"
          v-for="plan in planes"
          :key="plan"
        >
          <q-card class="card text-center q-py-md shadow-10">
            <q-card-section>
              <h4 class="q-ma-none text-weight-bold text-secondary">
                Fibra {{ plan.velocidad }} Mb
              </h4>
            </q-card-section>
            <q-card-section class="text-center">
              <h2 class="q-ma-none text-weight-bold text-white">
                {{ plan.velocidad }}
              </h2>
              <h4 class="q-ma-none text-weight-bold text-white">soles</h4>
            </q-card-section>
            <q-card-section class="text-weight-bold text-grey">
              Fibra Optica Instalacion y Router Wifi
            </q-card-section>
            <q-card-section class="text-white hvr-grow">
              <q-btn
                text-color="white"
                label="Lo Quiero"
                class="button-card"
                @click="contacto"
              />
            </q-card-section>
          </q-card>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <q-img
      src="~assets/planes/wave.svg"
      spinner-color="white"
      class="wave"
      width="100%"
      height="100px"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { planes } from 'src/constants/planes';

export default defineComponent({
  setup() {
    return {
      planes,
      slide: ref('50'),
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
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
.main {
  position: relative;
  background-image: linear-gradient(
    90deg,
    rgba(11, 16, 22, 0.8),
    rgba(29, 41, 58, 0.8)
  );
  padding: 8rem 0;
  background: url('~assets/planes/fondoPlanes.png'),
    linear-gradient(90deg, rgba(11, 16, 22, 0.8), rgba(29, 41, 58, 0.8))
      no-repeat center bottom;
}
.content {
  max-width: 1440px;
  margin: auto;
}

.wave {
  position: absolute;
  bottom: -15px;
}

.wave2 {
  position: absolute;
  top: -1px;
}
.card {
  background-color: #0b1016;
  width: 350px;
  border: 0.5rem solid #1c2434;
  border-radius: 2rem;
}

.button-card {
  background: linear-gradient(90deg, #f74567, #fe653a);
}

 .mobile{
    display: none;
  }


@media screen and (max-width: 1110px) {

  .desktop{
    .card{
      width: 300px;
    }
  }
}

@media screen and (max-width: 950px) {

  .desktop{
   display: none;
  }

  .mobile{
    display: block;
  }
}
</style>
