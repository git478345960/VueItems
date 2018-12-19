import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Community from '@/components/Community'
import Home from '@/components/Home'
import Learn from '@/components/learn'
import Student from '@/components/Student'
import Academic from '../components/community/Academic'
import Download from '../components/community/Download'
import Person from '../components/community/Person'
Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exactActive',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about/:id?',
      name: 'About',
      component: About
    },
    {
      path: '/community',
      name: 'Community',
      component: Community,
      children:[
        {
          path: 'community/academic',
          name: 'Academic',
          component: Academic,
        },
        {
          path: 'community/download',
          name: 'Download',
          component: Download,
        },
        {
          path: 'community/person',
          name: 'Person',
          component: Person,
        }
      ]
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    }
  ]
})
