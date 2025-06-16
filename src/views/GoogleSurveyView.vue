<template>
  <v-container class="mt-10">
    <v-row justify="center">
    <v-col cols="12" md="6">
        <v-card class="pa-6" max-width="600" elevation="4">
        <v-card-title class="text-h5 font-weight-bold">Svatební dotazník</v-card-title>
        <v-card-subtitle>Z rodiny/páru vyplňuje pouze jeden.</v-card-subtitle>
        <v-form @submit.prevent="submitForm" v-model="valid">
            <v-text-field
            v-model="form.jmeno"
            label="Jméno"
            :rules="[v => !!v || 'Jméno je povinné']"
            required
            />
            <v-text-field
            v-model="form.email"
            label="Email (pro zaslání fotografií)"
            :rules="[v => /.+@.+\..+/.test(v) || 'Neplatný email']"
            required
            />
            <v-text-field
            v-model="form.pocet"
            label="Počet osob"
            type="number"
            :rules="[v => !!v || 'Zadej počet']"
            required
            />

            <div class="d-flex align-center mb-4">
            <span class="mr-4">Budete u nás spát?</span>
            <v-switch
                v-model="form.spanek"
                :color="form.spanek ? 'green' : 'red'"
                hide-details
                inset
                class="ma-0 pa-0"
            />
            <span :style="{ color: form.spanek ? 'green' : 'red', 'font-weight': 'bold', 'margin-left': '8px' }">
                {{ form.spanek ? 'Ano' : 'Ne' }}
            </span>
            </div>

            <div class="d-flex align-center mb-4">
            <span class="mr-4">Potřebujete odvoz?</span>
            <v-switch
                v-model="form.odvoz"
                :color="form.odvoz ? 'green' : 'red'"
                hide-details
                inset
                class="ma-0 pa-0"
            />
            <span :style="{ color: form.odvoz? 'green' : 'red', 'font-weight': 'bold', 'margin-left': '8px' }">
                {{ form.odvoz ? 'Ano' : 'Ne' }}
            </span>
            </div>

            <v-textarea
            v-model="form.zprava"
            label="Zpráva"
            rows="2"
            auto-grow
            />

            <v-btn
            :disabled="!valid"
            color="primary"
            type="submit"
            class="mt-4"
            :loading="loading"
            >
            Odeslat
            </v-btn>

            <v-alert v-if="status === 'ok'" type="success" class="mt-4">
            Formulář byl úspěšně odeslán.
            </v-alert>
            <v-alert v-if="status === 'error'" type="error" class="mt-4">
            Nastala chyba při odesílání.
            </v-alert>
        </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  jmeno: '',
  email: '',
  pocet: '',
  spanek: false,
  odvoz: false,
  zprava: ''
})

const valid = ref(false)
const loading = ref(false)
const status = ref('')

// URL z Google Apps Scriptu
const GOOGLE_FORM_URL =
  'https://script.google.com/macros/s/AKfycbxRwQg27knbN6rM_w0LcFiZOx2wQnf4jLMsEPn-nVWhytmS7eqOJ_vdY99unDz8eOPO/exec'

const submitForm = async () => {
  loading.value = true
  status.value = ''

  const body = new URLSearchParams({
    jmeno: form.value.jmeno,
    email: form.value.email,
    pocet: form.value.pocet,
    spanek: form.value.spanek ? 'Ano' : 'Ne',
    odvoz: form.value.odvoz ? 'Ano' : 'Ne',
    zprava: form.value.zprava
  })

  try {
    const res = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })

    if (res.ok) {
      status.value = 'ok'
      form.value = { jmeno: '', email: '', pocet: '', spanek: false, odvoz: false, zprava: '' }
    } else {
      status.value = 'error'
    }
  } catch (err) {
    status.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>
