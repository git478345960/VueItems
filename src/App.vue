<template>
  <div id="app">
    <div class="nav">
        <router-link to = "/home">首页</router-link>
        <router-link to = "/learn">课程学习</router-link>
        <router-link to = "/student">学员展示</router-link>
        <!-- <router-link to = "/about">关于</router-link> -->
        <router-link :to = "{name: 'About',params:{id:123}}">关于</router-link>
        <router-link to = "/community">社区</router-link>
    </div>
    <div class = "content">
        <router-view></router-view>
        <!-- <router-view name = "academic"></router-view> -->
    </div>
  </div>
</template>

<script>

</script>

<style>

  .content{
    height:600px;
    width:1100px;
    background-color:#fff;
    margin:auto;
  }
  .active{
    color:blue;
  }
  .exactActive{
    color:red;
  }
  *{
    margin:0;
    padding:0;
  }
  li{
    list-style:none;
  }
</style>
