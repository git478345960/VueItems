<template>
    <div>添加学生：<input type="text" v-model = name>
    <button @click="add">add</button>
    <div>{{storeName}}</div>
    </div>

</template>

<script>
export default{
  data(){
    return {
      name:'',
      storeName : this.$store.state.name,
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
