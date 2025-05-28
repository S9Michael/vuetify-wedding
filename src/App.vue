<template>
  <v-app>
    <v-main>
      <v-app-bar
        v-if="showAppBar"
        scroll-behavior="hide"
        text-color="#5A86AD"
        flat
        :density="$vuetify.display.smAndDown ? 'compact' : 'default'"
      >
        <!-- App Bar Content -->
        <v-container class="d-flex align-center pa-0" fluid>
          <!-- Theme Switch -->
          <v-switch
            @click="toggleTheme"
            v-model="model"
            color="#5A86AD"
            hide-details
            inset
            class="mr-4"
          />

          <!-- Scrollable Nav -->
          <div class="nav-scroll">
            <v-btn
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="nav-btn"
              variant="text"
              :class="{ active: $route.path === item.to }"
            >
              {{ item.label }}
            </v-btn>
          </div>
        </v-container>
      </v-app-bar>

      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import { useRoute } from 'vue-router'

const theme = useTheme()
const model = ref(theme.global.name.value)

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const route = useRoute()
const showAppBar = computed(() => {
  const hiddenPaths = ['/', '/forgottenpassword']
  return !hiddenPaths.includes(route.path)
})

const navItems = [
  { label: 'ÚVOD', to: '/home' },
  { label: 'MY DVA', to: '/about' },
  { label: 'NAŠE SVATBA', to: '/wedding' },
  { label: 'HARMONOGRAM', to: '/schedule' },
  { label: 'UŽITEČNÉ INFORMACE', to: '/info' }
]
</script>

<style scoped>
.nav-scroll {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  flex: 1;
}

.nav-btn {
  text-transform: uppercase;
  font-size: 13px;
  min-width: 120px;
  padding: 0 12px;
  color: #5A86AD;
}

.nav-btn.active {
  font-weight: bold;
  border-bottom: 2px solid #5A86AD;
  border-radius: 0;
}
</style>
<!-- /*    /index.html   200 -->