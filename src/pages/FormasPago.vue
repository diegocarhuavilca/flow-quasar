<template>
  <q-page class="bg-dark">


    <div class="q-pa-md q-mx-auto content"  >
      <h3 class="text-weight-bold text-secondary q-mt-none q-pt-lg">Formas de Pago</h3>
      <div class="q-pa-md">
          <q-tabs
            v-model="tab"
            class="text-secondary"
          >
            <q-tab name="agente" icon="fas fa-store" label="Agentes" />
            <q-tab name="enLinea" icon="fas fa-laptop-house" label="Pago en linea" />
          </q-tabs>

      </div>
      <q-list v-if="tab=='enLinea'" style="width: 100%" class="q-mx-auto">
        <q-expansion-item group="somegroup" icon="perm_identity" >
          <template v-slot:header>
            <q-item-section avatar>
              <q-img
                src="~assets/brands/bcp.png"
                spinner-color="white"
                style=" width: 100px"
              />
            </q-item-section>

            <q-item-section class="text-weight-bold text-h5 text-white">
              Banco de Credito del Peru
            </q-item-section>


          </template>


          <q-card class="bg-transparent">
            <q-card-section>
              <div class="q-pa-md">
                <q-stepper
                  v-model="step"
                  ref="stepper"
                  color="primary"
                  animated
                >
                  <q-step
                    :name="1"
                    title="Ingresar al App"
                    icon="settings"
                    :done="step > 1"
                  >
                      <q-img
                        src="~assets/pagos/bcp/step_1.jpg"
                        spinner-color="white"
                        fit="contain"
                        height="450px"
                      />

                  </q-step>
                  <q-step
                    :name="2"
                    title="Pagar servicios"
                    icon="settings"
                    :done="step > 2"
                  >
                    <q-img
                      src="~assets/pagos/bcp/step_2.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>
                  <q-step
                    :name="3"
                    title="Buscar 'Flow'"
                    icon="settings"
                    :done="step > 3"
                  >
                    <q-img
                      src="~assets/pagos/bcp/step_3.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>

                  <q-step
                    :name="4"
                    title="Seleccionar Pagar servicios"
                    icon="settings"
                    :done="step > 4"
                  >
                    <q-img
                      src="~assets/pagos/bcp/step_4.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>

                  <q-step
                    :name="5"
                    title="Ingresar dni o ruc"
                    icon="settings"
                  >
                    <q-img
                      src="~assets/pagos/bcp/step_5.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>

                  <template v-slot:navigation>
                    <q-stepper-navigation>
                      <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 5 ? 'Finish' : 'Continue'" />
                      <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                    </q-stepper-navigation>
                  </template>
                </q-stepper>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item group="somegroup" icon="perm_identity" label="Banco de Credito del Peru" header-class="text-teal">
          <template v-slot:header>
            <q-item-section avatar>
              <q-img
                src="~assets/brands/bbva.png"
                spinner-color="white"
                style=" width: 100px"
              />
            </q-item-section>

            <q-item-section class="text-weight-bold text-h5 text-white">
              BBVA Perú
            </q-item-section>


          </template>


          <q-card class="bg-transparent">
            <q-card-section>
              <div class="q-pa-md">
                <q-stepper
                  v-model="step2"
                  ref="stepper"
                  color="primary"
                  animated
                >
                  <q-step
                    :name="1"
                    title="Ingresar al app"
                    icon="settings"
                    :done="step2 > 1"
                  >
                    <q-img
                      src="~assets/pagos/bbva/bbva_1.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>
                  <q-step
                    :name="2"
                    title="Pagar servicios"
                    icon="settings"
                    :done="step2 > 2"
                  >
                    <q-img
                      src="~assets/pagos/bbva/bbva_2.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>
                  <q-step
                    :name="3"
                    title="Agredar servicios a pagar"
                    icon="settings"
                    :done="step2 > 3"
                  >
                    <q-img
                      src="~assets/pagos/bbva/bbva_3.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>

                  <q-step
                    :name="4"
                    title="Buscar 'Flow'"
                    icon="settings"
                    :done="step2 > 4"
                  >
                    <q-img
                      src="~assets/pagos/bbva/bbva_4.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>

                  <q-step
                    :name="5"
                    title="Ingresar DNI"
                    icon="settings"
                    :done="step2 > 5"
                  >
                    <q-img
                      src="~assets/pagos/bbva/bbva_5.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>
                  <q-step
                    :name="6"
                    title="Validar Datos"
                    icon="settings"
                    :done="step2 > 6"
                  >
                    <q-img
                      src="~assets/pagos/bbva/bbva_6.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>
                  <q-step
                    :name="7"
                    title="Elegir los recibos"
                    icon="settings"
                    :done="step2 > 7"
                  >
                    <q-img
                      src="~assets/pagos/bbva/bbva_7.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>
                  <q-step
                    :name="8"
                    title="Confirmar pago"
                    icon="settings"

                  >
                    <q-img
                      src="~assets/pagos/bbva/bbva_8.jpg"
                      spinner-color="white"
                      fit="contain"
                      height="450px"
                    />

                  </q-step>

                  <template v-slot:navigation>
                    <q-stepper-navigation>
                      <q-btn @click="$refs.stepper.next()" color="primary" :label="step2 === 8 ? 'Finish' : 'Continue'" />
                      <q-btn v-if="step2 > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                    </q-stepper-navigation>
                  </template>
                </q-stepper>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
      <q-card class=" q-py-lg q-mx-auto text-primary bg-grey-4" style="width: 50%"  v-if="tab=='agente'">

        <q-card-section>
          <p class="text-weight-bold" >Puedes realizar el pago de tus recibos en los agentes BCP</p>
          <div class="flex row justify-center">
            <div class="col text-center"><q-img  src="~assets/brands/bcp.png" width="150px"/></div>
            <div class="col  flex column justify-center text-weight-bold">
              <p>Empresa 23194</p>
              <p>+codigo abonado</p>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="q-mt-md text-weight-bold">
            <p>*El horario de atención de los agentes se encuentra bajo disponibilidad de los establecimiento</p>
            <p>*No olvides brindar tu código de abonado que es tu DNI o Carnet de Extranjería</p>
          </div>
        </q-card-section>



      </q-card>






      <h4 class="text-secondary text-weight-bold">Instalacion</h4>
      <q-card class=" q-pb-lg q-mx-auto text-primary bg-grey-4 q-my-md" style="max-width: 550px" >



        <q-card-section>
          <h5  class="q-my-none q-mb-md text-weight-bold text-primary">Banco de Credito del Peru</h5>
          <div class="flex row justify-center">
            <div class="col text-center"><q-img  src="~assets/brands/bcp.png" width="150px"/></div>
            <div class="col  flex column justify-center text-weight-bold">
              <p>  Cuenta Corriente S/.: 193-2373284-0-64</p>
              <p>              Cuenta Interbancaria: 002 193 002373284064-12
              </p>

            </div>
          </div>


        </q-card-section>



      </q-card>

      <q-card class=" q-pb-lg q-mx-auto text-primary bg-grey-4 q-my-md" style="max-width: 550px" >



        <q-card-section>
          <h5  class="q-my-none q-mb-md text-weight-bold text-primary">BBVA Peru</h5>
          <div class="flex row justify-center">
            <div class="col text-center"><q-img  src="~assets/brands/bbva.png" width="150px"/></div>
            <div class="col  flex column justify-center text-weight-bold">
              <p>  Cuenta Corriente S/.: 0011-0138-02-00455658</p>
              <p>             Cuenta Interbancaria: 011 138 000200455658 51
              </p>

            </div>
          </div>


        </q-card-section>



      </q-card>
      <q-card class=" q-pb-lg q-mx-auto text-primary bg-grey-4 q-my-md" style="max-width: 550px" >



        <q-card-section>
          <h5  class="q-my-none q-mb-md text-weight-bold text-primary">Interbank</h5>
          <div class="flex row justify-center">
            <div class="col text-center"><q-img  src="~assets/brands/interbank.png" width="150px"/></div>
            <div class="col  flex column justify-center text-weight-bold">
              <p>  Cuenta Corriente S/.: 200-3001485600 </p>
              <p>             Cuenta Interbancaria: 003 200 00300148560036

              </p>

            </div>
          </div>


        </q-card-section>



      </q-card>
    </div>


  </q-page>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue';

export default defineComponent({
  setup() {
    return {
      tab: ref('agente'),
      step: ref(1),
      step2: ref(1),
      bbva() {
        window.document
          .getElementById('test')
          ?.scrollIntoView({ behavior: 'smooth' });
      },

    };
  },
});
</script>

<style scoped lang="scss">
.content{
  max-width: 1440px;
  margin:auto;

  .banner{
    width: 50%;
    margin: 30px auto;
  }
}
</style>
