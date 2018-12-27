<template>
    <div>添加学生：<input type="text" v-model = name>
    <button @click="changeStudent({name,number:1})">add</button>
    </div>

</template>

<script>
import { mapState,mapActions} from 'vuex';
export default{
  data(){
    return {
      name:'',
    }
  },
  computed:{
    ...mapState({
      storeName: state => state.name,
      storeHeight: state => state.height,
      storeLogin: state => state.login,
      storeStudentList : state => state.studentList,
    }),
  },
  methods:{
    // add(){
    //   // this.$emit('add',this.name);
    //     // this.storeStudentList.push(this.name);
    //     this.$store.commit('changeStudent',this.name);
    // }
    ...mapActions('student',['changeStudent'])
  }
}
</script>

<style scoped>

</style>
