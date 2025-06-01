import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogInView.vue'
import AboutView from '../views/AboutView.vue'
import WeddingView from '../views/WeddingView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import InfoView from '../views/InfoView.vue'
import ForgottenPassword from '../views/ForgottenPasswordView.vue'
import GoogleSurveyView from '../views/GoogleSurveyView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LogIn
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: AboutView
  },
  {
    path: '/Wedding',
    name: 'Wedding',
    component: WeddingView
  },
  {
    path: '/Schedule',
    name: 'Schedule',
    component: ScheduleView
  },
  {
    path: '/Info',
    name: 'Info',
    component: InfoView
  },
  {
    path: '/forgottenpassword',
    name: 'forgottenpassword',
    component: ForgottenPassword
  } ,
    {
    path: '/googlesurvey',
    name: 'googlesurvey',
    component: GoogleSurveyView
  } 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router