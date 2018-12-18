<template>
<div>
    <ul>
      <router-link tag = "li" :to="{name:'Academic'}">学术讨论</router-link>
      <router-link tag = "li" :to="{name:'Download'}">下载</router-link>
      <router-link tag = "li" :to="{name:'Person'}">个人中心</router-link>
    </ul>
  <router-view></router-view>

</div>

</template>

<script>
export default{

}
</script>

<style scoped>

</style>
