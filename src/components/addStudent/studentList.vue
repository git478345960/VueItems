<template>
  <div>
    学生列表：
    <ul>
      <li
       v-for = "(item,index) in list "
      :key = "index"
      >{{item}}</li>
    </ul>
  </div>

</template>

<script>
export default{

      props: ['list']
    }
</script>

<style scoped>

</style>
