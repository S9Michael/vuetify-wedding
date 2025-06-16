<template>
    <v-container class="text-center my-10">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h1 class="text-h4 font-weight-bold mb-4">Náš příběh</h1>
          <p class="text-body-1">
            Naše společná cesta začala velmi nenápadně. Dlouhou dobu jsme se míjeli v jednom orchestru a netušili, že se jednoho dne naladíme na stejnou vlnu. A pak před sedmi lety přišlo první rande a od té doby hrajeme už jen jako duo.<br>
           
            Když nás zrovna nenajdete v práci nebo nad skripty, najdete nás někde vysoko – buď na stěně, na skalách, nebo na horách, ale i na kolech nebo na motorce. Cestování a dobrodružství je náš život, a i když občas šplháme do neznáma, jedno víme jistě – dále lezeme už jen spolu! ❤️
          </p>
        </v-col>
      </v-row>
  
      <v-row justify="center" class="mt-6">
        <v-col cols="12" md="8">
          <v-carousel hide-delimiters>
            <v-carousel-item src="@/assets/italie.jpeg" alt="Fotka 1"></v-carousel-item>
            <v-carousel-item src="@/assets/couple.jpeg" alt="Fotka 2"></v-carousel-item>
            <v-carousel-item src="@/assets/norsko.jpeg" alt="Fotka 3"></v-carousel-item>   
            <v-carousel-item src="@/assets/motofoto.jpeg" alt="Fotka 4"></v-carousel-item>        
            <v-carousel-item src="@/assets/sanmarino.jpeg" alt="Fotka 5"></v-carousel-item>   
            <v-carousel-item src="@/assets/slovinsko.jpeg" alt="Fotka 6"></v-carousel-item>
            <v-carousel-item src="@/assets/tatry.jpeg" alt="Fotka 7"></v-carousel-item>   
            <v-carousel-item src="@/assets/italie2.jpeg" alt="Fotka 8"></v-carousel-item> 
            <v-carousel-item src="@/assets/ferratyslovensko.jpeg" alt="Fotka 9"></v-carousel-item>  
            <v-carousel-item src="@/assets/img.jpeg" alt="Fotka 10"></v-carousel-item> 
                 
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .text-h4 {
    color: #5A86AD; /* Romantická růžová */
  }
  
  .text-body-1 {
    font-size: 18px;
    line-height: 1.6;
  }
  </style>
  