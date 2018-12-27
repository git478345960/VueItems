import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Community from '@/components/Community'
// import Home from '@/components/Home'
import Learn from '@/components/learn'
import Student from '@/components/Student'
import Academic from '../components/community/Academic'
import Download from '../components/community/Download'
import Person from '../components/community/Person'
import Question from '../components/Question'
import Error from '../components/Error'
import ChangeCourse from '../components/ChangeCourse'
const Home = () => import('@/components/Home');//懒加载
Vue.use(Router)
const router =  new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exactActive',
  routes: [
    {
      path: '/home',
      name: 'Home',
      components: {
        default: Home,
        'academic': Academic
      }
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
      redirect: '/community/academic',
      meta:{
        login: false
      },
      children:[
        {
          path: 'academic',
          name: 'Academic',
          component: Academic,

          // 独享守卫
          // beforeEnter(to,from,next){
          //   const answer =  confirm('你还没有登陆，你确定要登陆吗？');
          //   if(answer){
          //     next({name:'Person'})
          //   }else{
          //     next(false);
          //   }
          // }

        },
        {
          path: 'download',
          name: 'Download',
          component: Download,
        },
        {
          path: 'person',
          name: 'Person',
          component: Person,
        }
      ]
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn,
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/question/:id',
      name: 'question',
      component: Question
    },
    {
      path: '/error.html',
      name: 'error',
      component: Error
    },
    {
      path: '*',
      redirect(to){
        if(to.path == '/'){
          return '/home'
        }else{
          return {name: 'error'}
        }
      }
    },
    {
      path: '/learn/changeCourse',
      name: 'changeCourse',
      component:ChangeCourse
    }

  ]
})
// 全局守卫
// router.beforeEach((to,from,next) =>{
//   if(to.path === '/community/academic'){
//     const answer =  confirm('你还没有登陆，你确定要登陆吗？');
//     if(answer){
//       next({name:'Person'})
//     }else{
//       next(false);
//     }
//   }else{
//     next();
//   }
// })



export default router;
