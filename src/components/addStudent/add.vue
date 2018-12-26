<template>
    <div>添加学生：<input type="text" v-model = name>
    <button @click="add">add</button></div>

</template>

<script>
export default{
  data(){
    return {
      name:'',
    }
  },
  methods:{
    add(){
      this.$emit('add',this.name);


    }
  }
}
</script>

<style scoped>

</style>
