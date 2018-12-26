<template>
<div><button @click="handleplay">{{loginFlag ? '退出' : '登录'}}</button></div>

</template>

<script>
export default{

  data(){
    return {
      loginFlag: false,
    }
  },
  created(){

    this.loginFlag = this.$route.matched[0].meta.login;
    // console.log(this.$route.matched[0].meta.login);
  },
  methods:{
    handleplay(){
      this.loginFlag = !this.loginFlag;
      this.$route.matched[0].meta.login = this.loginFlag;
    }
  }
}
</script>

<style scoped>

</style>
