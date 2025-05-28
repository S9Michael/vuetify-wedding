<template>
  <v-app>
    <v-main>  
      <v-app-bar 
      scroll-behavior="hide"      
      title = "" 
      text-color="#5A86AD"       
      >
      <v-switch @click="toggleTheme" 
                v-model="model" 
                color=#5A86AD  
                hide-details="true"    
                
                inset
       /> 
       <v-btn width="150px" to="/home">ÚVOD</v-btn>
      <v-btn width="150px" to="/about">MY DVA</v-btn>
      <v-btn width="150px" to="/wedding">NAŠE SVATBA</v-btn>
      <v-btn width="150px" to="/schedule">HARMONOGRAM</v-btn>
      <v-btn width="200px" to="/info">UŽITEČNÉ INFORMACE</v-btn>
  
      </v-app-bar>
      
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const model = ref(theme.global.name.value) // Sync with v-model

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>



