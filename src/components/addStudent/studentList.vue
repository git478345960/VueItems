<template>
  <div>
    学生列表：
    <ul>
      <li
       v-for = "(item,index) in newStudent "
      :key = "index"
      >{{item}}</li>
    </ul>
  </div>

</template>

<script>
import { mapState,mapGetters } from 'vuex';
export default{

      // props: ['list'],
      computed:{
        ...mapState({
        name: state => state.name,
        login: state =>state.login,
        height: state =>state.height,
        storeStudentList : state => state.studentList
      }),
      ...mapGetters({
        newStudent: 'newStudent'
      })
      // ...mapState(['studentList']),
      // newStudent(){
      //   return this.$store.getters.newStudent;
      // }

      }
    }
</script>

<style scoped>

</style>
