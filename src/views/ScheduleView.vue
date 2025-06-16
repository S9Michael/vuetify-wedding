<template>
  <v-container class="text-center my-10">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold mb-4">Harmonogram naší svatby</h1>

        <v-timeline align="center">
          <!-- Přípravy -->
          <v-timeline-item color="primary" icon="mdi-calendar-clock" dense>
            <template v-slot:opposite>
              <div class="timeline-opposite">
                <v-icon>mdi-car</v-icon>
                12:00
              </div>
            </template>
            <v-card>
              <v-card-title>Přípravy</v-card-title>
              <!-- <v-card-subtitle>Začátek dne, příprava nevěsty a ženicha</v-card-subtitle> -->
              <v-card-text>
                Příjezd hostů, přípravy nevěsty a ženicha.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Obřad -->
          <v-timeline-item color="secondary" icon="mdi-wedding" dense>
            <template v-slot:opposite>
              <div class="timeline-opposite">
                <v-icon>mdi-ring</v-icon>
                13:00
              </div>
            </template>
            <v-card>
              <v-card-title>Obřad</v-card-title>
              <!-- <v-card-subtitle>Slavnostní obřad</v-card-subtitle> -->
              <v-card-text>
                Nejdůležitější moment dne! Řekneme své <b>ANO</b> a stvrdíme naši lásku před rodinou a přáteli.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Focení -->
          <v-timeline-item color="secondary" icon="mdi-wedding" dense>
            <template v-slot:opposite>
              <div class="timeline-opposite">
                <v-icon>mdi-camera</v-icon>
                13:30
              </div>
            </template>
            <v-card>
              <v-card-title>Společné focení</v-card-title>
             <!--  <v-card-subtitle>Focení</v-card-subtitle>-->
              <v-card-text>
                Focení s rodinou a přáteli.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Oběd -->
          <v-timeline-item color="success" icon="mdi-food" dense>
            <template v-slot:opposite>
              <div class="timeline-opposite">
                <v-icon>mdi-glass-cocktail</v-icon>
                14:00
              </div>
            </template>
            <v-card>
              <v-card-title>Slavnostní přípitek a proslovy</v-card-title>
              <!-- <v-card-subtitle>Proslovy</v-card-subtitle>-->
              <v-card-text>
                Slavnostní přípitek s proslovy rodičů a přátel zakončený společnou polévkou.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Focení 2 -->
          <v-timeline-item color="secondary" icon="mdi-wedding" dense>
            <template v-slot:opposite>
              <div class="timeline-opposite">
                <v-icon>mdi-camera</v-icon>
                14:45
              </div>
            </template>
            <v-card>
              <v-card-title>Focení novomanželů</v-card-title>
              <!-- <v-card-subtitle>Focení</v-card-subtitle> -->
              <v-card-text>
                Nevěsta s ženichem na chvíli zmizí před objektiv, vy si zatím dejte něco dobrého.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Dort -->
          <v-timeline-item color="warning" icon="mdi-dance" dense>
            <template v-slot:opposite>
              <div class="timeline-opposite">
                <v-icon>mdi-cake</v-icon>
                15:45
              </div>
            </template>
            <v-card>
              <v-card-title>Krájení dortu</v-card-title>
              <!-- <v-card-subtitle>Královské krájení dortu</v-card-subtitle> -->
              <v-card-text>
                Pro nevěstu nejdůležitější část dne.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Tanec -->
          <v-timeline-item color="warning" icon="mdi-dance" dense>
            <template v-slot:opposite>
              <div class="timeline-opposite">
                <v-icon>mdi-music-note</v-icon>
                16:15
              </div>
            </template>
            <v-card>
              <v-card-title>Svatební tanec</v-card-title>
              <!--  <v-card-subtitle>První tanec novomanželů</v-card-subtitle> -->
              <v-card-text>
                Na parketu zazní náš <b>první tanec</b> jako manželé. Připravte si kapesníky, protože to bude romantika! 🥰
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <!-- Párty -->
          <v-timeline-item color="error" icon="mdi-party" dense>
            <template v-slot:opposite>
              <div class="timeline-opposite">
                <v-icon>mdi-puzzle</v-icon>
                16:30
              </div>
            </template>
            <v-card>
              <v-card-title>Párty a zábava</v-card-title>
              <!--  <v-card-subtitle>Zábava, tance a večerní program</v-card-subtitle> -->
              <v-card-text>
                Po večeři začne <b>skutečná oslava</b>! Hudba, tanec a spousta smíchu až do ranních hodin. 🎉
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// není potřeba žádný kód ve scriptu
</script>

<style scoped>
.text-h4 {
  color: #5A86AD; /* Romantická růžová */
}

.v-card {
  text-align: left;
  padding: 10px;
}

/* ZAROVNÁNÍ OPAČNÉ STRANY (IKONA + ČAS) */
.timeline-opposite {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* zarovnat doprava ke středové čáře */
  gap: 6px;
  height: 100%;
  min-height: 40px;
}

</style>
