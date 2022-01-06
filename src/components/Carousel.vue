<template>
  <div class="relative-position">
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      :autoplay="4000"
      infinite
      animated
      control-color="white"
      padding
      class="carousel"
    >
      <q-carousel-slide
        :name="1"
        img-src="~assets/banner/cambiate.webp"
        class="full-width"
      />
      <q-carousel-slide
        :name="2"
        img-src="~assets/banner/fibra.webp"
        class="full-width"
      />
      <q-carousel-slide
        :name="3"
        img-src="~assets/banner/potencia.webp"
        class="full-width"
      />
    </q-carousel>

    <q-img src="~assets/banner/curva.svg" spinner-color="white" class="curve" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const slide = ref(1);
    return {
      slide,
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
});
</script>

<style scoped lang="scss">
.curve {
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
}

.carousel {
  height: 700px;
}

@media screen and (max-width: 1400px) {
  .carousel {
    height: 550px;
  }
}

@media screen and (max-width: 1200px) {
  .carousel {
    height: 450px;
  }
}

@media screen and (max-width: 980px) {
  .carousel {
    height: 400px;
  }
}

@media screen and (max-width: 850px) {
  .carousel {
    height: 350px;
  }
}

@media screen and (max-width: 780px) {
  .carousel {
    height: 300px;
  }
}

@media screen and (max-width: 650px) {
  .carousel {
    height: 250px;
    width: 100%;
  }
}

@media screen and (max-width: 550px) {
  .carousel {
    height: 150px;
    width: 100%;
  }
}
</style>
