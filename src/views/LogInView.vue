<template>
    <div > 
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
        @submit.prevent="login"        
      >
      <v-form @submit.prevent="login">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
        
        <v-text-field
         v-model="username"
          density="compact"
          label="Username"
          required
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
          <a
            class="text-caption text-decoration-none"
            href="forgettenpassword"
            style = "color:#5A86AD"
            rel="noopener noreferrer"
            target="_self"
          >
            Forgot login password?</a>
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          label="Password"
          v-model="password"
          required
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
    
        <v-btn 
          class="mb-8"
          color="#5A86AD"
          size="large"
          variant="tonal"
          type="submit"
          block
           >
          Log In
        </v-btn> 
        <v-alert
          v-if="errorMessage"
          type="error"
          dismissible
        >{{ errorMessage }}</v-alert>        
        </v-form>
      </v-card>
    </div>
  </template>

  <script>
  
    export default {
      data: () => ({
        visible: false,
        username: '',
        password: '',
        errorMessage: ''
      }),
      methods: {
      async login() {
        this.errorMessage = ''; // Clear previous error message
        // Replace this with your actual authentication logic
        const isAuthenticated = await this.checkCredentials(this.username, this.password);
        if (!isAuthenticated) {
          this.errorMessage = 'Invalid username or password.';
        } else {
          // Redirect or perform successful login actions
          this.$router.push('/home'); // Adjust the route as needed
        }
      },
      async checkCredentials(username, password) {
        // Mock authentication service; replace with your actual API call
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(username === 'svatba' && password === 'sulcovi'); // Example check
          }, 500);
        });
      }
    }
    }
  </script>