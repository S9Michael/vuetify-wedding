<template>
  <v-container class="my-10">
    <v-row>
      <!-- Google Mapa (Levá část) -->
      <v-col cols="12" md="6">
        <v-card class="elevation-3">
          <v-card-title class="bg-primary text-white">📍 Místo konání</v-card-title>
          <v-card-text class="pa-0">
            <iframe
              width="100%"
              height="350"
              :src="mapUrl"
              style="border:0; border-radius: 10px;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Textová informace (Pravá část) -->
      <v-col cols="12" md="6">
        <v-card class="elevation-3 pa-4">
          <v-card-title class="text-h5 font-weight-bold mb-2">
            💍 Svatební obřad
          </v-card-title>
          <v-card-text>
            <p class="text-body-1">
              <strong>📍 Místo:</strong> Statek Dolany<br>
              <strong>📆 Datum:</strong> 9. srpna 2025<br>
              <strong>🕒 Čas:</strong> 13:00<br>
              <strong>📌 Adresa:</strong> Dolany 32, 533 45 Dolany
            </p>
          </v-card-text>
          <!-- Tlačítko pro přidání do Google Kalendáře -->
          <v-card-actions>
            <v-btn color="pink darken-2" block class="white--text" @click="addToCalendar">
              📅 Přidat do Google Kalendáře
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';

const location = {
  lat: 50.1121439,  
  lng: 15.6920761
};

// Google Maps URL
const apiKey = "AIzaSyAbMS8byjoA-KDLKClC1Is83WwKui17gsE"; // Nahraď svým klíčem
const mapUrl = computed(() =>
  `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location.lat},${location.lng}`
);

// Uložit do Google Kalendáře
const addToCalendar = () => {

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Svatba%20Jana%20a%20Michael&details=Naše%20krásná%20svatba%20s%20rodinou%20a%20přáteli!&location=Dolany%2032%20,%20533%2045%20Dolany,%20&dates=20250809T103000Z/20250809T153000Z`
  
  window.open(calendarUrl, "_blank");
};
</script>

<style scoped>
p {
  line-height: 1.6;
}
</style>
