<template>
<div>
    <ul>
        <router-link 
        v-for ="item in questionList"
        :key = "item.questionId"
        tag= "li"
        :to = "{name: 'question', params :{id:item.questionId}}">
        {{item.title}}</router-link>
    </ul>
    </div>

</template>

<script>

export default{
    beforeRouteEnter(to,from,next){
        const answer = confirm('还没有登陆，要登陆吗');
        if(answer){
            next({name:'Person'});
        }else{
            next(false);
        }
    },
    data(){
        return {
            questionList: [
                {
                    questionId: 201801,
                    title: '到底什么是es6中的class（类）？怎么实现class（类）？'
                },
                {
                    questionId: 201802,
                    title: '什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？'
                },
                {
                    questionId: 201803,
                    title: '什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
