<template>
  <div>
    学生列表：
    <ul>
      <li
       v-for = "(item,index) in list "
      :key = "index"
      >{{item}}</li>
    </ul>
    <div>
      {{name + ',' + login + ','+ height}}
      {{a}}
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
export default{

      props: ['list'],
      computed:{
        ...mapState({
        name: state => state.name,
        login: state =>state.login,
        height: state =>state.height
      }),
      a(){
        return 123
      }
      }
    }
</script>

<style scoped>

</style>
