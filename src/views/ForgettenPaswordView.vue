<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="250"
    max-width="800"
    width="100%"    
    rounded  
    
  >
    <div>
      <h2 class="text-h4 font-weight-black" style="color:#fec20c">Congratulations!</h2>

      <div class="text-h5 font-weight-medium mb-2">
        You have officially forgotten your password!
      </div>


      <v-btn color="#5A86AD" variant="text" href="/">Go to Login</v-btn>
    </div>
  </v-sheet>
</template>

<script setup>
//import { useTheme } from 'vuetify'
//import { onMounted } from 'vue'

//const theme = useTheme()

/*
// Set the theme on app initialization
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light' // Default to light if not set
  theme.global.name.value = savedTheme
})*/
</script>

