<template>
    <div>
        问题{{question}}
    </div>

</template>

<script>
export default {
    created () {
        const questionId = this.$route.params.id;
        const index = this.questionList.findIndex( item => item.questionId == questionId)
        console.log(questionId);
        // console.log(this);
        if(index == -1){
            // this.$router.go(-1);
            // this.$router.replace('/error.html');
            this.$router.push('/error.html')
        }else{
            this.question = this.questionList[index].title;
        }
    },
     data(){
        return {
            question: '',
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