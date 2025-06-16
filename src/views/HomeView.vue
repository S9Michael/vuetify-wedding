<template>
  <v-container>
    <!-- Hero Section -->
    <v-row justify="center" class="text-center my-10">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold custom-font">Jana a Michael</h1>
        <p class="wedding-date">Budeme se brát 9. srpna 2025!</p>
      </v-col>
    </v-row>

    <!-- About Section -->
    <v-row class="my-10" justify="center">
      <v-col cols="12"  md="7">
            <v-sheet class="rounded-img">
                   <v-img 
                    src="../assets/norsko2.jpeg"
                    height="650"
                    cover 
                    class="rounded-img"
                  ></v-img>
           </v-sheet>
      </v-col>

    </v-row>

<!-- Event Details -->
<v-row justify="center" class="text-center my-10">
  <v-col cols="12">
    <h1 class="headline font-weight-bold">Detaily svatby:</h1>

    <p class="text-h6">📍 Dolany 32, 533 45 Dolany</p>
    <p class="text-h6">⏰ 9. srpna 2025</p>

    <!-- Button: Add to Google Calendar -->
      <v-card-actions class="justify-center">
        <v-btn
          color="indigo darken-2"
          class="white--text"
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Svatba%20Jana%20a%20Michael&details=Naše%20krásná%20svatba%20s%20rodinou%20a%20přáteli!&location=Dolany%2032%20,%20533%2045%20Dolany,%20&dates=20250809T103000Z/20250809T153000Z"
          target="_blank"
        >
          📅 Přidat do Google Kalendáře
        </v-btn>
      </v-card-actions>

      <!-- Button: Open in Google Maps -->
      <v-card-actions class="justify-center">
        <v-btn
          color="indigo darken-2"
          class="white--text"
          href="https://www.google.com/maps/@50.1121664,15.6917061,17z?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          📌 Otevřít v Google Maps
        </v-btn>
      </v-card-actions>

    </v-col>
  </v-row>



  </v-container>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.custom-font {
  font-family: 'Great Vibes', cursive;
  font-size: 7rem; 
  color: #5A86AD; 
}
.wedding-date {
  font-size: 2rem; 
  font-weight: bold;
}
.rounded-img {
  border-radius: 30px; 
  overflow: hidden; /* Ensures rounding applies */
}
</style>