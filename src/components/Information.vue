<template>
  <div >
    <div class="main q-py-xl bg-primary">
      {{}}
      <div class="content">
        <div class="row full-width justify-around">
          <div class="colum" v-for="(info,key) in informaciones" :key="key">
            <q-card
              flat
              class="my-card bg-transparent text-white"

            >
              <img
                :src="info.imagen"
                class="q-mx-auto image-card"
              />
              <q-card-section>
                <div class="text-h6 text-weight-bold text-center">
                  {{info.titulo}}
                </div>
                <div class="text-justify">
                 {{info.contenido}}
                </div>
              </q-card-section>
            </q-card>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {informaciones} from 'src/constants/informacion'

export default defineComponent({
  setup() {
    return {informaciones};
  },
});
</script>

<style scoped lang="scss">
.content {
  max-width: 1440px;
  margin: auto;
}

.my-card {
  max-width: 340px;
  margin: auto;

  .image-card{
    max-width: 200px;
  }
}

.main{
  position: relative;
  padding: 6rem 0;
}

.wave{
  position: absolute;
  bottom: 0px;
}

@media screen and (max-width: 667px) {
  .my-card{

    .image-card{
      max-width: 150px;
    }
  }
}



</style>
